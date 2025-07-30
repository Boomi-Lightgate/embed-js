/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeployedPackageExpression } from './DeployedPackageExpression';
export type DeployedPackageGroupingExpression = {
    nestedExpression?: Array<DeployedPackageExpression>;
    operator: DeployedPackageGroupingExpression.operator;
};
export namespace DeployedPackageGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

