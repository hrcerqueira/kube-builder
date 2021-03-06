/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * APIGroup contains the name, the supported versions, and the preferred version of a group.
 */
export interface Apigroup {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion?: string | null;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind?: "APIGroup";
  /**
   * name is the name of the group.
   */
  name: string | null;
  /**
   * GroupVersion contains the "group/version" and "version" string of a version. It is made a struct to keep extensibility.
   */
  preferredVersion?: {
    [k: string]: any;
  } | null;
  /**
   * a map of client CIDR to server address that is serving this group. This is to help clients reach servers in the most network-efficient way possible. Clients can use the appropriate server address as per the CIDR that they match. In case of multiple matches, clients should use the longest matching CIDR. The server returns only those CIDRs that it thinks that the client can match. For example: the master will return an internal IP CIDR only, if the client reaches the server using an internal IP. Server looks at X-Forwarded-For header or X-Real-Ip header or request.RemoteAddr (in that order) to get the client IP.
   */
  serverAddressByClientCIDRs?: ({
    [k: string]: any;
  } | null)[];
  /**
   * versions are the versions supported in this group.
   */
  versions: ({
    [k: string]: any;
  } | null)[];
}
