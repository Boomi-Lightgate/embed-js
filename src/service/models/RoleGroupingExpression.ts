/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RoleExpression } from './RoleExpression';
export type RoleGroupingExpression = {
    nestedExpression?: Array<RoleExpression>;
    operator: RoleGroupingExpression.operator;
};
export namespace RoleGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

