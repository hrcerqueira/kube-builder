/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * PersistentVolumeClaim is a user's request for and claim to a persistent volume
 */
export interface PersistentvolumeclaimV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion?: "v1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind?: "PersistentVolumeClaim";
  /**
   * ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
   */
  metadata?: {
    [k: string]: any;
  } | null;
  /**
   * PersistentVolumeClaimSpec describes the common attributes of storage devices and allows a Source for provider-specific attributes
   */
  spec?: {
    [k: string]: any;
  } | null;
  /**
   * PersistentVolumeClaimStatus is the current status of a persistent volume claim.
   */
  status?: {
    [k: string]: any;
  } | null;
}
