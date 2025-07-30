/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AtomConnectionFieldExtensionSummaryExpression } from './AtomConnectionFieldExtensionSummaryExpression';
export type AtomConnectionFieldExtensionSummaryGroupingExpression = {
    nestedExpression?: Array<AtomConnectionFieldExtensionSummaryExpression>;
    operator: AtomConnectionFieldExtensionSummaryGroupingExpression.operator;
};
export namespace AtomConnectionFieldExtensionSummaryGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

