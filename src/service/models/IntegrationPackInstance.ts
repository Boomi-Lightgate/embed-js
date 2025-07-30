/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProcessId } from './ProcessId';
export type IntegrationPackInstance = {
    /**
     * A list of process IDs associated with the integration pack instance
     */
    ProcessId?: Array<ProcessId>;
    /**
     * A unique ID assigned by the system to the installed instance of the integration pack. This field populates only if you install the integration pack in the requesting account.
     */
    id?: string;
    /**
     * A unique ID assigned by the system to the integration pack.
     */
    integrationPackId?: string;
    /**
     * The name of the installed instance of the integration pack. You can set this value only in the case of multi-install integration packs; its purpose is to distinguish between instances.
     */
    integrationPackOverrideName?: string;
};

