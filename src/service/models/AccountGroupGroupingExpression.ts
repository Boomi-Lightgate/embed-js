/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountGroupExpression } from './AccountGroupExpression';
export type AccountGroupGroupingExpression = {
    nestedExpression?: Array<AccountGroupExpression>;
    operator: AccountGroupGroupingExpression.operator;
};
export namespace AccountGroupGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

