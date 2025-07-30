/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type EnvironmentMapExtensionExternalComponent = {
    /**
     * The ID of the component. The component ID is available by querying the Component Metadata object.
     */
    componentId?: string;
    /**
     * The user-defined name given to the component.
     */
    componentName?: string;
    /**
     * The type of component. >**Note:** Currently, this object retrieves Cross Reference Table type-components ('crossref') only.
     */
    componentType?: string;
    componentVersion?: number;
    /**
     * The ID of the environment map extension. To find the environmentMapExtensionId, you can first query the [Environment Map Extension object](/api/platformapi#tag/EnvironmentMapExtension) to retrieve a list of all available environment extensions for an account and copy the resultant environment map extension ID.
     */
    environmentMapExtensionId?: string;
};

