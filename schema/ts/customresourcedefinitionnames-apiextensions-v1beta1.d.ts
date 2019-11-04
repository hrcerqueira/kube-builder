/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * CustomResourceDefinitionNames indicates the names to serve this CustomResourceDefinition
 */
export interface CustomresourcedefinitionnamesApiextensionsV1Beta1 {
  /**
   * categories is a list of grouped resources this custom resource belongs to (e.g. 'all'). This is published in API discovery documents, and used by clients to support invocations like `kubectl get all`.
   */
  categories?: (string | null)[];
  /**
   * kind is the serialized kind of the resource. It is normally CamelCase and singular. Custom resource instances will use this value as the `kind` attribute in API calls.
   */
  kind: string | null;
  /**
   * listKind is the serialized kind of the list for this resource. Defaults to "`kind`List".
   */
  listKind?: string | null;
  /**
   * plural is the plural name of the resource to serve. The custom resources are served under `/apis/<group>/<version>/.../<plural>`. Must match the name of the CustomResourceDefinition (in the form `<names.plural>.<group>`). Must be all lowercase.
   */
  plural: string | null;
  /**
   * shortNames are short names for the resource, exposed in API discovery documents, and used by clients to support invocations like `kubectl get <shortname>`. It must be all lowercase.
   */
  shortNames?: (string | null)[];
  /**
   * singular is the singular name of the resource. It must be all lowercase. Defaults to lowercased `kind`.
   */
  singular?: string | null;
}
