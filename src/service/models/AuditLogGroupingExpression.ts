/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuditLogExpression } from './AuditLogExpression';
export type AuditLogGroupingExpression = {
    nestedExpression?: Array<AuditLogExpression>;
    operator: AuditLogGroupingExpression.operator;
};
export namespace AuditLogGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

