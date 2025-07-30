/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IntegrationPackAtomAttachmentExpression } from './IntegrationPackAtomAttachmentExpression';
export type IntegrationPackAtomAttachmentGroupingExpression = {
    nestedExpression?: Array<IntegrationPackAtomAttachmentExpression>;
    operator: IntegrationPackAtomAttachmentGroupingExpression.operator;
};
export namespace IntegrationPackAtomAttachmentGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

