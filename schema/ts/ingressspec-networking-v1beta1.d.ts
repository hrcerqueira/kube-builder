/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * IngressSpec describes the Ingress the user wishes to exist.
 */
export interface IngressspecNetworkingV1Beta1 {
  /**
   * IngressBackend describes all endpoints for a given service and port.
   */
  backend?: {
    [k: string]: any;
  } | null;
  /**
   * A list of host rules used to configure the Ingress. If unspecified, or no rule matches, all traffic is sent to the default backend.
   */
  rules?: ({
    [k: string]: any;
  } | null)[];
  /**
   * TLS configuration. Currently the Ingress only supports a single TLS port, 443. If multiple members of this list specify different hosts, they will be multiplexed on the same port according to the hostname specified through the SNI TLS extension, if the ingress controller fulfilling the ingress supports SNI.
   */
  tls?: ({
    [k: string]: any;
  } | null)[];
}