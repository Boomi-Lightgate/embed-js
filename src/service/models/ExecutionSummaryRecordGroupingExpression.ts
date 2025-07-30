/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExecutionSummaryRecordExpression } from './ExecutionSummaryRecordExpression';
export type ExecutionSummaryRecordGroupingExpression = {
    nestedExpression?: Array<ExecutionSummaryRecordExpression>;
    operator: ExecutionSummaryRecordGroupingExpression.operator;
};
export namespace ExecutionSummaryRecordGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

