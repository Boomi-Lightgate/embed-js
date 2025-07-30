/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ThroughputAccountGroupExpression } from './ThroughputAccountGroupExpression';
export type ThroughputAccountGroupGroupingExpression = {
    nestedExpression?: Array<ThroughputAccountGroupExpression>;
    operator: ThroughputAccountGroupGroupingExpression.operator;
};
export namespace ThroughputAccountGroupGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

