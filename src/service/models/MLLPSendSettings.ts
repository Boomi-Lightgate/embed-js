/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EdiDelimiter } from './EdiDelimiter';
import type { MLLPSSLOptions } from './MLLPSSLOptions';
export type MLLPSendSettings = {
    MLLPSSLOptions: MLLPSSLOptions;
    endBlock: EdiDelimiter;
    endData: EdiDelimiter;
    haltTimeout?: boolean;
    host: string;
    inactivityTimeout?: number;
    maxConnections?: number;
    maxRetry?: number;
    persistent?: boolean;
    port: number;
    receiveTimeout?: number;
    sendTimeout?: number;
    startBlock: EdiDelimiter;
};

