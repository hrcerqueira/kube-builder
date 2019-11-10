export type K8sObject = {
    apiVersion: string | null;
    kind: string;
    metadata: K8sMetadata
}

export type K8SMapEntry = {key: string, value: string};

export const EMPTY_K8S_MAP_ENTRY = {key: '', value: ''};

export type K8SMap = K8SMapEntry[];

export type K8sMetadata = {
    name: string;
    namespace?: string;
    annotations?: K8SMap
}

export type K8sObjectImpl = K8sObject & any;

export interface KindDescriptor<K extends K8sObjectImpl> {
    create(base: K8sObject): K;
    supportedVersions: string[]
}

export enum KindName {
    Deployment = "Deployment"
}

export enum K8sApiVersions {
    APPS_V1 = "apps/v1",
    APPS_V1_BETA1 = "apps/v1beta1",
    APPS_V1_BETA2 = "apps/v1beta2"
}
