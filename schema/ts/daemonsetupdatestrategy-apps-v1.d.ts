/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * DaemonSetUpdateStrategy is a struct used to control the update strategy for a DaemonSet.
 */
export interface DaemonsetupdatestrategyAppsV1 {
  /**
   * Spec to control the desired behavior of daemon set rolling update.
   */
  rollingUpdate?: {
    [k: string]: any;
  } | null;
  /**
   * Type of daemon set update. Can be "RollingUpdate" or "OnDelete". Default is RollingUpdate.
   */
  type?: string | null;
}