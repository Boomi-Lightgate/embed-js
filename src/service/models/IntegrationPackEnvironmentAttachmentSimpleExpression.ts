/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type IntegrationPackEnvironmentAttachmentSimpleExpression = {
    argument?: Array<string>;
    operator: IntegrationPackEnvironmentAttachmentSimpleExpression.operator;
    property: IntegrationPackEnvironmentAttachmentSimpleExpression.property;
};
export namespace IntegrationPackEnvironmentAttachmentSimpleExpression {
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
        ENVIRONMENT_ID = 'environmentId',
        INTEGRATION_PACK_INSTANCE_ID = 'integrationPackInstanceId',
    }
}

