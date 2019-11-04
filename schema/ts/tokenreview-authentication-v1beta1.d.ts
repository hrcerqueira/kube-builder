/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * TokenReview attempts to authenticate a token to a known user. Note: TokenReview requests may be cached by the webhook token authenticator plugin in the kube-apiserver.
 */
export interface TokenreviewAuthenticationV1Beta1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion?: "authentication.k8s.io/v1beta1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind?: "TokenReview";
  /**
   * ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
   */
  metadata?: {
    [k: string]: any;
  } | null;
  /**
   * TokenReviewSpec is a description of the token authentication request.
   */
  spec: {
    [k: string]: any;
  } | null;
  /**
   * TokenReviewStatus is the result of the token authentication request.
   */
  status?: {
    [k: string]: any;
  } | null;
}
