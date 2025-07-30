/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type EnvironmentConnectionFieldExtensionSummarySimpleExpression = {
    argument?: Array<string>;
    operator: EnvironmentConnectionFieldExtensionSummarySimpleExpression.operator;
    /**
     * All filters are required except for extensionGroupId, which is for a multi-install integration pack only. You can obtain valid values for each filter by using the QUERY operation on the Environment Extensions object.
     */
    property: EnvironmentConnectionFieldExtensionSummarySimpleExpression.property;
};
export namespace EnvironmentConnectionFieldExtensionSummarySimpleExpression {
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
    /**
     * All filters are required except for extensionGroupId, which is for a multi-install integration pack only. You can obtain valid values for each filter by using the QUERY operation on the Environment Extensions object.
     */
    export enum property {
        ENVIRONMENT_ID = 'environmentId',
        EXTENSION_GROUP_ID = 'extensionGroupId',
        CONNECTION_ID = 'connectionId',
        FIELD_ID = 'fieldId',
    }
}

