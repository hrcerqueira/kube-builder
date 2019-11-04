import { Form, FormField } from 'grommet';
import React, { Component } from 'react';
import { K8sObjectImpl } from '../kinds/K8sObject';
import { PaneProps } from './PaneProps';

export abstract class ObjectPane<T extends K8sObjectImpl, S> extends Component<PaneProps<T>, S> {

    render() {
        return <Form>
            <FormField name={"name"} label={"Name"} />
        </Form>
    }
}