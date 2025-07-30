/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PrivateCertificate } from './PrivateCertificate';
export type FTPSSLOptions = {
    clientSSLCertificate: PrivateCertificate;
    sslmode?: FTPSSLOptions.sslmode;
    useClientAuthentication?: boolean;
};
export namespace FTPSSLOptions {
    export enum sslmode {
        NONE = 'none',
        EXPLICIT = 'explicit',
        IMPLICIT = 'implicit',
    }
}

