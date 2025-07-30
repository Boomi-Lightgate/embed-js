/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AS2BasicAuthInfo } from './AS2BasicAuthInfo';
import type { PrivateCertificate } from './PrivateCertificate';
import type { PublicCertificate } from './PublicCertificate';
export type AS2SendSettings = {
    AuthSettings?: AS2BasicAuthInfo;
    authenticationType?: AS2SendSettings.authenticationType;
    clientSSLCertificate: PrivateCertificate;
    sslCertificate: PublicCertificate;
    url: string;
    useDefaultSettings?: boolean;
    verifyHostname?: boolean;
};
export namespace AS2SendSettings {
    export enum authenticationType {
        NONE = 'NONE',
        BASIC = 'BASIC',
    }
}

