/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * ServiceReference holds a reference to Service.legacy.k8s.io
 */
export interface Servicereference {
  /**
   * Name is the name of the service
   */
  name?: string | null;
  /**
   * Namespace is the namespace of the service
   */
  namespace?: string | null;
  /**
   * If specified, the port on the service that hosting webhook. Default to 443 for backward compatibility. `port` should be a valid port number (1-65535, inclusive).
   */
  port?: number | null;
}
