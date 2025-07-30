/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type GenericConnectorRecordSimpleExpression = {
    argument?: Array<string>;
    operator: GenericConnectorRecordSimpleExpression.operator;
    property: GenericConnectorRecordSimpleExpression.property;
};
export namespace GenericConnectorRecordSimpleExpression {
    export enum operator {
        EQUALS = 'EQUALS',
    }
    export enum property {
        ID = 'id',
        EXECUTION_CONNECTOR_ID = 'executionConnectorId',
        EXECUTION_ID = 'executionId',
        CONNECTION_ID = 'connectionId',
        OPERATION_ID = 'operationId',
        ACTION_TYPE = 'actionType',
        CONNECTOR_TYPE = 'connectorType',
        ATOM_ID = 'atomId',
        DATE_PROCESSED = 'dateProcessed',
        CONNECTION_NAME = 'connectionName',
        OPERATION_NAME = 'operationName',
        ERROR_MESSAGE = 'errorMessage',
        STATUS = 'status',
        DOCUMENT_INDEX = 'documentIndex',
        INCREMENTAL_DOCUMENT_INDEX = 'incrementalDocumentIndex',
        SIZE = 'size',
        START_SHAPE = 'startShape',
        RETRYABLE = 'retryable',
    }
}

