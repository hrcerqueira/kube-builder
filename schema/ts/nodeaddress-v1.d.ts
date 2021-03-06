/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * NodeAddress contains information for the node's address.
 */
export interface NodeaddressV1 {
  /**
   * The node address.
   */
  address: string | null;
  /**
   * Node address type, one of Hostname, ExternalIP or InternalIP.
   */
  type: string | null;
}
