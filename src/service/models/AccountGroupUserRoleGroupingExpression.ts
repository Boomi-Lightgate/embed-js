/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountGroupUserRoleExpression } from './AccountGroupUserRoleExpression';
export type AccountGroupUserRoleGroupingExpression = {
    nestedExpression?: Array<AccountGroupUserRoleExpression>;
    operator: AccountGroupUserRoleGroupingExpression.operator;
};
export namespace AccountGroupUserRoleGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

