/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountGroupAccountExpression } from './AccountGroupAccountExpression';
export type AccountGroupAccountGroupingExpression = {
    nestedExpression?: Array<AccountGroupAccountExpression>;
    operator: AccountGroupAccountGroupingExpression.operator;
};
export namespace AccountGroupAccountGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

