/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DocumentCountAccountGroupExpression } from './DocumentCountAccountGroupExpression';
export type DocumentCountAccountGroupGroupingExpression = {
    nestedExpression?: Array<DocumentCountAccountGroupExpression>;
    operator: DocumentCountAccountGroupGroupingExpression.operator;
};
export namespace DocumentCountAccountGroupGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

