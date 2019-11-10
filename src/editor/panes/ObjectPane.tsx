import { Form } from 'grommet';
import React from 'react';
import { useDispatch } from 'react-redux';
import { AnnotationsEditor } from '../../components/AnnotationsEditor';
import { FormFieldHelper } from '../../components/FormFieldHelper';
import { K8sKinds } from '../../k8s/K8sKinds';
import { K8sObject, KindName } from '../../k8s/model/K8sObject';
import { setApiVersion, setMetadataProperty } from '../../store/descriptor';
import { createKubeLabelValidator } from '../../utils/validation';
import { DeploymentPane } from './DeploymentPane';
import { PaneProps } from './PaneProps';

const renderKindSpecificPane = (object: K8sObject, index: number) => {
    switch (object.kind) {
        case KindName.Deployment:
            return <DeploymentPane object={object} index={index} />
        default:
            return null;
    }
}

const validateName = createKubeLabelValidator(253, 'Kubernetes resources names can have names up to 253 characters long. ' +
    'The characters allowed in names are: digits (0-9), ' +
    'lower case letters (a-z), -, and ., and must start and end with a digit or lower case letter');

export const ObjectPane = ({object, object: {metadata: {name, namespace, annotations}, kind, apiVersion}, index}: PaneProps<K8sObject>) => {
    const dispatch = useDispatch();
    const versions = K8sKinds.instance.supportedVersions(kind);

    return <Form>
        <FormFieldHelper
            name={"name"}
            label={"Name"}
            value={name}
            validate={validateName}
            onValidValue={value => dispatch(setMetadataProperty({index, key: 'name', value}))}
        />
        <FormFieldHelper
            name={"namespace"}
            label={"Namespace"}
            value={namespace || ''}
            validate={validateName}
            onValidValue={value => dispatch(setMetadataProperty({index, key: 'namespace', value}))}
        />
        <FormFieldHelper
            name={"version"}
            label={"API Version"}
            value={apiVersion || ''}
            onValidValue={value => dispatch(setApiVersion({index, value}))}
            fieldType={'select'}
            fieldOptions={{options: versions}}
        />
        <FormFieldHelper
            name={"annotations"}
            label={"Annotations"}
            value={(annotations || []).toString()}
            onValidValue={value => dispatch(setMetadataProperty({index, key: 'annotations', value}))}
            buildField={(value, onFieldChange) => <AnnotationsEditor
                annotations={value || []}
                onChange={({value}) => onFieldChange(value)} />
            }
        />
        {renderKindSpecificPane(object, index)}
    </Form>
}
