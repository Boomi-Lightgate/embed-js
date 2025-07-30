/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Deployment } from './Deployment';
export type DeploymentBulkResponse = {
    response?: Array<{
        Result: Deployment;
        index?: number;
        id?: string;
        statusCode?: number;
        errorMessage?: string;
    }>;
};

