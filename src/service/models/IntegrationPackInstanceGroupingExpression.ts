/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IntegrationPackInstanceExpression } from './IntegrationPackInstanceExpression';
export type IntegrationPackInstanceGroupingExpression = {
    nestedExpression?: Array<IntegrationPackInstanceExpression>;
    operator: IntegrationPackInstanceGroupingExpression.operator;
};
export namespace IntegrationPackInstanceGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

