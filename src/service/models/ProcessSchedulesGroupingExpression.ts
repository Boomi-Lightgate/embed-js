/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProcessSchedulesExpression } from './ProcessSchedulesExpression';
export type ProcessSchedulesGroupingExpression = {
    nestedExpression?: Array<ProcessSchedulesExpression>;
    operator: ProcessSchedulesGroupingExpression.operator;
};
export namespace ProcessSchedulesGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

