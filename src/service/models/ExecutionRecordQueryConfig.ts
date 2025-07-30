/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExecutionRecordExpression } from './ExecutionRecordExpression';
export type ExecutionRecordQueryConfig = {
    QueryFilter: {
        expression: ExecutionRecordExpression;
    };
    QuerySort?: {
        sortField: Array<{
            fieldName?: string;
            sortOrder?: string;
        }>;
    };
};

