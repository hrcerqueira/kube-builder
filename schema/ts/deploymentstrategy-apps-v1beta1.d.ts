/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * DeploymentStrategy describes how to replace existing pods with new ones.
 */
export interface DeploymentstrategyAppsV1Beta1 {
  /**
   * Spec to control the desired behavior of rolling update.
   */
  rollingUpdate?: {
    [k: string]: any;
  } | null;
  /**
   * Type of deployment. Can be "Recreate" or "RollingUpdate". Default is RollingUpdate.
   */
  type?: string | null;
}
