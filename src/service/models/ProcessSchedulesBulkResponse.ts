/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProcessSchedules } from './ProcessSchedules';
export type ProcessSchedulesBulkResponse = {
    response?: Array<{
        Result: ProcessSchedules;
        index?: number;
        id?: string;
        statusCode?: number;
        errorMessage?: string;
    }>;
};

