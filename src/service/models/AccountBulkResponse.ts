/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Account } from './Account';
export type AccountBulkResponse = {
    response?: Array<{
        Result: Account;
        index?: number;
        id?: string;
        statusCode?: number;
        errorMessage?: string;
    }>;
};

