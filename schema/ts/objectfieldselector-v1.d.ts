/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * ObjectFieldSelector selects an APIVersioned field of an object.
 */
export interface ObjectfieldselectorV1 {
  /**
   * Version of the schema the FieldPath is written in terms of, defaults to "v1".
   */
  apiVersion?: string | null;
  /**
   * Path of the field to select in the specified API version.
   */
  fieldPath: string | null;
}
