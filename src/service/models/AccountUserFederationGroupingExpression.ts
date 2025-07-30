/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountUserFederationExpression } from './AccountUserFederationExpression';
export type AccountUserFederationGroupingExpression = {
    nestedExpression?: Array<AccountUserFederationExpression>;
    operator: AccountUserFederationGroupingExpression.operator;
};
export namespace AccountUserFederationGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

