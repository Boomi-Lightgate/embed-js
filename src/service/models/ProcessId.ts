/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ProcessId = {
    /**
     * The name of the process.
     */
    name?: string;
    /**
     * A unique ID assigned by the system when the process is created.
     */
    originalProcessId?: string;
    /**
     * A unique ID assigned to each process associated with multi-install integration packs. A `wrapperProcessId` is generated when an IntegrationPackInstance is installed or created.
     *
     * >**Note:** The `wrapperProcessId` will not be returned for the single-install integration pack while making API calls, as it is only generated for the multi-install integration packs.
     */
    wrapperProcessId?: string;
};

