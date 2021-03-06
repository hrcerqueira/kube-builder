/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * BoundObjectReference is a reference to an object that a token is bound to.
 */
export interface Boundobjectreference {
  /**
   * API version of the referent.
   */
  apiVersion?: string | null;
  /**
   * Kind of the referent. Valid kinds are 'Pod' and 'Secret'.
   */
  kind?: string | null;
  /**
   * Name of the referent.
   */
  name?: string | null;
  /**
   * UID of the referent.
   */
  uid?: string | null;
}
