import { K8sApiVersions, K8sObject, KindDescriptor } from './K8sObject';

export type Deployment = K8sObject & {

};

export class DeploymentKindDescriptor implements KindDescriptor<Deployment> {

    create(base: K8sObject): Deployment {
        return {
            ...base
        };
    }

    get supportedVersions(): string[] {
        return [
            K8sApiVersions.APPS_V1,
            K8sApiVersions.APPS_V1_BETA1,
            K8sApiVersions.APPS_V1_BETA2
        ]
    }
}