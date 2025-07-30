/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TradingPartnerProcessingGroupExpression } from './TradingPartnerProcessingGroupExpression';
export type TradingPartnerProcessingGroupGroupingExpression = {
    nestedExpression?: Array<TradingPartnerProcessingGroupExpression>;
    operator: TradingPartnerProcessingGroupGroupingExpression.operator;
};
export namespace TradingPartnerProcessingGroupGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

