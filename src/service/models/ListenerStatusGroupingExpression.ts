/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListenerStatusExpression } from './ListenerStatusExpression';
export type ListenerStatusGroupingExpression = {
    nestedExpression?: Array<ListenerStatusExpression>;
    operator: ListenerStatusGroupingExpression.operator;
};
export namespace ListenerStatusGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

