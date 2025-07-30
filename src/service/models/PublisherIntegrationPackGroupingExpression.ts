/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PublisherIntegrationPackExpression } from './PublisherIntegrationPackExpression';
export type PublisherIntegrationPackGroupingExpression = {
    nestedExpression?: Array<PublisherIntegrationPackExpression>;
    operator: PublisherIntegrationPackGroupingExpression.operator;
};
export namespace PublisherIntegrationPackGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

