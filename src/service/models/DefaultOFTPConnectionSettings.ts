/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OFTPPartnerInfo } from './OFTPPartnerInfo';
export type DefaultOFTPConnectionSettings = {
    clientSSLAlias?: string;
    host?: string;
    myPartnerInfo: OFTPPartnerInfo;
    port?: number;
    sfidciph?: number;
    ssidauth?: boolean;
    tls?: boolean;
    useClientSSL?: boolean;
    useGateway?: boolean;
};

