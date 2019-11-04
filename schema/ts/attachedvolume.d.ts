/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * AttachedVolume describes a volume attached to a node
 */
export interface Attachedvolume {
  /**
   * DevicePath represents the device path where the volume should be available
   */
  devicePath: string | null;
  /**
   * Name of the attached volume
   */
  name: string | null;
}
