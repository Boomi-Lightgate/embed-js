/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SFTPProxySettings } from './SFTPProxySettings';
import type { SFTPSSHOptions } from './SFTPSSHOptions';
export type SFTPSettings = {
    SFTPProxySettings: SFTPProxySettings;
    SFTPSSHOptions: SFTPSSHOptions;
    host: string;
    password: string;
    port: number;
    useDefaultSettings?: boolean;
    user: string;
};

