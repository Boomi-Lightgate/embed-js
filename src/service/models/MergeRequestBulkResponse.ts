/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MergeRequest } from './MergeRequest';
export type MergeRequestBulkResponse = {
    response?: Array<{
        Result: MergeRequest;
        index?: number;
        id?: string;
        statusCode?: number;
        errorMessage?: string;
    }>;
};

