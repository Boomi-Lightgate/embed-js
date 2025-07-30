/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomTrackedFieldExpression } from './CustomTrackedFieldExpression';
export type CustomTrackedFieldGroupingExpression = {
    nestedExpression?: Array<CustomTrackedFieldExpression>;
    operator: CustomTrackedFieldGroupingExpression.operator;
};
export namespace CustomTrackedFieldGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

