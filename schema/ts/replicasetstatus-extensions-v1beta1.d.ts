/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * ReplicaSetStatus represents the current status of a ReplicaSet.
 */
export interface ReplicasetstatusExtensionsV1Beta1 {
  /**
   * The number of available replicas (ready for at least minReadySeconds) for this replica set.
   */
  availableReplicas?: number | null;
  /**
   * Represents the latest available observations of a replica set's current state.
   */
  conditions?: ({
    [k: string]: any;
  } | null)[];
  /**
   * The number of pods that have labels matching the labels of the pod template of the replicaset.
   */
  fullyLabeledReplicas?: number | null;
  /**
   * ObservedGeneration reflects the generation of the most recently observed ReplicaSet.
   */
  observedGeneration?: number | null;
  /**
   * The number of ready replicas for this replica set.
   */
  readyReplicas?: number | null;
  /**
   * Replicas is the most recently oberved number of replicas. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller/#what-is-a-replicationcontroller
   */
  replicas: number | null;
}
