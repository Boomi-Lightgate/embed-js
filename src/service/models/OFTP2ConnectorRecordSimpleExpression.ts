/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type OFTP2ConnectorRecordSimpleExpression = {
    argument?: Array<string>;
    operator: OFTP2ConnectorRecordSimpleExpression.operator;
    property: OFTP2ConnectorRecordSimpleExpression.property;
};
export namespace OFTP2ConnectorRecordSimpleExpression {
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
        SFIDDSN = 'sfiddsn',
        SFIDDATE = 'sfiddate',
        SFIDTIME = 'sfidtime',
        SFIDDEST = 'sfiddest',
        INITIATOR_SSIDCODE = 'initiator_ssidcode',
        RESPONDER_SSIDCODE = 'responder_ssidcode',
        SFIDORIG = 'sfidorig',
        SFIDSEC = 'sfidsec',
        SFIDCOMP = 'sfidcomp',
        SFIDCIPH = 'sfidciph',
        SFIDDESC = 'sfiddesc',
        SFIDSIGN = 'sfidsign',
        SFIDOSIZ = 'sfidosiz',
        SFIDENV = 'sfidenv',
        STATUS = 'status',
        ACCOUNT = 'account',
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
        CUSTOM_FIELDS = 'customFields',
        NAREAS = 'nareas',
        NAREAST = 'nareast',
    }
}

