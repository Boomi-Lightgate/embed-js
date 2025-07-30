/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FolderExpression } from './FolderExpression';
export type FolderGroupingExpression = {
    nestedExpression?: Array<FolderExpression>;
    operator: FolderGroupingExpression.operator;
};
export namespace FolderGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

