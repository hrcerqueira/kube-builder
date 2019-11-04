/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * specification of a horizontal pod autoscaler.
 */
export interface HorizontalpodautoscalerspecAutoscalingV1 {
  /**
   * upper limit for the number of pods that can be set by the autoscaler; cannot be smaller than MinReplicas.
   */
  maxReplicas: number | null;
  /**
   * minReplicas is the lower limit for the number of replicas to which the autoscaler can scale down.  It defaults to 1 pod.  minReplicas is allowed to be 0 if the alpha feature gate HPAScaleToZero is enabled and at least one Object or External metric is configured.  Scaling is active as long as at least one metric value is available.
   */
  minReplicas?: number | null;
  /**
   * CrossVersionObjectReference contains enough information to let you identify the referred resource.
   */
  scaleTargetRef: {
    [k: string]: any;
  } | null;
  /**
   * target average CPU utilization (represented as a percentage of requested CPU) over all the pods; if not specified the default autoscaling policy will be used.
   */
  targetCPUUtilizationPercentage?: number | null;
}
