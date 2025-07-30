/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IntegrationPackEnvironmentAttachmentExpression } from './IntegrationPackEnvironmentAttachmentExpression';
export type IntegrationPackEnvironmentAttachmentGroupingExpression = {
    nestedExpression?: Array<IntegrationPackEnvironmentAttachmentExpression>;
    operator: IntegrationPackEnvironmentAttachmentGroupingExpression.operator;
};
export namespace IntegrationPackEnvironmentAttachmentGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

