/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProcessScheduleStatus } from './ProcessScheduleStatus';
export type ProcessScheduleStatusBulkResponse = {
    response?: Array<{
        Result: ProcessScheduleStatus;
        index?: number;
        id?: string;
        statusCode?: number;
        errorMessage?: string;
    }>;
};

