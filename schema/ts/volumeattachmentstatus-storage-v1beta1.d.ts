/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * VolumeAttachmentStatus is the status of a VolumeAttachment request.
 */
export interface VolumeattachmentstatusStorageV1Beta1 {
  /**
   * VolumeError captures an error encountered during a volume operation.
   */
  attachError?: {
    [k: string]: any;
  } | null;
  /**
   * Indicates the volume is successfully attached. This field must only be set by the entity completing the attach operation, i.e. the external-attacher.
   */
  attached: boolean | null;
  /**
   * Upon successful attach, this field is populated with any information returned by the attach operation that must be passed into subsequent WaitForAttach or Mount calls. This field must only be set by the entity completing the attach operation, i.e. the external-attacher.
   */
  attachmentMetadata?: {
    [k: string]: any;
  } | null;
  /**
   * VolumeError captures an error encountered during a volume operation.
   */
  detachError?: {
    [k: string]: any;
  } | null;
}
