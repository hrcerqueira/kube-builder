import { Form, FormField, Select, TextInput } from 'grommet';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { K8sKinds } from '../../k8s/K8sKinds';
import { K8sObject, KindName } from '../../k8s/model/K8sObject';
import { setObjectProperty } from '../../store/descriptor';
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

export const ObjectPane = ({object, index}: PaneProps<K8sObject>) => {
    const dispatch = useDispatch();
    const [{name, kind, apiVersion}, setCopy] = useState({...object});
    const updateCopy = (partial: Partial<K8sObject>) => setCopy({name, kind, apiVersion, ...partial});

    const versions = K8sKinds.instance.supportedVersions(kind);

    return <Form>
        <FormField name={"name"} label={"Name"}>
            <TextInput
                value={name}
                onChange={({target: { value }}: any) => {
                    updateCopy({name: value});
                    dispatch(setObjectProperty({index, key: 'name', value}));
                }}
            />
        </FormField>
        <FormField name={"version"} label={"API Version"}>
            <Select
                options={versions}
                value={apiVersion || ""}
                onChange={({ option }: any) => {
                    updateCopy({apiVersion: option});
                    dispatch(setObjectProperty({index, key: 'apiVersion', value: option}));
                }}
            />
        </FormField>
        {renderKindSpecificPane(object, index)}
    </Form>
}
