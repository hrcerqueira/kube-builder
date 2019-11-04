/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * PortworxVolumeSource represents a Portworx volume resource.
 */
export interface PortworxvolumesourceV1 {
  /**
   * FSType represents the filesystem type to mount Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs". Implicitly inferred to be "ext4" if unspecified.
   */
  fsType?: string | null;
  /**
   * Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
   */
  readOnly?: boolean | null;
  /**
   * VolumeID uniquely identifies a Portworx volume
   */
  volumeID: string | null;
}