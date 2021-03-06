/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Webhook holds the configuration of the webhook
 */
export interface WebhookAuditregistrationV1Alpha1 {
  /**
   * WebhookClientConfig contains the information to make a connection with the webhook
   */
  clientConfig: {
    [k: string]: any;
  } | null;
  /**
   * WebhookThrottleConfig holds the configuration for throttling events
   */
  throttle?: {
    [k: string]: any;
  } | null;
}
