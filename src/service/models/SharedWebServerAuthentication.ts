/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SharedWebServerLoginModuleConfiguration } from './SharedWebServerLoginModuleConfiguration';
export type SharedWebServerAuthentication = {
    authType: string;
    cacheAuthenticationTimeout?: number;
    cacheAuthorizationCredentials?: boolean;
    clientCertificateHeaderName: string;
    loginModuleClassName: string;
    loginModuleOptions: SharedWebServerLoginModuleConfiguration;
};

