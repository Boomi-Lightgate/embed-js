/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GenericConnectorRecordExpression } from './GenericConnectorRecordExpression';
export type GenericConnectorRecordGroupingExpression = {
    nestedExpression?: Array<GenericConnectorRecordExpression>;
    operator: GenericConnectorRecordGroupingExpression.operator;
};
export namespace GenericConnectorRecordGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

