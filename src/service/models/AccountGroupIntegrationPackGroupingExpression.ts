/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountGroupIntegrationPackExpression } from './AccountGroupIntegrationPackExpression';
export type AccountGroupIntegrationPackGroupingExpression = {
    nestedExpression?: Array<AccountGroupIntegrationPackExpression>;
    operator: AccountGroupIntegrationPackGroupingExpression.operator;
};
export namespace AccountGroupIntegrationPackGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

