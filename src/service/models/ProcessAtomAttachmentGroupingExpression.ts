/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProcessAtomAttachmentExpression } from './ProcessAtomAttachmentExpression';
export type ProcessAtomAttachmentGroupingExpression = {
    nestedExpression?: Array<ProcessAtomAttachmentExpression>;
    operator: ProcessAtomAttachmentGroupingExpression.operator;
};
export namespace ProcessAtomAttachmentGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

