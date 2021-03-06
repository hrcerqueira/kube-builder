/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * TokenReviewStatus is the result of the token authentication request.
 */
export interface TokenreviewstatusAuthenticationV1Beta1 {
  /**
   * Audiences are audience identifiers chosen by the authenticator that are compatible with both the TokenReview and token. An identifier is any identifier in the intersection of the TokenReviewSpec audiences and the token's audiences. A client of the TokenReview API that sets the spec.audiences field should validate that a compatible audience identifier is returned in the status.audiences field to ensure that the TokenReview server is audience aware. If a TokenReview returns an empty status.audience field where status.authenticated is "true", the token is valid against the audience of the Kubernetes API server.
   */
  audiences?: (string | null)[];
  /**
   * Authenticated indicates that the token was associated with a known user.
   */
  authenticated?: boolean | null;
  /**
   * Error indicates that the token couldn't be checked
   */
  error?: string | null;
  /**
   * UserInfo holds the information about the user needed to implement the user.Info interface.
   */
  user?: {
    [k: string]: any;
  } | null;
}
