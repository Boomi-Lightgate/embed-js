/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OrganizationComponentExpression } from './OrganizationComponentExpression';
export type OrganizationComponentGroupingExpression = {
    nestedExpression?: Array<OrganizationComponentExpression>;
    operator: OrganizationComponentGroupingExpression.operator;
};
export namespace OrganizationComponentGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

