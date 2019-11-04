/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * FlexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin.
 */
export interface FlexvolumesourceV1 {
  /**
   * Driver is the name of the driver to use for this volume.
   */
  driver: string | null;
  /**
   * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". The default filesystem depends on FlexVolume script.
   */
  fsType?: string | null;
  /**
   * Optional: Extra command options if any.
   */
  options?: {
    [k: string]: any;
  } | null;
  /**
   * Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
   */
  readOnly?: boolean | null;
  /**
   * LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.
   */
  secretRef?: {
    [k: string]: any;
  } | null;
}
