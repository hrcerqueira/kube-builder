/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * MetricStatus describes the last-read state of a single metric.
 */
export interface Metricstatus {
  /**
   * ExternalMetricStatus indicates the current value of a global metric not associated with any Kubernetes object.
   */
  external?: {
    [k: string]: any;
  } | null;
  /**
   * ObjectMetricStatus indicates the current value of a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
   */
  object?: {
    [k: string]: any;
  } | null;
  /**
   * PodsMetricStatus indicates the current value of a metric describing each pod in the current scale target (for example, transactions-processed-per-second).
   */
  pods?: {
    [k: string]: any;
  } | null;
  /**
   * ResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.
   */
  resource?: {
    [k: string]: any;
  } | null;
  /**
   * type is the type of metric source.  It will be one of "Object", "Pods" or "Resource", each corresponds to a matching field in the object.
   */
  type: string | null;
}
