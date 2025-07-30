/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProcessIntegrationPackInfo } from './ProcessIntegrationPackInfo';
export type Process = {
    Description: string;
    IntegrationPack?: Array<ProcessIntegrationPackInfo>;
    /**
     * A unique ID assigned by the system to the process. For deployed processes and processes belonging to single-install integration packs, this value is the process component ID.For processes belonging to multi-install integration packs, this is an synthetic ID and does not match an actual process component. You can use this value as the extensionGroupId when querying the Environment Extensions object
     */
    id?: string;
    /**
     * The name of the process.
     */
    name?: string;
};

