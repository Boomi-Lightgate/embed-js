/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MapExtensionBrowseData } from './MapExtensionBrowseData';
export type EnvironmentMapExtensionsSummary = {
    DestinationFieldSet: MapExtensionBrowseData;
    /**
     * Fields defining the credentials for connecting to the external service for the purpose of reimporting the source profile to retrieve custom fields. You can use these fields in the EnvironmentMapExtension object's EXECUTE action.
     */
    SourceFieldSet: MapExtensionBrowseData;
    /**
     * The ID of the environment.
     */
    environmentId?: string;
    /**
     * If applicable, the ID of the multi-install integration pack to which the extensible map applies.
     */
    extensionGroupId?: string;
    /**
     * The ID of the object.This is a conceptual ID synthesized from the IDs of the:<br />-   Map<br />-   Process<br />-   Multi-install integration pack \(extensionGroupId\), if applicable<br />-   Environment<br />After obtaining this value with a QUERY operation, you can retrieve or update the extensible map by specifying the ID in a GET or UPDATE operation on an Environment Map Extension object
     */
    id?: string;
    /**
     * The ID of the extensible map.
     */
    mapId?: string;
    /**
     * The name of the extensible map. This name includes the source object definition name and the destination object definition name, separated by a hyphen.
     */
    name?: string;
    /**
     * The ID of the process.
     */
    processId?: string;
};

