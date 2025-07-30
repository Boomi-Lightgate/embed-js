/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EnvironmentRoleExpression } from './EnvironmentRoleExpression';
export type EnvironmentRoleGroupingExpression = {
    nestedExpression?: Array<EnvironmentRoleExpression>;
    operator: EnvironmentRoleGroupingExpression.operator;
};
export namespace EnvironmentRoleGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

