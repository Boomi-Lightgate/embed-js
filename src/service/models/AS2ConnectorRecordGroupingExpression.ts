/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AS2ConnectorRecordExpression } from './AS2ConnectorRecordExpression';
export type AS2ConnectorRecordGroupingExpression = {
    nestedExpression?: Array<AS2ConnectorRecordExpression>;
    operator: AS2ConnectorRecordGroupingExpression.operator;
};
export namespace AS2ConnectorRecordGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

