/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * VolumeNodeAffinity defines constraints that limit what nodes this volume can be accessed from.
 */
export interface VolumenodeaffinityV1 {
  /**
   * A node selector represents the union of the results of one or more label queries over a set of nodes; that is, it represents the OR of the selectors represented by the node selector terms.
   */
  required?: {
    [k: string]: any;
  } | null;
}