/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * SecretReference represents a Secret Reference. It has enough information to retrieve secret in any namespace
 */
export interface SecretreferenceV1 {
  /**
   * Name is unique within a namespace to reference a secret resource.
   */
  name?: string | null;
  /**
   * Namespace defines the space within which the secret name must be unique.
   */
  namespace?: string | null;
}
