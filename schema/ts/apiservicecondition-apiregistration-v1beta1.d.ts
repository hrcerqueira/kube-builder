/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * APIServiceCondition describes the state of an APIService at a particular point
 */
export interface ApiserviceconditionApiregistrationV1Beta1 {
  /**
   * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
   */
  lastTransitionTime?: string | null;
  /**
   * Human-readable message indicating details about last transition.
   */
  message?: string | null;
  /**
   * Unique, one-word, CamelCase reason for the condition's last transition.
   */
  reason?: string | null;
  /**
   * Status is the status of the condition. Can be True, False, Unknown.
   */
  status: string | null;
  /**
   * Type is the type of the condition.
   */
  type: string | null;
}
