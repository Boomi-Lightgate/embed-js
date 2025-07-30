/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AuditLogSimpleExpression = {
    argument?: Array<string>;
    operator: AuditLogSimpleExpression.operator;
    property: AuditLogSimpleExpression.property;
};
export namespace AuditLogSimpleExpression {
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
        CONTAINER_ID = 'containerId',
        USER_ID = 'userId',
        DATE = 'date',
        TYPE = 'type',
        ACTION = 'action',
        MODIFIER = 'modifier',
        LEVEL = 'level',
        SOURCE = 'source',
    }
}

