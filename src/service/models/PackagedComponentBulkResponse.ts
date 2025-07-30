/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PackagedComponent } from './PackagedComponent';
export type PackagedComponentBulkResponse = {
    response?: Array<{
        Result: PackagedComponent;
        index?: number;
        id?: string;
        statusCode?: number;
        errorMessage?: string;
    }>;
};

