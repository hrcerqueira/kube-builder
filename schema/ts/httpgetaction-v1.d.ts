/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * HTTPGetAction describes an action based on HTTP Get requests.
 */
export interface HttpgetactionV1 {
  /**
   * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
   */
  host?: string | null;
  /**
   * Custom headers to set in the request. HTTP allows repeated headers.
   */
  httpHeaders?: ({
    [k: string]: any;
  } | null)[];
  /**
   * Path to access on the HTTP server.
   */
  path?: string | null;
  port: (string | null) | (number | null);
  /**
   * Scheme to use for connecting to the host. Defaults to HTTP.
   */
  scheme?: string | null;
}