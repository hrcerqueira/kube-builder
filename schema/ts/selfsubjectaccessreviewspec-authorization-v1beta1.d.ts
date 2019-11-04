/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * SelfSubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
 */
export interface SelfsubjectaccessreviewspecAuthorizationV1Beta1 {
  /**
   * NonResourceAttributes includes the authorization attributes available for non-resource requests to the Authorizer interface
   */
  nonResourceAttributes?: {
    [k: string]: any;
  } | null;
  /**
   * ResourceAttributes includes the authorization attributes available for resource requests to the Authorizer interface
   */
  resourceAttributes?: {
    [k: string]: any;
  } | null;
}
