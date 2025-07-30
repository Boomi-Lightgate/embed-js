/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Connector } from './Connector';
export type ConnectorBulkResponse = {
    response?: Array<{
        Result: Connector;
        index?: number;
        id?: string;
        statusCode?: number;
        errorMessage?: string;
    }>;
};

