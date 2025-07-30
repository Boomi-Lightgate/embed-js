/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MapExtension } from './MapExtension';
export type EnvironmentMapExtension = {
    Map?: MapExtension;
    /**
     * The ID of the environment.
     */
    environmentId?: string;
    /**
     * The ID of the multi-install integration pack to which the extensible map applies, if applicable.
     */
    extensionGroupId?: string;
    /**
     * The ID of the object. This is a conceptual ID synthesized from the IDs of the Map, Process, Multi-install integration pack \(extensionGroupId\), and, if applicable Environment. After obtaining this value with a QUERY operation on the [Environment Map Extensions Summary object](/api/platformapi#tag/EnvironmentMapExtensionsSummary), you can retrieve or update the extensible map by specifying the ID in a GET or UPDATE operation on this object
     */
    id?: string;
    /**
     * The ID of the extensible map.
     */
    mapId?: string;
    /**
     * The name of the extensible map. This variable includes the source object definition name and the destination object definition name, separated by a hyphen.
     */
    name?: string;
    /**
     * The ID of the process.
     */
    processId?: string;
};

