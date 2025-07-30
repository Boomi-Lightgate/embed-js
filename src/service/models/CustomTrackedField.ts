/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CustomTrackedField = {
    /**
     * The display name of the custom tracked field.
     */
    label?: string;
    /**
     * The display position of the custom tracked field.
     */
    position?: number;
    /**
     * The type of custom tracked field. Allowed values include character, datetime, and number.
     */
    type?: CustomTrackedField.type;
};
export namespace CustomTrackedField {
    /**
     * The type of custom tracked field. Allowed values include character, datetime, and number.
     */
    export enum type {
        CHARACTER = 'character',
        DATETIME = 'datetime',
        NUMBER = 'number',
    }
}

