/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * WebhookThrottleConfig holds the configuration for throttling events
 */
export interface Webhookthrottleconfig {
  /**
   * ThrottleBurst is the maximum number of events sent at the same moment default 15 QPS
   */
  burst?: number | null;
  /**
   * ThrottleQPS maximum number of batches per second default 10 QPS
   */
  qps?: number | null;
}
