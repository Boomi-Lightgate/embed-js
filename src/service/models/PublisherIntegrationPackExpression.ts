/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PublisherIntegrationPackGroupingExpression } from './PublisherIntegrationPackGroupingExpression';
import type { PublisherIntegrationPackSimpleExpression } from './PublisherIntegrationPackSimpleExpression';
export type PublisherIntegrationPackExpression = (PublisherIntegrationPackSimpleExpression | PublisherIntegrationPackGroupingExpression | {
    id?: string;
    name?: string;
    status?: string;
    metadata?: {
        createdAt?: string;
        updatedAt?: string;
    };
});

