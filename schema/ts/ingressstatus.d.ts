/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * IngressStatus describe the current state of the Ingress.
 */
export interface Ingressstatus {
  /**
   * LoadBalancerStatus represents the status of a load-balancer.
   */
  loadBalancer?: {
    [k: string]: any;
  } | null;
}
