/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuditLog } from './AuditLog';
export type AuditLogBulkResponse = {
    response?: Array<{
        Result: AuditLog;
        index?: number;
        id?: string;
        statusCode?: number;
        errorMessage?: string;
    }>;
};

