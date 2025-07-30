/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SharedWebServer } from './SharedWebServer';
export type SharedWebServerBulkResponse = {
    response?: Array<{
        Result: SharedWebServer;
        index?: number;
        id?: string;
        statusCode?: number;
        errorMessage?: string;
    }>;
};

