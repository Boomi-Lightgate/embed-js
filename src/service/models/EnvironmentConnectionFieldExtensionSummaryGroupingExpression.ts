/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EnvironmentConnectionFieldExtensionSummaryExpression } from './EnvironmentConnectionFieldExtensionSummaryExpression';
export type EnvironmentConnectionFieldExtensionSummaryGroupingExpression = {
    nestedExpression?: Array<EnvironmentConnectionFieldExtensionSummaryExpression>;
    operator: EnvironmentConnectionFieldExtensionSummaryGroupingExpression.operator;
};
export namespace EnvironmentConnectionFieldExtensionSummaryGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

