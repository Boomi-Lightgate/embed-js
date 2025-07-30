/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountExpression } from './AccountExpression';
export type AccountGroupingExpression = {
    nestedExpression?: Array<AccountExpression>;
    operator: AccountGroupingExpression.operator;
};
export namespace AccountGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

