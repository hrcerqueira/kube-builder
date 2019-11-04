/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * IngressBackend describes all endpoints for a given service and port.
 */
export interface IngressbackendExtensionsV1Beta1 {
  /**
   * Specifies the name of the referenced service.
   */
  serviceName: string | null;
  servicePort: (string | null) | (number | null);
}