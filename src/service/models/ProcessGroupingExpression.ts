/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProcessExpression } from './ProcessExpression';
export type ProcessGroupingExpression = {
    nestedExpression?: Array<ProcessExpression>;
    operator: ProcessGroupingExpression.operator;
};
export namespace ProcessGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

