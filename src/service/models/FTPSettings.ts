/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FTPSSLOptions } from './FTPSSLOptions';
export type FTPSettings = {
    FTPSSLOptions: FTPSSLOptions;
    connectionMode?: FTPSettings.connectionMode;
    host: string;
    password: string;
    port: number;
    useDefaultSettings?: boolean;
    user: string;
};
export namespace FTPSettings {
    export enum connectionMode {
        ACTIVE = 'active',
        PASSIVE = 'passive',
    }
}

