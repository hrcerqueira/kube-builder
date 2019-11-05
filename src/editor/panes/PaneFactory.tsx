import React, { Component } from 'react';
import { KindNames } from '../../k8s/model/K8sObject';
import { DeploymentPane } from './DeploymentPane';
import { PaneProps } from './PaneProps';

export class PaneFactory extends Component<PaneProps<any>, {}> {

    render() {
        const { object, index } = this.props;

        switch (object.kind) {
            case KindNames.Deployment:
                return <DeploymentPane object={object} index={index} />
            default:
                return null;
        }
    }
}