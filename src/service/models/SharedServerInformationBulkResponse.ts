/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SharedServerInformation } from './SharedServerInformation';
export type SharedServerInformationBulkResponse = {
    response?: Array<{
        Result: SharedServerInformation;
        index?: number;
        id?: string;
        statusCode?: number;
        errorMessage?: string;
    }>;
};

