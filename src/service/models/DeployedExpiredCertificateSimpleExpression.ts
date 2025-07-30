/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type DeployedExpiredCertificateSimpleExpression = {
    argument?: Array<string>;
    operator: DeployedExpiredCertificateSimpleExpression.operator;
    property: DeployedExpiredCertificateSimpleExpression.property;
};
export namespace DeployedExpiredCertificateSimpleExpression {
    export enum operator {
        LESS_THAN_OR_EQUAL = 'LESS_THAN_OR_EQUAL',
    }
    export enum property {
        CONTAINER_ID = 'containerId',
        CONTAINER_NAME = 'containerName',
        ENVIRONMENT_ID = 'environmentId',
        ENVIRONMENT_NAME = 'environmentName',
        EXPIRATION_BOUNDARY = 'expirationBoundary',
    }
}

