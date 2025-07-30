/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MapExtensionsFunctionMappings } from './MapExtensionsFunctionMappings';
import type { MapExtensionsFunctionSteps } from './MapExtensionsFunctionSteps';
import type { MapExtensionsInputs } from './MapExtensionsInputs';
import type { MapExtensionsOutputs } from './MapExtensionsOutputs';
export type EnvironmentMapExtensionUserDefinedFunction = {
    Inputs: MapExtensionsInputs;
    Mappings: MapExtensionsFunctionMappings;
    Outputs: MapExtensionsOutputs;
    Steps: MapExtensionsFunctionSteps;
    /**
     * The user ID of the user who created the user-defined function.
     */
    createdBy?: string;
    /**
     * Timestamp of the creation of the user-defined function.
     */
    createdDate?: string;
    /**
     * This variable indicates the deleted status of the user defined function component. If the value is true, it indicates the deletion of the referenced user-defined function. A false value indicates that the referenced user-defined function is not deleted and is available for use.
     */
    deleted?: boolean;
    /**
     * Optional. Additional details about the user-defined function component.
     */
    description?: string;
    /**
     * The ID of an environment map extension. **Important:** This and other Environment Map Extension API objects require the client to know the ID of the environment map extension. In the user-defined function interface, click **Copy EME ID** to easily copy this ID for use in your API requests, or query the [Environment Map Extensions Summary object](/api/platformapi#tag/EnvironmentMapExtensionsSummary).
     */
    environmentMapExtensionId?: string;
    /**
     * Required. Represents the unique, system-generated ID of the extended user-defined function.
     */
    id?: string;
    /**
     * The user ID of the user who last updated the user-defined function.
     */
    modifiedBy?: string;
    /**
     * Timestamp of when the user-defined function was last updated.
     */
    modifiedDate?: string;
    /**
     * Required. Represents the name of the user-defined function component.
     */
    name?: string;
};

