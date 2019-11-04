/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * MetricIdentifier defines the name and optionally selector for a metric
 */
export interface MetricidentifierAutoscalingV2Beta2 {
  /**
   * name is the name of the given metric
   */
  name: string | null;
  /**
   * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
   */
  selector?: {
    [k: string]: any;
  } | null;
}