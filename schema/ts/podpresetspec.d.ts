/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * PodPresetSpec is a description of a pod preset.
 */
export interface Podpresetspec {
  /**
   * Env defines the collection of EnvVar to inject into containers.
   */
  env?: ({
    [k: string]: any;
  } | null)[];
  /**
   * EnvFrom defines the collection of EnvFromSource to inject into containers.
   */
  envFrom?: ({
    [k: string]: any;
  } | null)[];
  /**
   * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
   */
  selector?: {
    [k: string]: any;
  } | null;
  /**
   * VolumeMounts defines the collection of VolumeMount to inject into containers.
   */
  volumeMounts?: ({
    [k: string]: any;
  } | null)[];
  /**
   * Volumes defines the collection of Volume to inject into the pod.
   */
  volumes?: ({
    [k: string]: any;
  } | null)[];
}
