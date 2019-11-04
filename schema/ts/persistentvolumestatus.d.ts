/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * PersistentVolumeStatus is the current status of a persistent volume.
 */
export interface Persistentvolumestatus {
  /**
   * A human-readable message indicating details about why the volume is in this state.
   */
  message?: string | null;
  /**
   * Phase indicates if a volume is available, bound to a claim, or released by a claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#phase
   */
  phase?: string | null;
  /**
   * Reason is a brief CamelCase string that describes any failure and is meant for machine parsing and tidy display in the CLI.
   */
  reason?: string | null;
}
