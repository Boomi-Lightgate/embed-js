/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExecutionRecordExpression } from './ExecutionRecordExpression';
export type ExecutionRecordGroupingExpression = {
    nestedExpression?: Array<ExecutionRecordExpression>;
    operator: ExecutionRecordGroupingExpression.operator;
};
export namespace ExecutionRecordGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

