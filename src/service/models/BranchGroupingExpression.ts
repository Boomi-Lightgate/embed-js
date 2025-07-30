/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BranchExpression } from './BranchExpression';
export type BranchGroupingExpression = {
    nestedExpression?: Array<BranchExpression>;
    operator: BranchGroupingExpression.operator;
};
export namespace BranchGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

