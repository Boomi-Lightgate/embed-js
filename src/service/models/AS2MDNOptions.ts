/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PrivateCertificate } from './PrivateCertificate';
import type { PublicCertificate } from './PublicCertificate';
export type AS2MDNOptions = {
    externalURL: string;
    mdnClientSSLCert: PrivateCertificate;
    mdnDigestAlg?: AS2MDNOptions.mdnDigestAlg;
    mdnSSLCert: PublicCertificate;
    requestMDN?: boolean;
    signed?: boolean;
    synchronous?: AS2MDNOptions.synchronous;
    useExternalURL?: boolean;
    useSSL?: boolean;
};
export namespace AS2MDNOptions {
    export enum mdnDigestAlg {
        SHA1 = 'SHA1',
        SHA224 = 'SHA224',
        SHA256 = 'SHA256',
        SHA384 = 'SHA384',
        SHA512 = 'SHA512',
    }
    export enum synchronous {
        SYNC = 'sync',
        ASYNC = 'async',
    }
}

