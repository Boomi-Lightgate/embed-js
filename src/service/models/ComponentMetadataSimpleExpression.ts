/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ComponentMetadataSimpleExpression = {
    argument?: Array<string>;
    operator: ComponentMetadataSimpleExpression.operator;
    property: ComponentMetadataSimpleExpression.property;
};
export namespace ComponentMetadataSimpleExpression {
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
        COMPONENT_ID = 'componentId',
        VERSION = 'version',
        NAME = 'name',
        TYPE = 'type',
        SUB_TYPE = 'subType',
        CREATED_DATE = 'createdDate',
        CREATED_BY = 'createdBy',
        MODIFIED_DATE = 'modifiedDate',
        MODIFIED_BY = 'modifiedBy',
        DELETED = 'deleted',
        CURRENT_VERSION = 'currentVersion',
        FOLDER_NAME = 'folderName',
        FOLDER_ID = 'folderId',
        COPIED_FROM_COMPONENT_ID = 'copiedFromComponentId',
        COPIED_FROM_COMPONENT_VERSION = 'copiedFromComponentVersion',
        BRANCH_NAME = 'branchName',
        BRANCH_ID = 'branchId',
    }
}

