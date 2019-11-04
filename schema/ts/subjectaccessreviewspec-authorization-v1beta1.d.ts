/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * SubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
 */
export interface SubjectaccessreviewspecAuthorizationV1Beta1 {
  /**
   * Extra corresponds to the user.Info.GetExtra() method from the authenticator.  Since that is input to the authorizer it needs a reflection here.
   */
  extra?: {
    [k: string]: any;
  } | null;
  /**
   * Groups is the groups you're testing for.
   */
  group?: (string | null)[];
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
  /**
   * UID information about the requesting user.
   */
  uid?: string | null;
  /**
   * User is the user you're testing for. If you specify "User" but not "Group", then is it interpreted as "What if User were not a member of any groups
   */
  user?: string | null;
}
