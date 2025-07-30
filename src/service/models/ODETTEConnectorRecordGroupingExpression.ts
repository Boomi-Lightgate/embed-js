/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ODETTEConnectorRecordExpression } from './ODETTEConnectorRecordExpression';
export type ODETTEConnectorRecordGroupingExpression = {
    nestedExpression?: Array<ODETTEConnectorRecordExpression>;
    operator: ODETTEConnectorRecordGroupingExpression.operator;
};
export namespace ODETTEConnectorRecordGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

