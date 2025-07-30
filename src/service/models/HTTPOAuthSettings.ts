/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type HTTPOAuthSettings = {
    accessToken?: string;
    accessTokenURL?: string;
    authorizationURL?: string;
    consumerKey?: string;
    consumerSecret?: string;
    realm?: string;
    requestTokenURL?: string;
    signatureMethod?: HTTPOAuthSettings.signatureMethod;
    suppressBlankAccessToken?: boolean;
    tokenSecret?: string;
};
export namespace HTTPOAuthSettings {
    export enum signatureMethod {
        SHA1 = 'SHA1',
        SHA256 = 'SHA256',
    }
}

