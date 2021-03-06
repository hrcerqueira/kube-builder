import { K8sObjectImpl } from '../../k8s/model/K8sObject';

export type PaneProps<T extends K8sObjectImpl> = {
    object: T,
    index: number
}
