import { K8sObjectImpl } from '../kinds/K8sObject';

export type PaneProps<T extends K8sObjectImpl> = {
    object: T,
    index: number
}
