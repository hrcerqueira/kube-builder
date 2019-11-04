/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * PodDisruptionBudget is an object to define the max disruption that can be caused to a collection of pods
 */
export interface PoddisruptionbudgetPolicyV1Beta1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion?: "policy/v1beta1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind?: "PodDisruptionBudget";
  /**
   * ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
   */
  metadata?: {
    [k: string]: any;
  } | null;
  /**
   * PodDisruptionBudgetSpec is a description of a PodDisruptionBudget.
   */
  spec?: {
    [k: string]: any;
  } | null;
  /**
   * PodDisruptionBudgetStatus represents information about the status of a PodDisruptionBudget. Status may trail the actual state of a system.
   */
  status?: {
    [k: string]: any;
  } | null;
}