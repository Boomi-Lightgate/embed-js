/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExecutionConnectorExpression } from './ExecutionConnectorExpression';
export type ExecutionConnectorGroupingExpression = {
    nestedExpression?: Array<ExecutionConnectorExpression>;
    operator: ExecutionConnectorGroupingExpression.operator;
};
export namespace ExecutionConnectorGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

