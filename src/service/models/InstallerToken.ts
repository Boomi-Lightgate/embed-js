/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type InstallerToken = {
    accountId?: string;
    /**
     * \(For Runtime cloud installation\) A unique ID assigned by the system to the Runtime cloud.
     */
    cloudId?: string;
    created?: string;
    /**
     * The number of minutes for which the installer token is valid, from 30 to 1440.
     */
    durationMinutes?: number;
    expiration?: string;
    /**
     * -   ATOM<br />-   MOLECULE<br />-   CLOUD<br />-   BROKER
     */
    installType?: InstallerToken.installType;
    token?: string;
};
export namespace InstallerToken {
    /**
     * -   ATOM<br />-   MOLECULE<br />-   CLOUD<br />-   BROKER
     */
    export enum installType {
        CLOUD = 'CLOUD',
        ATOM = 'ATOM',
        MOLECULE = 'MOLECULE',
        BROKER = 'BROKER',
        GATEWAY = 'GATEWAY',
    }
}

