/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Policy defines the configuration of how audit events are logged
 */
export interface PolicyAuditregistrationV1Alpha1 {
  /**
   * The Level that all requests are recorded at. available options: None, Metadata, Request, RequestResponse required
   */
  level: string | null;
  /**
   * Stages is a list of stages for which events are created.
   */
  stages?: (string | null)[];
}
