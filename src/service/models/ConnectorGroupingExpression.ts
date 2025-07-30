/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConnectorExpression } from './ConnectorExpression';
export type ConnectorGroupingExpression = {
    nestedExpression?: Array<ConnectorExpression>;
    operator: ConnectorGroupingExpression.operator;
};
export namespace ConnectorGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

