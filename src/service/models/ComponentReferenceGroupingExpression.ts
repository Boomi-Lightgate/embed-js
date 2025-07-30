/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ComponentReferenceExpression } from './ComponentReferenceExpression';
export type ComponentReferenceGroupingExpression = {
    nestedExpression?: Array<ComponentReferenceExpression>;
    operator: ComponentReferenceGroupingExpression.operator;
};
export namespace ComponentReferenceGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

