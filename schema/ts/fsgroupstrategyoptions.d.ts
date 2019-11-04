/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * FSGroupStrategyOptions defines the strategy type and options used to create the strategy.
 */
export interface Fsgroupstrategyoptions {
  /**
   * ranges are the allowed ranges of fs groups.  If you would like to force a single fs group then supply a single range with the same start and end. Required for MustRunAs.
   */
  ranges?: ({
    [k: string]: any;
  } | null)[];
  /**
   * rule is the strategy that will dictate what FSGroup is used in the SecurityContext.
   */
  rule?: string | null;
}
