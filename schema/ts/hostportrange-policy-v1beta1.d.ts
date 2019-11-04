/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * HostPortRange defines a range of host ports that will be enabled by a policy for pods to use.  It requires both the start and end to be defined.
 */
export interface HostportrangePolicyV1Beta1 {
  /**
   * max is the end of the range, inclusive.
   */
  max: number | null;
  /**
   * min is the start of the range, inclusive.
   */
  min: number | null;
}
