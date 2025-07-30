/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type EventSimpleExpression = {
    argument?: Array<string>;
    operator: EventSimpleExpression.operator;
    property: EventSimpleExpression.property;
};
export namespace EventSimpleExpression {
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
        EVENT_ID = 'eventId',
        ACCOUNT_ID = 'accountId',
        ATOM_ID = 'atomId',
        ATOM_NAME = 'atomName',
        EVENT_LEVEL = 'eventLevel',
        EVENT_DATE = 'eventDate',
        STATUS = 'status',
        EVENT_TYPE = 'eventType',
        EXECUTION_ID = 'executionId',
        TITLE = 'title',
        UPDATE_DATE = 'updateDate',
        START_TIME = 'startTime',
        END_TIME = 'endTime',
        ERROR_DOCUMENT_COUNT = 'errorDocumentCount',
        INBOUND_DOCUMENT_COUNT = 'inboundDocumentCount',
        OUTBOUND_DOCUMENT_COUNT = 'outboundDocumentCount',
        PROCESS_NAME = 'processName',
        RECORD_DATE = 'recordDate',
        ERROR = 'error',
        ENVIRONMENT = 'environment',
        CLASSIFICATION = 'classification',
    }
}

