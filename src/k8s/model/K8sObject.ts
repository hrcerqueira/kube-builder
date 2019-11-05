export type ApiVersion = {
    name: string
}

export type K8sObject = {
    apiVersion?: string | null;
    kind?: string;
    name: string
}

export type K8sObjectImpl = K8sObject & any;

export interface KindDescriptor<K extends K8sObjectImpl> {
    create(apiVersion: ApiVersion, name: string): K;
}

export enum KindNames {
    Deployment = "Deployment"
}