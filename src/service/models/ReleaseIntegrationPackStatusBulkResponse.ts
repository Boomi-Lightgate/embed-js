/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReleaseIntegrationPackStatus } from './ReleaseIntegrationPackStatus';
export type ReleaseIntegrationPackStatusBulkResponse = {
    response?: Array<{
        Result: ReleaseIntegrationPackStatus;
        index?: number;
        id?: string;
        statusCode?: number;
        errorMessage?: string;
    }>;
};

