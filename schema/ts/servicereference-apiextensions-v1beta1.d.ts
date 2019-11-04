/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * ServiceReference holds a reference to Service.legacy.k8s.io
 */
export interface ServicereferenceApiextensionsV1Beta1 {
  /**
   * name is the name of the service. Required
   */
  name: string | null;
  /**
   * namespace is the namespace of the service. Required
   */
  namespace: string | null;
  /**
   * path is an optional URL path at which the webhook will be contacted.
   */
  path?: string | null;
  /**
   * port is an optional service port at which the webhook will be contacted. `port` should be a valid port number (1-65535, inclusive). Defaults to 443 for backward compatibility.
   */
  port?: number | null;
}
