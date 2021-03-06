/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * HostAlias holds the mapping between IP and hostnames that will be injected as an entry in the pod's hosts file.
 */
export interface Hostalias {
  /**
   * Hostnames for the above IP address.
   */
  hostnames?: (string | null)[];
  /**
   * IP address of the host file entry.
   */
  ip?: string | null;
}
