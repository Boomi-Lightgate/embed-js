/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AS2BasicAuthInfo } from './AS2BasicAuthInfo';
import type { AttachmentInfo } from './AttachmentInfo';
import type { PublicCertificate } from './PublicCertificate';
export type AS2PartnerInfo = {
    ListenAttachmentSettings?: AttachmentInfo;
    ListenAuthSettings?: AS2BasicAuthInfo;
    as2Id: string;
    basicAuthEnabled?: boolean;
    clientSSLCertificate: PublicCertificate;
    enabledLegacySMIME?: boolean;
    encryptionPublicCertificate: PublicCertificate;
    mdnSignaturePublicCertificate: PublicCertificate;
    messagesToCheckForDuplicates?: number;
    rejectDuplicateMessages?: boolean;
    signingPublicCertificate: PublicCertificate;
};

