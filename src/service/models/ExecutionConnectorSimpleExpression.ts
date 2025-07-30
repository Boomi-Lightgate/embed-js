/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ExecutionConnectorSimpleExpression = {
    argument?: Array<string>;
    operator: ExecutionConnectorSimpleExpression.operator;
    property: ExecutionConnectorSimpleExpression.property;
};
export namespace ExecutionConnectorSimpleExpression {
    export enum operator {
        EQUALS = 'EQUALS',
        LIKE = 'LIKE',
        NOT_EQUALS = 'NOT_EQUALS',
        IS_NULL = 'IS_NULL',
        IS_NOT_NULL = 'IS_NOT_NULL',
        BETWEEN = 'BETWEEN',
        GREATER_THAN = 'GREATER_THAN',
        GREATER_THAN_OR_EQUAL = 'GREATER_THAN_OR_EQUAL',
        LESS_THAN = 'LESS_THAN',
        LESS_THAN_OR_EQUAL = 'LESS_THAN_OR_EQUAL',
        CONTAINS = 'CONTAINS',
        NOT_CONTAINS = 'NOT_CONTAINS',
    }
    export enum property {
        EXECUTION_ID = 'executionId',
        CONNECTOR_TYPE = 'connectorType',
        ACTION_TYPE = 'actionType',
        ERROR_COUNT = 'errorCount',
        SUCCESS_COUNT = 'successCount',
        SIZE = 'size',
        IS_START_SHAPE = 'isStartShape',
        RECORD_TYPE = 'recordType',
    }
}

