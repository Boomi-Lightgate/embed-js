/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EDIFACTConnectorRecordExpression } from './EDIFACTConnectorRecordExpression';
export type EDIFACTConnectorRecordGroupingExpression = {
    nestedExpression?: Array<EDIFACTConnectorRecordExpression>;
    operator: EDIFACTConnectorRecordGroupingExpression.operator;
};
export namespace EDIFACTConnectorRecordGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

