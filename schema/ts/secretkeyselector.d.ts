/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * SecretKeySelector selects a key of a Secret.
 */
export interface Secretkeyselector {
  /**
   * The key of the secret to select from.  Must be a valid secret key.
   */
  key: string | null;
  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   */
  name?: string | null;
  /**
   * Specify whether the Secret or its key must be defined
   */
  optional?: boolean | null;
}
