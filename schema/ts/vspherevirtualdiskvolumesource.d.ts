/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Represents a vSphere volume resource.
 */
export interface Vspherevirtualdiskvolumesource {
  /**
   * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
   */
  fsType?: string | null;
  /**
   * Storage Policy Based Management (SPBM) profile ID associated with the StoragePolicyName.
   */
  storagePolicyID?: string | null;
  /**
   * Storage Policy Based Management (SPBM) profile name.
   */
  storagePolicyName?: string | null;
  /**
   * Path that identifies vSphere volume vmdk
   */
  volumePath: string | null;
}
