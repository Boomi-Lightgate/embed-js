/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RuntimeReleaseSchedule } from './RuntimeReleaseSchedule';
export type RuntimeReleaseScheduleBulkResponse = {
    response?: Array<{
        Result: RuntimeReleaseSchedule;
        index?: number;
        id?: string;
        statusCode?: number;
        errorMessage?: string;
    }>;
};

