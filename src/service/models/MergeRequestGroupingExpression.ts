/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MergeRequestExpression } from './MergeRequestExpression';
export type MergeRequestGroupingExpression = {
    nestedExpression?: Array<MergeRequestExpression>;
    operator: MergeRequestGroupingExpression.operator;
};
export namespace MergeRequestGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

