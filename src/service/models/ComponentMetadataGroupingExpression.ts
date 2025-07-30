/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ComponentMetadataExpression } from './ComponentMetadataExpression';
export type ComponentMetadataGroupingExpression = {
    nestedExpression?: Array<ComponentMetadataExpression>;
    operator: ComponentMetadataGroupingExpression.operator;
};
export namespace ComponentMetadataGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

