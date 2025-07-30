/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DocumentCountAccountExpression } from './DocumentCountAccountExpression';
export type DocumentCountAccountGroupingExpression = {
    nestedExpression?: Array<DocumentCountAccountExpression>;
    operator: DocumentCountAccountGroupingExpression.operator;
};
export namespace DocumentCountAccountGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

