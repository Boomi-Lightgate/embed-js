/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Expression } from './Expression';
export type GroupingExpression = (Expression & {
    nestedExpression?: Array<Expression>;
    operator?: GroupingExpression.operator;
} & {
    operator: GroupingExpression.operator;
});
export namespace GroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

