/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type RosettaNetConnectorRecordSimpleExpression = {
    argument?: Array<string>;
    operator: RosettaNetConnectorRecordSimpleExpression.operator;
    property: RosettaNetConnectorRecordSimpleExpression.property;
};
export namespace RosettaNetConnectorRecordSimpleExpression {
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
        ACK_STATUS = 'ackStatus',
        ACK_REPORT = 'ackReport',
        SENDER_ID = 'senderID',
        RECEIVER_ID = 'receiverID',
        KNOWN_INITIATING_PARTNER_ID = 'knownInitiatingPartnerID',
        FRAMEWORK_VERSION = 'frameworkVersion',
        PIPCODE = 'PIPCode',
        PIPVERSION = 'PIPVersion',
        GLOBAL_PROCESS_CODE = 'globalProcessCode',
        GLOBAL_BUSINESS_ACTION_CODE = 'globalBusinessActionCode',
        GLOBAL_DOCUMENT_FUNCTION_CODE = 'globalDocumentFunctionCode',
        FROM_GLOBAL_PARTNER_ROLE_CLASSIFICATION_CODE = 'fromGlobalPartnerRoleClassificationCode',
        TO_GLOBAL_PARTNER_ROLE_CLASSIFICATION_CODE = 'toGlobalPartnerRoleClassificationCode',
        FROM_GLOBAL_BUSINESS_SERVICE_CODE = 'fromGlobalBusinessServiceCode',
        TO_GLOBAL_BUSINESS_SERVICE_CODE = 'toGlobalBusinessServiceCode',
        BUSINESS_ACTIVITY_IDENTIFIER = 'businessActivityIdentifier',
        PROCESS_INSTANCE_IDENTIFIER = 'processInstanceIdentifier',
        TRANSACTION_INSTANCE_IDENTIFIER = 'transactionInstanceIdentifier',
        ACTION_INSTANCE_IDENTIFIER = 'actionInstanceIdentifier',
        IN_RESPONSE_TO_GLOBAL_BUSINESS_ACTION_CODE = 'inResponseToGlobalBusinessActionCode',
        IN_RESPONSE_TO_INSTANCE_IDENTIFIER = 'inResponseToInstanceIdentifier',
        GLOBAL_USAGE_CODE = 'globalUsageCode',
        ATTEMPT_COUNT = 'attemptCount',
        DATE_TIME = 'dateTime',
        IS_SECURE_TRANSPORT_REQUIRED = 'isSecureTransportRequired',
        TIME_TO_ACKNOWLEDGE_ACCEPTANCE = 'timeToAcknowledgeAcceptance',
        TIME_TO_ACKNOWLEDGE_RECEIPT = 'timeToAcknowledgeReceipt',
        TIME_TO_PERFORM = 'timeToPerform',
        OUTBOUND_VALIDATION_STATUS = 'outboundValidationStatus',
        OUTBOUND_VALIDATION_REPORT = 'outboundValidationReport',
    }
}

