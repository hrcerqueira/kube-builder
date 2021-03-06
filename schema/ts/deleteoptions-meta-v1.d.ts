/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * DeleteOptions may be provided when deleting an API object.
 */
export interface DeleteoptionsMetaV1 {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion?:
    | "v1"
    | "admission.k8s.io/v1"
    | "admission.k8s.io/v1beta1"
    | "admissionregistration.k8s.io/v1"
    | "admissionregistration.k8s.io/v1beta1"
    | "apiextensions.k8s.io/v1"
    | "apiextensions.k8s.io/v1beta1"
    | "apiregistration.k8s.io/v1"
    | "apiregistration.k8s.io/v1beta1"
    | "apps/v1"
    | "apps/v1beta1"
    | "apps/v1beta2"
    | "auditregistration.k8s.io/v1alpha1"
    | "authentication.k8s.io/v1"
    | "authentication.k8s.io/v1beta1"
    | "authorization.k8s.io/v1"
    | "authorization.k8s.io/v1beta1"
    | "autoscaling/v1"
    | "autoscaling/v2beta1"
    | "autoscaling/v2beta2"
    | "batch/v1"
    | "batch/v1beta1"
    | "batch/v2alpha1"
    | "certificates.k8s.io/v1beta1"
    | "coordination.k8s.io/v1"
    | "coordination.k8s.io/v1beta1"
    | "discovery.k8s.io/v1alpha1"
    | "events.k8s.io/v1beta1"
    | "extensions/v1beta1"
    | "imagepolicy.k8s.io/v1alpha1"
    | "networking.k8s.io/v1"
    | "networking.k8s.io/v1beta1"
    | "node.k8s.io/v1alpha1"
    | "node.k8s.io/v1beta1"
    | "policy/v1beta1"
    | "rbac.authorization.k8s.io/v1"
    | "rbac.authorization.k8s.io/v1alpha1"
    | "rbac.authorization.k8s.io/v1beta1"
    | "scheduling.k8s.io/v1"
    | "scheduling.k8s.io/v1alpha1"
    | "scheduling.k8s.io/v1beta1"
    | "settings.k8s.io/v1alpha1"
    | "storage.k8s.io/v1"
    | "storage.k8s.io/v1alpha1"
    | "storage.k8s.io/v1beta1";
  /**
   * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
   */
  dryRun?: (string | null)[];
  /**
   * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
   */
  gracePeriodSeconds?: number | null;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind?: "DeleteOptions";
  /**
   * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
   */
  orphanDependents?: boolean | null;
  /**
   * Preconditions must be fulfilled before an operation (update, delete, etc.) is carried out.
   */
  preconditions?: {
    [k: string]: any;
  } | null;
  /**
   * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
   */
  propagationPolicy?: string | null;
}
