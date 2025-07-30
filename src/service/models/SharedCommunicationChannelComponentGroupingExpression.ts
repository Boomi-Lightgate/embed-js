/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SharedCommunicationChannelComponentExpression } from './SharedCommunicationChannelComponentExpression';
export type SharedCommunicationChannelComponentGroupingExpression = {
    nestedExpression?: Array<SharedCommunicationChannelComponentExpression>;
    operator: SharedCommunicationChannelComponentGroupingExpression.operator;
};
export namespace SharedCommunicationChannelComponentGroupingExpression {
    export enum operator {
        AND = 'and',
        OR = 'or',
    }
}

