/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Cloud } from './Cloud';
export type CloudBulkResponse = {
    response?: Array<{
        Result: Cloud;
        index?: number;
        id?: string;
        statusCode?: number;
        errorMessage?: string;
    }>;
};

