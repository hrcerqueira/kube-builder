/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * ServiceReference holds a reference to Service.legacy.k8s.io
 */
export interface ServicereferenceAuditregistrationV1Alpha1 {
  /**
   * `name` is the name of the service. Required
   */
  name: string | null;
  /**
   * `namespace` is the namespace of the service. Required
   */
  namespace: string | null;
  /**
   * `path` is an optional URL path which will be sent in any request to this service.
   */
  path?: string | null;
  /**
   * If specified, the port on the service that hosting webhook. Default to 443 for backward compatibility. `port` should be a valid port number (1-65535, inclusive).
   */
  port?: number | null;
}
