/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * MetricTarget defines the target value, average value, or average utilization of a specific metric
 */
export interface MetrictargetAutoscalingV2Beta2 {
  /**
   * averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. Currently only valid for Resource metric source type
   */
  averageUtilization?: number | null;
  averageValue?: (string | null) | (number | null);
  /**
   * type represents whether the metric type is Utilization, Value, or AverageValue
   */
  type: string | null;
  value?: (string | null) | (number | null);
}
