import { DeploymentKindDescriptor } from './model/Deployment';
import { K8sObjectImpl, KindDescriptor, KindName } from './model/K8sObject';


export type KindsMap = {
    [key: string]: KindDescriptor<any>
}

export class K8sKinds {

    private static _instance: K8sKinds;

    kinds: KindsMap;

    private constructor() {
        this.kinds = {
            [KindName.Deployment]: new DeploymentKindDescriptor()
        }
    }

    static get instance() {
        if (!K8sKinds._instance) {
            K8sKinds._instance = new K8sKinds();
        }

        return K8sKinds._instance;
    }

    private getDescriptor(kind: string) {
        const descriptor: KindDescriptor<any> = this.kinds[kind];

        if (!descriptor) {
            throw Error("unknown kind " + kind);
        }

        return descriptor;
    }

    create(kind: string, name: string): K8sObjectImpl {
        const descriptor = this.getDescriptor(kind);

        const apiVersion = descriptor.supportedVersions[0];
        return descriptor.create({
           apiVersion,
            metadata: {
               name
            },
            kind
        });
    }

    supportedVersions(kind: string) {
        return this.getDescriptor(kind).supportedVersions;
    }
}