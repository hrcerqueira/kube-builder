/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * DownwardAPIVolumeFile represents information to create the file containing the pod field
 */
export interface DownwardapivolumefileV1 {
  /**
   * ObjectFieldSelector selects an APIVersioned field of an object.
   */
  fieldRef?: {
    [k: string]: any;
  } | null;
  /**
   * Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
   */
  mode?: number | null;
  /**
   * Required: Path is  the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'
   */
  path: string | null;
  /**
   * ResourceFieldSelector represents container resources (cpu, memory) and their output format
   */
  resourceFieldRef?: {
    [k: string]: any;
  } | null;
}
