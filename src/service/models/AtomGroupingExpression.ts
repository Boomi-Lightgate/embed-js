/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AtomExpression } from './AtomExpression';
export type AtomGroupingExpression = {
    nestedExpression?: Array<AtomExpression>;
    operator: AtomGroupingExpression.operator;
};
export namespace AtomGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

