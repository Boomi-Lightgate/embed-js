/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CloudExpression } from './CloudExpression';
export type CloudGroupingExpression = {
    nestedExpression?: Array<CloudExpression>;
    operator: CloudGroupingExpression.operator;
};
export namespace CloudGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

