/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { X12ConnectorRecordExpression } from './X12ConnectorRecordExpression';
export type X12ConnectorRecordGroupingExpression = {
    nestedExpression?: Array<X12ConnectorRecordExpression>;
    operator: X12ConnectorRecordGroupingExpression.operator;
};
export namespace X12ConnectorRecordGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

