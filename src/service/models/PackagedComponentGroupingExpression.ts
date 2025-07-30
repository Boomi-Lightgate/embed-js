/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PackagedComponentExpression } from './PackagedComponentExpression';
export type PackagedComponentGroupingExpression = {
    nestedExpression?: Array<PackagedComponentExpression>;
    operator: PackagedComponentGroupingExpression.operator;
};
export namespace PackagedComponentGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

