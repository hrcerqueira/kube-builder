/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * CustomResourceDefinitionStatus indicates the state of the CustomResourceDefinition
 */
export interface CustomresourcedefinitionstatusApiextensionsV1 {
  /**
   * CustomResourceDefinitionNames indicates the names to serve this CustomResourceDefinition
   */
  acceptedNames: {
    [k: string]: any;
  } | null;
  /**
   * conditions indicate state for particular aspects of a CustomResourceDefinition
   */
  conditions?: ({
    [k: string]: any;
  } | null)[];
  /**
   * storedVersions lists all versions of CustomResources that were ever persisted. Tracking these versions allows a migration path for stored versions in etcd. The field is mutable so a migration controller can finish a migration to another version (ensuring no old objects are left in storage), and then remove the rest of the versions from this list. Versions may not be removed from `spec.versions` while they exist in this list.
   */
  storedVersions: (string | null)[];
}