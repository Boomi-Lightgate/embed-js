/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Branch } from './Branch';
export type BranchBulkResponse = {
    response?: Array<{
        Result: Branch;
        index?: number;
        id?: string;
        statusCode?: number;
        errorMessage?: string;
    }>;
};

