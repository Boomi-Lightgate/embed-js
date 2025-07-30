/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type X12ConnectorRecordSimpleExpression = {
    argument?: Array<string>;
    operator: X12ConnectorRecordSimpleExpression.operator;
    property: X12ConnectorRecordSimpleExpression.property;
};
export namespace X12ConnectorRecordSimpleExpression {
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
        ISA_ACK_STATUS = 'isaAckStatus',
        ISA_ACK_REPORT = 'isaAckReport',
        ACK_STATUS = 'ackStatus',
        ACK_REPORT = 'ackReport',
        ISA_CONTROL = 'isaControl',
        GS_CONTROL = 'gsControl',
        ST_CONTROL = 'stControl',
        FUNCTIONAL_ID = 'functionalID',
        TRANSACTION_SET = 'transactionSet',
        TEST_INDICATOR = 'testIndicator',
        SENDER_IDQUALIFIER = 'senderIDQualifier',
        SENDER_ID = 'senderID',
        RECEIVER_IDQUALIFIER = 'receiverIDQualifier',
        RECEIVER_ID = 'receiverID',
        APP_SENDER_ID = 'appSenderID',
        APP_RECEIVER_ID = 'appReceiverID',
        STANDARD_ID = 'standardID',
        STANDARD = 'standard',
        GS_VERSION = 'gsVersion',
        AGENCY_CODE = 'agencyCode',
        GS_DATE = 'gsDate',
        GS_TIME = 'gsTime',
        OUTBOUND_VALIDATION_STATUS = 'outboundValidationStatus',
        OUTBOUND_VALIDATION_REPORT = 'outboundValidationReport',
    }
}

