import { Form, FormField, Select, TextInput } from 'grommet';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { K8sKinds } from '../../k8s/K8sKinds';
import { K8sObject, KindName } from '../../k8s/model/K8sObject';
import { setObjectProperty } from '../../store/descriptor';
import { DeploymentPane } from './DeploymentPane';
import { PaneProps } from './PaneProps';

export class ObjectPaneBase extends Component<PaneProps<K8sObject>, K8sObject> {

    constructor(props: PaneProps<K8sObject>, context: any) {
        super(props, context);
        const { object } = this.props;
        this.state = { ...object };
    }

    onNameChanged = ({target: { value }}: any) => {
        this.setState({
            ...this.state,
            name: value
        });
        const { index, setObjectProperty } = this.props;
        setObjectProperty({index, key: 'name', value});
    };

    onVersionChanged = ({ option }: any) => {
        this.setState({
            ...this.state,
            apiVersion: option
        });
        const { index, setObjectProperty } = this.props;
        setObjectProperty({index, key: 'apiVersion', value: option});
    };

    renderKindSpecificPane() {
        const { object } = this.props;

        switch (object.kind) {
            case KindName.Deployment:
                return <DeploymentPane {...this.props} />
            default:
                return null;
        }
    }

    render() {
        const { name, apiVersion } = this.state;
        const { index, object: { kind } } = this.props;

        const nameId = `name-${index}`;
        const versionId = `version-${index}`;

        const versions = K8sKinds.instance.supportedVersions(kind);

        return <Form>
            <FormField name={"name"} label={"Name"} htmlFor={nameId}>
                <TextInput
                    id={nameId}
                    value={name}
                    onChange={this.onNameChanged}
                />
            </FormField>
            <FormField name={"version"} label={"API Version"} htmlFor={versionId}>
                <Select
                    id={versionId}
                    options={versions}
                    value={apiVersion || ""}
                    onChange={this.onVersionChanged}
                />
            </FormField>
            {this.renderKindSpecificPane()}
        </Form>
    }
}

export const objectPaneDispatchToProps = (dispatch: ((payload: any) => any)) => ({
    setObjectProperty: (payload: any) => dispatch(setObjectProperty(payload))
});

export const ObjectPane = connect(null, objectPaneDispatchToProps)(ObjectPaneBase);