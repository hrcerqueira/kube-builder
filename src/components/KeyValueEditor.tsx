import { Box, Button, Text, TextInput } from 'grommet';
import { FormTrash } from 'grommet-icons';
import React, { useState } from 'react';
import { EMPTY_K8S_MAP_ENTRY, K8SMap, K8SMapEntry } from '../k8s/model/K8sObject';
import { flatten } from '../utils/array';
import { createKubeLabelValidator, validateAnnotationKey, validateNotReservedKeyPrefix } from '../utils/validation';

const KeyValueLine = ({line: {key, value}, onChange}:
                        {line: K8SMapEntry, onChange: (line: K8SMapEntry) => void}) => {

    const onPropChange = (prop: string, propVal: string) => {
        const newLine = {key, value, ...{[prop]: propVal}};
        onChange(newLine);
    };

    return <Box direction={"row"} margin={{bottom: "xsmall"}}>
        <Box flex={{grow: 1}}>
            <TextInput
                value={key}
                onChange={({target: { value }}: any) => onPropChange('key', value)}
            />
        </Box>
        <Box flex={{grow: 3}}>
            <TextInput
                value={value}
                onChange={({target: { value }}: any) => onPropChange('value', value)}
            />
        </Box>
        <Button icon={<FormTrash />} onClick={() => onChange(EMPTY_K8S_MAP_ENTRY)} disabled={!key && !value} />
    </Box>
}

type KeyValueWIthId = {id: number, line: K8SMapEntry}[];
type KeyValueErrors = {[id: number]: string[]};
type KeyValueType = 'annotation' | 'label';

const addError = (errors: KeyValueErrors, id: number, label: string) =>
    (errors[id] = errors[id] || []).push(label)


const validateUniqueKeys = (annotations: KeyValueWIthId, errors: KeyValueErrors) => {
    const keysOnly = annotations.map(({line: {key}}) => key);
    const keySet = new Set(keysOnly);

    if (keySet.size === keysOnly.length) {
        return;
    }

    annotations.forEach(({id, line: {key}}) => {
        if (keysOnly.filter(koe => koe === key).length > 1) {
            addError(errors, id, 'Key must be unique');
        }
    })
};

const validateKeyFormat = (annotations: KeyValueWIthId, type: KeyValueType, updated: number, errors: KeyValueErrors) => {
    const {line: {key}} = annotations.find(({id}) => id === updated) || { line: EMPTY_K8S_MAP_ENTRY };

    if (!validateAnnotationKey(key)) {
        addError(errors, updated, `Valid ${type} keys have two segments: ` +
            'an optional prefix and name, separated by a slash (/). The name segment is required and must be 63 characters or less, ' +
            'beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores (_), dots (.), ' +
            'and alphanumerics between. The prefix is optional. If specified, the prefix must be a DNS subdomain: a series of DNS labels ' +
            'separated by dots (.), not longer than 253 characters in total, followed by a slash (/).');
    } else if (!validateNotReservedKeyPrefix(key)) {
        addError(errors, updated, 'The kubernetes.io/ and k8s.io/ prefixes are reserved for Kubernetes core components.');
    }
};

const validateLabelValue = createKubeLabelValidator(63, 'Label values can be up to 63 characters long. ' +
    'The characters allowed in label values are: digits (0-9), ' +
    'lower case letters (a-z), dashes (-), dots (.) and underscores (_), and must start and end with a digit or lower case letter', true);

const validateLabelValues = (annotations: KeyValueWIthId, updated: number, errors: KeyValueErrors) => {
    const {line: {value}} = annotations.find(({id}) => id === updated) || { line: EMPTY_K8S_MAP_ENTRY };

    if (!value) {
        return;
    }

    const error = validateLabelValue(value);

    if (error) {
        addError(errors, updated, error);
    }
}

const validateKeyValues = (annotations: KeyValueWIthId, type: KeyValueType, updated: number) => {
    const errors: KeyValueErrors = {};

    const withoutEmpty = annotations.slice(0, annotations.length - 1);

    validateUniqueKeys(withoutEmpty, errors);
    validateKeyFormat(annotations, type, updated, errors);

    if (type === 'label') {
        validateLabelValues(annotations, updated, errors);
    }

    return errors;
}

const initialStateAnnotations = (annotations: K8SMap) => {
    let id = 0;
    return [...annotations, EMPTY_K8S_MAP_ENTRY].map(line => ({id: ++id, line}));
}

const nextId = (annotations: KeyValueWIthId) =>
    annotations.reduce((max, {id}) => id > max ? id : max, 0) + 1;

const prepareForCallback = (annotations: KeyValueWIthId) =>
    ({value: annotations.slice(0, annotations.length - 1).map(({line}) => line)})

export const KeyValueEditor = ({annotations, type, onChange}:
                               {annotations: K8SMap, type: KeyValueType, onChange: (event: {value: K8SMap}) => void}) => {

    const [copy, setCopy] = useState(initialStateAnnotations(annotations || []));
    const [errors, setErrors] = useState({} as KeyValueErrors);

    const onLineChange = (id: number) => (newLine: K8SMapEntry) => {
        let newAnnotations;
        if (!newLine.key && !newLine.value) {
            newAnnotations = copy.filter(({id: eid}) => eid === id ? false : true);
        } else {
            newAnnotations = copy.map(lineWithId => lineWithId.id === id ? {id: lineWithId.id, line: newLine} : lineWithId);

            if (id === copy[copy.length - 1].id) {
                newAnnotations = [...newAnnotations, {id: nextId(copy), line: EMPTY_K8S_MAP_ENTRY}] as KeyValueWIthId;
            }
        }

        setCopy(newAnnotations);

        const errors = validateKeyValues(newAnnotations, type, id);

        if (!Object.keys(errors).length) {
            onChange(prepareForCallback(newAnnotations));
        }

        setErrors(errors);
    };

    return <Box>
        { flatten(copy.map(({id, line}) => {
            const lineComponent = <KeyValueLine key={id} line={line} onChange={onLineChange(id)}/>;

            if (errors[id]) {
                return [lineComponent, <Text key={`${id}-errors`} color={"status-error"}>{errors[id].join(', ')}</Text>]
            } else {
                return lineComponent;
            }

        })) }
    </Box>
}