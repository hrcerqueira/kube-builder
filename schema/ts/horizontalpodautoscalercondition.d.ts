/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * HorizontalPodAutoscalerCondition describes the state of a HorizontalPodAutoscaler at a certain point.
 */
export interface Horizontalpodautoscalercondition {
  /**
   * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
   */
  lastTransitionTime?: string | null;
  /**
   * message is a human-readable explanation containing details about the transition
   */
  message?: string | null;
  /**
   * reason is the reason for the condition's last transition.
   */
  reason?: string | null;
  /**
   * status is the status of the condition (True, False, Unknown)
   */
  status: string | null;
  /**
   * type describes the current condition
   */
  type: string | null;
}
