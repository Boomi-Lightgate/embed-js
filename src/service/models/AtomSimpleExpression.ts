/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AtomSimpleExpression = {
    argument?: Array<string>;
    operator: AtomSimpleExpression.operator;
    property: AtomSimpleExpression.property;
};
export namespace AtomSimpleExpression {
    export enum operator {
        EQUALS = 'EQUALS',
        NOT_EQUALS = 'NOT_EQUALS',
        CONTAINS = 'CONTAINS',
        NOT_CONTAINS = 'NOT_CONTAINS',
    }
    export enum property {
        NAME = 'name',
        ID = 'id',
        HOSTNAME = 'hostname',
        STATUS = 'status',
        TYPE = 'type',
        CAPABILITIES = 'capabilities',
    }
}

