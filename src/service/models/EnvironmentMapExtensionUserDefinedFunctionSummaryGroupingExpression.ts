/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EnvironmentMapExtensionUserDefinedFunctionSummaryExpression } from './EnvironmentMapExtensionUserDefinedFunctionSummaryExpression';
export type EnvironmentMapExtensionUserDefinedFunctionSummaryGroupingExpression = {
    nestedExpression?: Array<EnvironmentMapExtensionUserDefinedFunctionSummaryExpression>;
    operator: EnvironmentMapExtensionUserDefinedFunctionSummaryGroupingExpression.operator;
};
export namespace EnvironmentMapExtensionUserDefinedFunctionSummaryGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

