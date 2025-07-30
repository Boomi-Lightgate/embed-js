/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProcessScheduleStatusExpression } from './ProcessScheduleStatusExpression';
export type ProcessScheduleStatusGroupingExpression = {
    nestedExpression?: Array<ProcessScheduleStatusExpression>;
    operator: ProcessScheduleStatusGroupingExpression.operator;
};
export namespace ProcessScheduleStatusGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

