/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type DeployedPackageSimpleExpression = {
    argument?: Array<string>;
    operator: DeployedPackageSimpleExpression.operator;
    property: DeployedPackageSimpleExpression.property;
};
export namespace DeployedPackageSimpleExpression {
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
        UID = 'uid',
        NOTES = 'notes',
        CURRENT = 'current',
        PACKAGE_NOTES = 'packageNotes',
        ACTIVE = 'active',
        COMPONENT_ID = 'componentId',
        COMPONENT_VERSION = 'componentVersion',
        COMPONENT_NAME = 'componentName',
        COMPONENT_TYPE = 'componentType',
        DEPLOYED_BY = 'deployedBy',
        DEPLOYED_DATE = 'deployedDate',
        DEPLOYMENT_ID = 'deploymentId',
        ENVIRONMENT_ID = 'environmentId',
        ENVIRONMENT_NAME = 'environmentName',
        PACKAGE_ID = 'packageId',
        PACKAGE_VERSION = 'packageVersion',
        VERSION = 'version',
        ACCOUNT_ID = 'accountId',
        BRANCH = 'branch',
    }
}

