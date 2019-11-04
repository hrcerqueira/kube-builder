/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * SELinuxStrategyOptions defines the strategy type and any options used to create the strategy. Deprecated: use SELinuxStrategyOptions from policy API Group instead.
 */
export interface SelinuxstrategyoptionsExtensionsV1Beta1 {
  /**
   * rule is the strategy that will dictate the allowable labels that may be set.
   */
  rule: string | null;
  /**
   * SELinuxOptions are the labels to be applied to the container
   */
  seLinuxOptions?: {
    [k: string]: any;
  } | null;
}
