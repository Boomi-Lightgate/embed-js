/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IntegrationPack } from './IntegrationPack';
export type IntegrationPackBulkResponse = {
    response?: Array<{
        Result: IntegrationPack;
        index?: number;
        id?: string;
        statusCode?: number;
        errorMessage?: string;
    }>;
};

