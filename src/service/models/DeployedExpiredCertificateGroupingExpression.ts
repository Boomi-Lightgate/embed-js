/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeployedExpiredCertificateExpression } from './DeployedExpiredCertificateExpression';
export type DeployedExpiredCertificateGroupingExpression = {
    nestedExpression?: Array<DeployedExpiredCertificateExpression>;
    operator: DeployedExpiredCertificateGroupingExpression.operator;
};
export namespace DeployedExpiredCertificateGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

