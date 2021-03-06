/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * VolumeAttachmentSource represents a volume that should be attached. Right now only PersistenVolumes can be attached via external attacher, in future we may allow also inline volumes in pods. Exactly one member can be set.
 */
export interface VolumeattachmentsourceStorageV1Alpha1 {
  /**
   * PersistentVolumeSpec is the specification of a persistent volume.
   */
  inlineVolumeSpec?: {
    [k: string]: any;
  } | null;
  /**
   * Name of the persistent volume to attach.
   */
  persistentVolumeName?: string | null;
}
