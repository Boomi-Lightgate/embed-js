/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeployedPackage } from './DeployedPackage';
export type DeployedPackageBulkResponse = {
    response?: Array<{
        Result: DeployedPackage;
        index?: number;
        id?: string;
        statusCode?: number;
        errorMessage?: string;
    }>;
};

