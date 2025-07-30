/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiUsageCountExpression } from './ApiUsageCountExpression';
export type ApiUsageCountGroupingExpression = {
    nestedExpression?: Array<ApiUsageCountExpression>;
    operator: ApiUsageCountGroupingExpression.operator;
};
export namespace ApiUsageCountGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

