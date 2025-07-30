/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ComponentEnvironmentAttachmentExpression } from './ComponentEnvironmentAttachmentExpression';
export type ComponentEnvironmentAttachmentGroupingExpression = {
    nestedExpression?: Array<ComponentEnvironmentAttachmentExpression>;
    operator: ComponentEnvironmentAttachmentGroupingExpression.operator;
};
export namespace ComponentEnvironmentAttachmentGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

