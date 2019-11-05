import { ApiVersion, K8sObject, KindDescriptor, KindNames } from './K8sObject';

export type Deployment = K8sObject & {

};

export class DeploymentKindDescriptor implements KindDescriptor<Deployment> {

    create(apiVersion: ApiVersion, name: string): Deployment {
        return {
            apiVersion: apiVersion.name,
            kind: KindNames.Deployment,
            name: name
        };
    }
}