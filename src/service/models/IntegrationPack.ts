/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type IntegrationPack = {
    /**
     * A description of the integration pack.
     */
    Description: string;
    /**
     * A unique ID assigned by the system to the integration pack.
     */
    id?: string;
    /**
     * The type of integration pack. Possible values:<br />-   SINGLE — single-attach<br />-   MULTI — multi-attach
     */
    installationType?: IntegrationPack.installationType;
    /**
     * The name of the integration pack.
     */
    name?: string;
};
export namespace IntegrationPack {
    /**
     * The type of integration pack. Possible values:<br />-   SINGLE — single-attach<br />-   MULTI — multi-attach
     */
    export enum installationType {
        SINGLE = 'SINGLE',
        MULTI = 'MULTI',
    }
}

