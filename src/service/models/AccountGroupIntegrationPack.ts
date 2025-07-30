/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AccountGroupIntegrationPack = {
    /**
     * The ID of the account group.
     */
    accountGroupId?: string;
    /**
     * A unique ID assigned by the system to the integration pack. This field populates only if you add the integration pack to an account group.
     */
    id?: string;
    /**
     * The type of integration pack. Possible values:
     *
     * - SINGLE — single attachment
     * - MULTI — multiple attachment
     */
    installationType?: AccountGroupIntegrationPack.installationType;
    /**
     * A unique ID assigned by the system to the integration pack.
     */
    integrationPackId?: string;
    /**
     * The name of the integration pack.
     */
    integrationPackName?: string;
};
export namespace AccountGroupIntegrationPack {
    /**
     * The type of integration pack. Possible values:
     *
     * - SINGLE — single attachment
     * - MULTI — multiple attachment
     */
    export enum installationType {
        SINGLE = 'SINGLE',
        MULTI = 'MULTI',
    }
}

