/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountGroup } from './AccountGroup';
export type AccountGroupBulkResponse = {
    response?: Array<{
        Result: AccountGroup;
        index?: number;
        id?: string;
        statusCode?: number;
        errorMessage?: string;
    }>;
};

