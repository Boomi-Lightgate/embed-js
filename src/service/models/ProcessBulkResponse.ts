/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Process } from './Process';
export type ProcessBulkResponse = {
    response?: Array<{
        Result: Process;
        index?: number;
        id?: string;
        statusCode?: number;
        errorMessage?: string;
    }>;
};

