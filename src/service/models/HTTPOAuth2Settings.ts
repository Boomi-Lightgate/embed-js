/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HTTPEndpoint } from './HTTPEndpoint';
import type { HTTPOAuthCredentials } from './HTTPOAuthCredentials';
import type { HTTPRequestParameters } from './HTTPRequestParameters';
export type HTTPOAuth2Settings = {
    accessTokenEndpoint: HTTPEndpoint;
    accessTokenParameters: HTTPRequestParameters;
    authorizationParameters: HTTPRequestParameters;
    authorizationTokenEndpoint: HTTPEndpoint;
    credentials: HTTPOAuthCredentials;
    grantType?: HTTPOAuth2Settings.grantType;
    scope: string;
};
export namespace HTTPOAuth2Settings {
    export enum grantType {
        CODE = 'code',
        CLIENT_CREDENTIALS = 'client_credentials',
        PASSWORD = 'password',
    }
}

