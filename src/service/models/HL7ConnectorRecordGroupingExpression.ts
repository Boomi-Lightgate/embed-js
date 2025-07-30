/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HL7ConnectorRecordExpression } from './HL7ConnectorRecordExpression';
export type HL7ConnectorRecordGroupingExpression = {
    nestedExpression?: Array<HL7ConnectorRecordExpression>;
    operator: HL7ConnectorRecordGroupingExpression.operator;
};
export namespace HL7ConnectorRecordGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

