/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PublisherIntegrationPack } from './PublisherIntegrationPack';
export type PublisherIntegrationPackBulkResponse = {
    response?: Array<{
        Result: PublisherIntegrationPack;
        index?: number;
        id?: string;
        statusCode?: number;
        errorMessage?: string;
    }>;
};

