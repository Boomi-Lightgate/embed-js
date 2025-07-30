/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EdiCustomConnectorRecordExpression } from './EdiCustomConnectorRecordExpression';
export type EdiCustomConnectorRecordGroupingExpression = {
    nestedExpression?: Array<EdiCustomConnectorRecordExpression>;
    operator: EdiCustomConnectorRecordGroupingExpression.operator;
};
export namespace EdiCustomConnectorRecordGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

