/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * ContainerState holds a possible state of container. Only one of its members may be specified. If none of them is specified, the default one is ContainerStateWaiting.
 */
export interface Containerstate {
  /**
   * ContainerStateRunning is a running state of a container.
   */
  running?: {
    [k: string]: any;
  } | null;
  /**
   * ContainerStateTerminated is a terminated state of a container.
   */
  terminated?: {
    [k: string]: any;
  } | null;
  /**
   * ContainerStateWaiting is a waiting state of a container.
   */
  waiting?: {
    [k: string]: any;
  } | null;
}