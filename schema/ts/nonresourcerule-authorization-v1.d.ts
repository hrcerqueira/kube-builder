/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * NonResourceRule holds information that describes a rule for the non-resource
 */
export interface NonresourceruleAuthorizationV1 {
  /**
   * NonResourceURLs is a set of partial urls that a user should have access to.  *s are allowed, but only as the full, final step in the path.  "*" means all.
   */
  nonResourceURLs?: (string | null)[];
  /**
   * Verb is a list of kubernetes non-resource API verbs, like: get, post, put, delete, patch, head, options.  "*" means all.
   */
  verbs: (string | null)[];
}
