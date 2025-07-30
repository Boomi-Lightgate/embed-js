/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TradingPartnerComponentExpression } from './TradingPartnerComponentExpression';
export type TradingPartnerComponentGroupingExpression = {
    nestedExpression?: Array<TradingPartnerComponentExpression>;
    operator: TradingPartnerComponentGroupingExpression.operator;
};
export namespace TradingPartnerComponentGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

