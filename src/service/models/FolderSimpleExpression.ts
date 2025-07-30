/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type FolderSimpleExpression = {
    argument?: Array<string>;
    operator: FolderSimpleExpression.operator;
    property: FolderSimpleExpression.property;
};
export namespace FolderSimpleExpression {
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
        ACCOUNT_ID = 'accountId',
        ID = 'id',
        NAME = 'name',
        FULL_PATH = 'fullPath',
        DELETED = 'deleted',
        PARENT_ID = 'parentId',
        PARENT_NAME = 'parentName',
        PERMITTED_ROLES = 'permittedRoles',
    }
}

