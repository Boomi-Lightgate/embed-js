/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EnvironmentExpression } from './EnvironmentExpression';
export type EnvironmentGroupingExpression = {
    nestedExpression?: Array<EnvironmentExpression>;
    operator: EnvironmentGroupingExpression.operator;
};
export namespace EnvironmentGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

