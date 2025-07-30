/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EventExpression } from './EventExpression';
export type EventGroupingExpression = {
    nestedExpression?: Array<EventExpression>;
    operator: EventGroupingExpression.operator;
};
export namespace EventGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

