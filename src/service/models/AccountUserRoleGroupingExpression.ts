/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountUserRoleExpression } from './AccountUserRoleExpression';
export type AccountUserRoleGroupingExpression = {
    nestedExpression?: Array<AccountUserRoleExpression>;
    operator: AccountUserRoleGroupingExpression.operator;
};
export namespace AccountUserRoleGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

