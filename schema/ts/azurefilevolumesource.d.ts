/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * AzureFile represents an Azure File Service mount on the host and bind mount to the pod.
 */
export interface Azurefilevolumesource {
  /**
   * Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
   */
  readOnly?: boolean | null;
  /**
   * the name of secret that contains Azure Storage Account Name and Key
   */
  secretName: string | null;
  /**
   * Share Name
   */
  shareName: string | null;
}
