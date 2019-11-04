/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * NamespaceStatus is information about the current status of a Namespace.
 */
export interface Namespacestatus {
  /**
   * Represents the latest available observations of a namespace's current state.
   */
  conditions?: ({
    [k: string]: any;
  } | null)[];
  /**
   * Phase is the current lifecycle phase of the namespace. More info: https://kubernetes.io/docs/tasks/administer-cluster/namespaces/
   */
  phase?: string | null;
}