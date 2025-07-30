/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ComponentMetadata } from './ComponentMetadata';
import type { EncryptedValues } from './EncryptedValues';
export type Component = (ComponentMetadata & {
    /**
     * A list of encrypted values.Optional for CREATE and UPDATE.
     */
    encryptedValues?: EncryptedValues;
    /**
     * If specified, the text description that appears at the top of an opened component.Optional for CREATE and UPDATE.
     */
    description?: string;
    /**
     * The XML structure of the component object. The structure of the object contents vary by component type. Required. Object name for specific component type. Determines the type of component to create and update. Recommend exporting existing components to determine values.
     *
     * >**Note:** These values are slightly different from Component/@type values (reference the [Component Metadata object](/api/platformapi#tag/ComponentMetadata) topic for more information).
     */
    object?: Record<string, any>;
    /**
     * For process type components, specifies overridden values (for example, variables overridden by environment extensions).
     */
    processOverrides?: Record<string, any>;
    /**
     * <br/>version <br/>type <br/>createdDate <br/>createdBy <br/>modifiedDate <br/>modifiedBy <br/>Deleted <br/>currentVersion <br/>folderName <br/>folderFullPath.
     *
     * Read-only system-generated values returned in the response. If included in the response, values for these fields are ignored.
     */
    folderFullPath?: string;
} & {
    /**
     * A list of encrypted values.Optional for CREATE and UPDATE.
     */
    encryptedValues: EncryptedValues;
    /**
     * If specified, the text description that appears at the top of an opened component.Optional for CREATE and UPDATE.
     */
    description: string;
    /**
     * The XML structure of the component object. The structure of the object contents vary by component type. Required. Object name for specific component type. Determines the type of component to create and update. Recommend exporting existing components to determine values.
     *
     * >**Note:** These values are slightly different from Component/@type values (reference the [Component Metadata object](/api/platformapi#tag/ComponentMetadata) topic for more information).
     */
    object: Record<string, any>;
    /**
     * For process type components, specifies overridden values (for example, variables overridden by environment extensions).
     */
    processOverrides: Record<string, any>;
});

