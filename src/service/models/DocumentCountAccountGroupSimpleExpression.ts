/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type DocumentCountAccountGroupSimpleExpression = {
    argument?: Array<string>;
    /**
     *
     *
     * You can use the EQUALS operator only with the `accountGroupId` filter parameter. The authenticating user for a QUERY operation must have the **Dashboard** privilege.
     */
    operator: DocumentCountAccountGroupSimpleExpression.operator;
    property: DocumentCountAccountGroupSimpleExpression.property;
};
export namespace DocumentCountAccountGroupSimpleExpression {
    /**
     *
     *
     * You can use the EQUALS operator only with the `accountGroupId` filter parameter. The authenticating user for a QUERY operation must have the **Dashboard** privilege.
     */
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
        ACCOUNT_GROUP_ID = 'accountGroupId',
        PROCESS_DATE = 'processDate',
    }
}

