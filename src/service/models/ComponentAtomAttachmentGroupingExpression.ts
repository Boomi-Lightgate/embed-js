/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ComponentAtomAttachmentExpression } from './ComponentAtomAttachmentExpression';
export type ComponentAtomAttachmentGroupingExpression = {
    nestedExpression?: Array<ComponentAtomAttachmentExpression>;
    operator: ComponentAtomAttachmentGroupingExpression.operator;
};
export namespace ComponentAtomAttachmentGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

