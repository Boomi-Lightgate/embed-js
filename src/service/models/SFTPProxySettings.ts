/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SFTPProxySettings = {
    host: string;
    password: string;
    port: number;
    proxyEnabled?: boolean;
    type?: SFTPProxySettings.type;
    user: string;
};
export namespace SFTPProxySettings {
    export enum type {
        ATOM = 'ATOM',
        HTTP = 'HTTP',
        SOCKS4 = 'SOCKS4',
        SOCKS5 = 'SOCKS5',
    }
}

