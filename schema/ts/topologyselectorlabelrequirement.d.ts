/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A topology selector requirement is a selector that matches given label. This is an alpha feature and may change in the future.
 */
export interface Topologyselectorlabelrequirement {
  /**
   * The label key that the selector applies to.
   */
  key: string | null;
  /**
   * An array of string values. One value must match the label to be selected. Each entry in Values is ORed.
   */
  values: (string | null)[];
}
