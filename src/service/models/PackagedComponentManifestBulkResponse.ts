/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PackagedComponentManifest } from './PackagedComponentManifest';
export type PackagedComponentManifestBulkResponse = {
    response?: Array<{
        Result: PackagedComponentManifest;
        index?: number;
        id?: string;
        statusCode?: number;
        errorMessage?: string;
    }>;
};

