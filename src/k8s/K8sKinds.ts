import { DeploymentKindDescriptor } from './model/Deployment';
import { KindNames } from './model/K8sObject';


export type KindsMap = {
    [KindNames.Deployment]: DeploymentKindDescriptor
}

export class K8sKinds {

    private static _instance: K8sKinds;

    kinds: KindsMap;

    private constructor() {
        this.kinds = {
            Deployment: new DeploymentKindDescriptor()
        }
    }

    static get instance() {
        if (!K8sKinds._instance) {
            K8sKinds._instance = new K8sKinds();
        }

        return K8sKinds._instance;
    }

}