/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Local represents directly-attached storage with node affinity (Beta feature)
 */
export interface Localvolumesource {
  /**
   * Filesystem type to mount. It applies only when the Path is a block device. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". The default value is to auto-select a fileystem if unspecified.
   */
  fsType?: string | null;
  /**
   * The full path to the volume on the node. It can be either a directory or block device (disk, partition, ...).
   */
  path: string | null;
}