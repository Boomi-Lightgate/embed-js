/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AS2ConnectorRecordSimpleExpression = {
    argument?: Array<string>;
    operator: AS2ConnectorRecordSimpleExpression.operator;
    property: string;
};
export namespace AS2ConnectorRecordSimpleExpression {
    export enum operator {
        EQUALS = 'EQUALS',
        STARTS_WITH = 'STARTS_WITH',
        BETWEEN = 'BETWEEN',
        GREATER_THAN = 'GREATER_THAN',
        GREATER_THAN_OR_EQUAL = 'GREATER_THAN_OR_EQUAL',
        LESS_THAN = 'LESS_THAN',
        LESS_THAN_OR_EQUAL = 'LESS_THAN_OR_EQUAL',
    }
}

