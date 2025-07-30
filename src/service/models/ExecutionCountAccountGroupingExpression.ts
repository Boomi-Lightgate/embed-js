/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExecutionCountAccountExpression } from './ExecutionCountAccountExpression';
export type ExecutionCountAccountGroupingExpression = {
    nestedExpression?: Array<ExecutionCountAccountExpression>;
    operator: ExecutionCountAccountGroupingExpression.operator;
};
export namespace ExecutionCountAccountGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

