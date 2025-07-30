/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Role } from './Role';
export type RoleBulkResponse = {
    response?: Array<{
        Result: Role;
        index?: number;
        id?: string;
        statusCode?: number;
        errorMessage?: string;
    }>;
};

