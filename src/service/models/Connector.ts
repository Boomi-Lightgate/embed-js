/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Connector = {
    /**
     * The user-facing connector label of the connector type, which mimics the connector type names presented on the **Build** tab of the user interface.
     */
    name?: string;
    /**
     * The internal and unique identifier for connector type, such as `http`, `ftp`, `greatplains`. The [Component Metadata object](/api/platformapi#tag/ComponentMetadata) refers to this field as *subType*.
     */
    type?: string;
};

