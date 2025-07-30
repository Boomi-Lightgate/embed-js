/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TradacomsConnectorRecordExpression } from './TradacomsConnectorRecordExpression';
export type TradacomsConnectorRecordGroupingExpression = {
    nestedExpression?: Array<TradacomsConnectorRecordExpression>;
    operator: TradacomsConnectorRecordGroupingExpression.operator;
};
export namespace TradacomsConnectorRecordGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

