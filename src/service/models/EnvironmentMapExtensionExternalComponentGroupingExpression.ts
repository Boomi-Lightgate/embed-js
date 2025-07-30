/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EnvironmentMapExtensionExternalComponentExpression } from './EnvironmentMapExtensionExternalComponentExpression';
export type EnvironmentMapExtensionExternalComponentGroupingExpression = {
    nestedExpression?: Array<EnvironmentMapExtensionExternalComponentExpression>;
    operator: EnvironmentMapExtensionExternalComponentGroupingExpression.operator;
};
export namespace EnvironmentMapExtensionExternalComponentGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

