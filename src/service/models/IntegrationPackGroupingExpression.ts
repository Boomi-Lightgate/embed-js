/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IntegrationPackExpression } from './IntegrationPackExpression';
export type IntegrationPackGroupingExpression = {
    nestedExpression?: Array<IntegrationPackExpression>;
    operator: IntegrationPackGroupingExpression.operator;
};
export namespace IntegrationPackGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

