/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RosettaNetConnectorRecordExpression } from './RosettaNetConnectorRecordExpression';
export type RosettaNetConnectorRecordGroupingExpression = {
    nestedExpression?: Array<RosettaNetConnectorRecordExpression>;
    operator: RosettaNetConnectorRecordGroupingExpression.operator;
};
export namespace RosettaNetConnectorRecordGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

