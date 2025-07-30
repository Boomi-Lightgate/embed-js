/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ExecutionRecordSimpleExpression = {
    argument?: Array<string>;
    operator: ExecutionRecordSimpleExpression.operator;
    property: ExecutionRecordSimpleExpression.property;
};
export namespace ExecutionRecordSimpleExpression {
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
        ORIGINAL_EXECUTION_ID = 'originalExecutionId',
        ACCOUNT = 'account',
        EXECUTION_TIME = 'executionTime',
        STATUS = 'status',
        EXECUTION_TYPE = 'executionType',
        PROCESS_NAME = 'processName',
        PROCESS_ID = 'processId',
        ATOM_NAME = 'atomName',
        ATOM_ID = 'atomId',
        INBOUND_DOCUMENT_COUNT = 'inboundDocumentCount',
        OUTBOUND_DOCUMENT_COUNT = 'outboundDocumentCount',
        EXECUTION_DURATION = 'executionDuration',
        MESSAGE = 'message',
        REPORT_KEY = 'reportKey',
        LAUNCHER_ID = 'launcherId',
        NODE_ID = 'nodeId',
        RECORDED_DATE = 'recordedDate',
    }
}

