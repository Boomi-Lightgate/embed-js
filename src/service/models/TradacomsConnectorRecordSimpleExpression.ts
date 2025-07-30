/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type TradacomsConnectorRecordSimpleExpression = {
    argument?: Array<string>;
    operator: TradacomsConnectorRecordSimpleExpression.operator;
    property: TradacomsConnectorRecordSimpleExpression.property;
};
export namespace TradacomsConnectorRecordSimpleExpression {
    export enum operator {
        EQUALS = 'EQUALS',
        STARTS_WITH = 'STARTS_WITH',
        BETWEEN = 'BETWEEN',
        GREATER_THAN = 'GREATER_THAN',
        GREATER_THAN_OR_EQUAL = 'GREATER_THAN_OR_EQUAL',
        LESS_THAN = 'LESS_THAN',
        LESS_THAN_OR_EQUAL = 'LESS_THAN_OR_EQUAL',
    }
    export enum property {
        EXECUTION_ID = 'executionId',
        ATOM_ID = 'atomId',
        DATE_PROCESSED = 'dateProcessed',
        ID = 'id',
        ACTION_TYPE = 'actionType',
        CONNECTOR_TYPE = 'connectorType',
        CONNECTOR_NAME = 'connectorName',
        OPERATION_NAME = 'operationName',
        DOCUMENT_INDEX = 'documentIndex',
        SUCCESSFUL = 'successful',
        SIZE = 'size',
        ERROR_MESSAGE = 'errorMessage',
        VALIDATION_STATUS = 'validationStatus',
        VALIDATION_REPORT = 'validationReport',
        SENDER_NAME = 'senderName',
        RECEIVER_NAME = 'receiverName',
        MESSAGE_TYPE = 'messageType',
        DATE = 'date',
        TIME = 'time',
        SENDER_TRANSMISSION_REFERENCE = 'senderTransmissionReference',
        RECEIVER_TRANSMISSION_REFERENCE = 'receiverTransmissionReference',
        APPLICATION_REFERENCE = 'applicationReference',
        TRANSMISSION_PRIORITY_CODE = 'transmissionPriorityCode',
        FILE_GENERATION_NUMBER = 'fileGenerationNumber',
        FILE_VERSION_NUMBER = 'fileVersionNumber',
    }
}

