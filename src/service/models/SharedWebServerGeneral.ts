/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListenerPortConfiguration } from './ListenerPortConfiguration';
import type { SharedWebServerAuthentication } from './SharedWebServerAuthentication';
import type { SharedWebServerProtectedHeaders } from './SharedWebServerProtectedHeaders';
export type SharedWebServerGeneral = {
    apiType: string;
    authentication: SharedWebServerAuthentication;
    baseUrl: string;
    examineForwardHeaders?: boolean;
    externalHost: string;
    internalHost: string;
    listenerPorts: ListenerPortConfiguration;
    maxNumberOfThreads?: number;
    overrideUrl?: boolean;
    protectedHeaders: SharedWebServerProtectedHeaders;
    sslCertificate: string;
};

