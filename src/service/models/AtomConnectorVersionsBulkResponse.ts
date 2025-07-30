/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AtomConnectorVersions } from './AtomConnectorVersions';
export type AtomConnectorVersionsBulkResponse = {
    response?: Array<{
        Result: AtomConnectorVersions;
        index?: number;
        id?: string;
        statusCode?: number;
        errorMessage?: string;
    }>;
};

