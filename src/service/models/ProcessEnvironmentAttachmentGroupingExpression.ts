/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProcessEnvironmentAttachmentExpression } from './ProcessEnvironmentAttachmentExpression';
export type ProcessEnvironmentAttachmentGroupingExpression = {
    nestedExpression?: Array<ProcessEnvironmentAttachmentExpression>;
    operator: ProcessEnvironmentAttachmentGroupingExpression.operator;
};
export namespace ProcessEnvironmentAttachmentGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

