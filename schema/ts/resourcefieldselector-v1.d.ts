/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * ResourceFieldSelector represents container resources (cpu, memory) and their output format
 */
export interface ResourcefieldselectorV1 {
  /**
   * Container name: required for volumes, optional for env vars
   */
  containerName?: string | null;
  divisor?: (string | null) | (number | null);
  /**
   * Required: resource to select
   */
  resource: string | null;
}