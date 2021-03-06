/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * ExternalMetricSource indicates how to scale on a metric not associated with any Kubernetes object (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster).
 */
export interface ExternalmetricsourceAutoscalingV2Beta2 {
  /**
   * MetricIdentifier defines the name and optionally selector for a metric
   */
  metric: {
    [k: string]: any;
  } | null;
  /**
   * MetricTarget defines the target value, average value, or average utilization of a specific metric
   */
  target: {
    [k: string]: any;
  } | null;
}
