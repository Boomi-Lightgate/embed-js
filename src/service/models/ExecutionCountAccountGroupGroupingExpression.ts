/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExecutionCountAccountGroupExpression } from './ExecutionCountAccountGroupExpression';
export type ExecutionCountAccountGroupGroupingExpression = {
    nestedExpression?: Array<ExecutionCountAccountGroupExpression>;
    operator: ExecutionCountAccountGroupGroupingExpression.operator;
};
export namespace ExecutionCountAccountGroupGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

