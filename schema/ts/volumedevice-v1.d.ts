/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * volumeDevice describes a mapping of a raw block device within a container.
 */
export interface VolumedeviceV1 {
  /**
   * devicePath is the path inside of the container that the device will be mapped to.
   */
  devicePath: string | null;
  /**
   * name must match the name of a persistentVolumeClaim in the pod
   */
  name: string | null;
}
