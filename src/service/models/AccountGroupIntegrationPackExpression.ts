/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountGroupIntegrationPackGroupingExpression } from './AccountGroupIntegrationPackGroupingExpression';
import type { AccountGroupIntegrationPackSimpleExpression } from './AccountGroupIntegrationPackSimpleExpression';
export type AccountGroupIntegrationPackExpression = (AccountGroupIntegrationPackSimpleExpression | AccountGroupIntegrationPackGroupingExpression | {
    /**
     * A unique ID assigned by the system to the integration pack. This field populates only if you add the integration pack to an account group.
     */
    id?: string;
    /**
     * The name of the integration pack.
     */
    name?: string;
    status?: string;
    metadata?: {
        createdAt?: string;
        updatedAt?: string;
    };
});

