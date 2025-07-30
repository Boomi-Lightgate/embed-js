/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ThroughputAccountExpression } from './ThroughputAccountExpression';
export type ThroughputAccountGroupingExpression = {
    nestedExpression?: Array<ThroughputAccountExpression>;
    operator: ThroughputAccountGroupingExpression.operator;
};
export namespace ThroughputAccountGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

