/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeploymentExpression } from './DeploymentExpression';
export type DeploymentGroupingExpression = {
    nestedExpression?: Array<DeploymentExpression>;
    operator: DeploymentGroupingExpression.operator;
};
export namespace DeploymentGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

