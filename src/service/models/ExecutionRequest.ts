/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExecutionRequestDynamicProcessProperties } from './ExecutionRequestDynamicProcessProperties';
import type { ExecutionRequestProcessProperties } from './ExecutionRequestProcessProperties';
export type ExecutionRequest = {
    /**
     * The full list of Dynamic Process properties within the specified Runtime, Runtime cluster, or cloud, where each property is defined by their name and value.
     */
    DynamicProcessProperties: ExecutionRequestDynamicProcessProperties;
    ProcessProperties: ExecutionRequestProcessProperties;
    /**
     * The ID of the Runtime on which to run the process. Locate the Runtime ID by navigating to **Manage** \> **Runtime Management** on the user interface, and viewing the Runtime Information panel for a selected Runtime.
     */
    atomId: string;
    /**
     * The ID of the process to run. You can find ID of a process by locating the process' **Component ID** in the **Revision History** dialog on the user interface.
     */
    processId?: string;
    processName?: string;
    /**
     * \(Response-only field\) The ID of the process run. This field is returned in the initial POST response and is used in the subsequent call to find the corresponding run record.
     */
    recordUrl?: string;
    requestId?: string;
};

