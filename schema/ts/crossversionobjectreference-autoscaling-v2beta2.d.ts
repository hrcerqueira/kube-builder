/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * CrossVersionObjectReference contains enough information to let you identify the referred resource.
 */
export interface CrossversionobjectreferenceAutoscalingV2Beta2 {
  /**
   * API version of the referent
   */
  apiVersion?: string | null;
  /**
   * Kind of the referent; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds"
   */
  kind: string | null;
  /**
   * Name of the referent; More info: http://kubernetes.io/docs/user-guide/identifiers#names
   */
  name: string | null;
}
