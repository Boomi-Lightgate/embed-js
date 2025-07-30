/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EnvironmentExtensionsExpression } from './EnvironmentExtensionsExpression';
export type EnvironmentExtensionsGroupingExpression = {
    nestedExpression?: Array<EnvironmentExtensionsExpression>;
    operator: EnvironmentExtensionsGroupingExpression.operator;
};
export namespace EnvironmentExtensionsGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

