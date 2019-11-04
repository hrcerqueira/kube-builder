/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * ReplicationControllerCondition describes the state of a replication controller at a certain point.
 */
export interface ReplicationcontrollerconditionV1 {
  /**
   * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
   */
  lastTransitionTime?: string | null;
  /**
   * A human readable message indicating details about the transition.
   */
  message?: string | null;
  /**
   * The reason for the condition's last transition.
   */
  reason?: string | null;
  /**
   * Status of the condition, one of True, False, Unknown.
   */
  status: string | null;
  /**
   * Type of replication controller condition.
   */
  type: string | null;
}
