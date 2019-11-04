/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * EnvVarSource represents a source for the value of an EnvVar.
 */
export interface Envvarsource {
  /**
   * Selects a key from a ConfigMap.
   */
  configMapKeyRef?: {
    [k: string]: any;
  } | null;
  /**
   * ObjectFieldSelector selects an APIVersioned field of an object.
   */
  fieldRef?: {
    [k: string]: any;
  } | null;
  /**
   * ResourceFieldSelector represents container resources (cpu, memory) and their output format
   */
  resourceFieldRef?: {
    [k: string]: any;
  } | null;
  /**
   * SecretKeySelector selects a key of a Secret.
   */
  secretKeyRef?: {
    [k: string]: any;
  } | null;
}
