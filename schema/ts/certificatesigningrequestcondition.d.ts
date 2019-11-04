/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Certificatesigningrequestcondition {
  /**
   * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
   */
  lastUpdateTime?: string | null;
  /**
   * human readable message with details about the request state
   */
  message?: string | null;
  /**
   * brief reason for the request state
   */
  reason?: string | null;
  /**
   * request approval state, currently Approved or Denied.
   */
  type: string | null;
}
