/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PublicCertificate } from './PublicCertificate';
export type RosettaNetControlInfo = {
    encryptionPublicCertificate?: PublicCertificate;
    globalPartnerClassificationCode?: string;
    globalUsageCode?: RosettaNetControlInfo.globalUsageCode;
    partnerId?: string;
    partnerIdType?: RosettaNetControlInfo.partnerIdType;
    partnerLocation?: string;
    signingPublicCertificate?: PublicCertificate;
    supplyChainCode?: string;
};
export namespace RosettaNetControlInfo {
    export enum globalUsageCode {
        TEST = 'Test',
        PRODUCTION = 'Production',
    }
    export enum partnerIdType {
        DUNS = 'DUNS',
    }
}

