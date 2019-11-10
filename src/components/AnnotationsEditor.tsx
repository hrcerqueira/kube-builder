import { Box, Button, Text, TextInput } from 'grommet';
import { FormTrash } from 'grommet-icons';
import React, { useState } from 'react';
import { EMPTY_K8S_MAP_ENTRY, K8SMap, K8SMapEntry } from '../k8s/model/K8sObject';
import { flatten } from '../utils/array';
import { validateAnnotationKey } from '../utils/validation';

const AnnotationLine = ({line: {key, value}, onChange}:
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

type AnnotationsWIthId = {id: number, line: K8SMapEntry}[];
type AnnotationErrors = {[id: number]: string[]};

const addError = (errors: AnnotationErrors, id: number, label: string) =>
    (errors[id] = errors[id] || []).push(label)


const validateUniqueKeys = (annotations: AnnotationsWIthId, errors: AnnotationErrors) => {
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

const validateKeyFormat = (annotations: AnnotationsWIthId, updated: number, errors: AnnotationErrors) => {
    const {line: {key}} = annotations.find(({id}) => id === updated) || { line: EMPTY_K8S_MAP_ENTRY };

    if (!validateAnnotationKey(key)) {
        addError(errors, updated, 'Valid annotation keys have two segments: ' +
            'an optional prefix and name, separated by a slash (/). The name segment is required and must be 63 characters or less, ' +
            'beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores (_), dots (.), ' +
            'and alphanumerics between. The prefix is optional. If specified, the prefix must be a DNS subdomain: a series of DNS labels ' +
            'separated by dots (.), not longer than 253 characters in total, followed by a slash (/).');
    }
};

const validateAnnotations = (annotations: AnnotationsWIthId, updated: number) => {
    const errors: AnnotationErrors = {};

    const withoutEmpty = annotations.slice(0, annotations.length - 1);

    validateUniqueKeys(withoutEmpty, errors);
    validateKeyFormat(annotations, updated, errors);

    return errors;
}

const initialStateAnnotations = (annotations: K8SMap) => {
    let id = 0;
    return [...annotations, EMPTY_K8S_MAP_ENTRY].map(line => ({id: ++id, line}));
}

const nextId = (annotations: AnnotationsWIthId) =>
    annotations.reduce((max, {id}) => id > max ? id : max, 0) + 1;

const prepareForCallback = (annotations: AnnotationsWIthId) =>
    ({value: annotations.slice(0, annotations.length - 1).map(({line}) => line)})

export const AnnotationsEditor = ({annotations, onChange}: {annotations: K8SMap, onChange: (event: {value: K8SMap}) => void}) => {

    const [copy, setCopy] = useState(initialStateAnnotations(annotations || []));
    const [errors, setErrors] = useState({} as AnnotationErrors);

    const onLineChange = (id: number) => (newLine: K8SMapEntry) => {
        let newAnnotations;
        if (!newLine.key && !newLine.value) {
            newAnnotations = copy.filter(({id: eid}) => eid === id ? false : true);
        } else {
            newAnnotations = copy.map(lineWithId => lineWithId.id === id ? {id: lineWithId.id, line: newLine} : lineWithId);

            if (id === copy[copy.length - 1].id) {
                newAnnotations = [...newAnnotations, {id: nextId(copy), line: EMPTY_K8S_MAP_ENTRY}] as AnnotationsWIthId;
            }
        }

        setCopy(newAnnotations);

        const errors = validateAnnotations(newAnnotations, id);

        if (!Object.keys(errors).length) {
            onChange(prepareForCallback(newAnnotations));
        }

        setErrors(errors);
    };

    return <Box>
        { flatten(copy.map(({id, line}) => {
            const lineComponent = <AnnotationLine key={id} line={line} onChange={onLineChange(id)}/>;

            if (errors[id]) {
                return [lineComponent, <Text key={`${id}-errors`} color={"status-error"}>{errors[id].join(', ')}</Text>]
            } else {
                return lineComponent;
            }

        })) }
    </Box>
}