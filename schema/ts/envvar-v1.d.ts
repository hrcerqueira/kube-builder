/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * EnvVar represents an environment variable present in a Container.
 */
export interface EnvvarV1 {
  /**
   * Name of the environment variable. Must be a C_IDENTIFIER.
   */
  name: string | null;
  /**
   * Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "".
   */
  value?: string | null;
  /**
   * EnvVarSource represents a source for the value of an EnvVar.
   */
  valueFrom?: {
    [k: string]: any;
  } | null;
}
