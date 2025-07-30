/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EnvironmentAtomAttachmentExpression } from './EnvironmentAtomAttachmentExpression';
export type EnvironmentAtomAttachmentGroupingExpression = {
    nestedExpression?: Array<EnvironmentAtomAttachmentExpression>;
    operator: EnvironmentAtomAttachmentGroupingExpression.operator;
};
export namespace EnvironmentAtomAttachmentGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

