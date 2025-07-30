/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OFTP2ConnectorRecordExpression } from './OFTP2ConnectorRecordExpression';
export type OFTP2ConnectorRecordGroupingExpression = {
    nestedExpression?: Array<OFTP2ConnectorRecordExpression>;
    operator: OFTP2ConnectorRecordGroupingExpression.operator;
};
export namespace OFTP2ConnectorRecordGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

