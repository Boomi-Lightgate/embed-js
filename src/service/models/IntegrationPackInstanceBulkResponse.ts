/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IntegrationPackInstance } from './IntegrationPackInstance';
export type IntegrationPackInstanceBulkResponse = {
    response?: Array<{
        Result: IntegrationPackInstance;
        index?: number;
        id?: string;
        statusCode?: number;
        errorMessage?: string;
    }>;
};

