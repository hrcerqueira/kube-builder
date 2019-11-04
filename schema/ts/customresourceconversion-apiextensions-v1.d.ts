/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * CustomResourceConversion describes how to convert different versions of a CR.
 */
export interface CustomresourceconversionApiextensionsV1 {
  /**
   * strategy specifies how custom resources are converted between versions. Allowed values are: - `None`: The converter only change the apiVersion and would not touch any other field in the custom resource. - `Webhook`: API Server will call to an external webhook to do the conversion. Additional information
   *   is needed for this option. This requires spec.preserveUnknownFields to be false, and spec.conversion.webhook to be set.
   */
  strategy: string | null;
  /**
   * WebhookConversion describes how to call a conversion webhook
   */
  webhook?: {
    [k: string]: any;
  } | null;
}