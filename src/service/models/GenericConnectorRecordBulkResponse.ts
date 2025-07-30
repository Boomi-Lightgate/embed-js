/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GenericConnectorRecord } from './GenericConnectorRecord';
export type GenericConnectorRecordBulkResponse = {
    response?: Array<{
        Result: GenericConnectorRecord;
        index?: number;
        id?: string;
        statusCode?: number;
        errorMessage?: string;
    }>;
};

