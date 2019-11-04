/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * ResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.
 */
export interface ResourcemetricstatusAutoscalingV2Beta2 {
  /**
   * MetricValueStatus holds the current value for a metric
   */
  current: {
    [k: string]: any;
  } | null;
  /**
   * Name is the name of the resource in question.
   */
  name: string | null;
}
