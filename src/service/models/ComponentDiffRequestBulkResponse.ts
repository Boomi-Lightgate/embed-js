/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ComponentDiffRequest } from './ComponentDiffRequest';
export type ComponentDiffRequestBulkResponse = {
    response?: Array<{
        Result: ComponentDiffRequest;
        index?: number;
        id?: string;
        statusCode?: number;
        errorMessage?: string;
    }>;
};

