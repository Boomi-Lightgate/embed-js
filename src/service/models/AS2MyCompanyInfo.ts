/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PrivateCertificate } from './PrivateCertificate';
export type AS2MyCompanyInfo = {
    as2Id: string;
    enabledLegacySMIME?: boolean;
    encryptionPrivateCertificate: PrivateCertificate;
    mdnSignaturePrivateCertificate: PrivateCertificate;
    signingPrivateCertificate: PrivateCertificate;
};

