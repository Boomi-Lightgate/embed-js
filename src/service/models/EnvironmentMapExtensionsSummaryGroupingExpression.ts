/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EnvironmentMapExtensionsSummaryExpression } from './EnvironmentMapExtensionsSummaryExpression';
export type EnvironmentMapExtensionsSummaryGroupingExpression = {
    nestedExpression?: Array<EnvironmentMapExtensionsSummaryExpression>;
    operator: EnvironmentMapExtensionsSummaryGroupingExpression.operator;
};
export namespace EnvironmentMapExtensionsSummaryGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

