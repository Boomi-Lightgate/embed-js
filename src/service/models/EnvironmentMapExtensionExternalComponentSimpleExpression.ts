/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type EnvironmentMapExtensionExternalComponentSimpleExpression = {
    argument?: Array<string>;
    operator: EnvironmentMapExtensionExternalComponentSimpleExpression.operator;
    property: EnvironmentMapExtensionExternalComponentSimpleExpression.property;
};
export namespace EnvironmentMapExtensionExternalComponentSimpleExpression {
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
        ACCOUNT_ID = 'ACCOUNT_ID',
        ENVIRONMENT_MAP_EXTENSION_ID = 'ENVIRONMENT_MAP_EXTENSION_ID',
        PACKAGED_COMPONENT_UID = 'PACKAGED_COMPONENT_UID',
        COMPONENT_ID = 'COMPONENT_ID',
        COMPONENT_VERSION = 'COMPONENT_VERSION',
        COMPONENT_NAME = 'COMPONENT_NAME',
        COMPONENT_TYPE = 'COMPONENT_TYPE',
    }
}

