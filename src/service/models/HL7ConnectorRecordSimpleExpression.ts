/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type HL7ConnectorRecordSimpleExpression = {
    argument?: Array<string>;
    operator: HL7ConnectorRecordSimpleExpression.operator;
    property: string;
};
export namespace HL7ConnectorRecordSimpleExpression {
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

