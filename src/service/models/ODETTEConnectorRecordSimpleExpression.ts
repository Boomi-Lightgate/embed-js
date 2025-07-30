/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ODETTEConnectorRecordSimpleExpression = {
    argument?: Array<string>;
    /**
     * The STARTS_WITH operator accepts values that do not include spaces.
     */
    operator: ODETTEConnectorRecordSimpleExpression.operator;
    property: string;
};
export namespace ODETTEConnectorRecordSimpleExpression {
    /**
     * The STARTS_WITH operator accepts values that do not include spaces.
     */
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

