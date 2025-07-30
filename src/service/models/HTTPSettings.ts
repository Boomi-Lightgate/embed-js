/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HTTPAuthSettings } from './HTTPAuthSettings';
import type { HTTPOAuth2Settings } from './HTTPOAuth2Settings';
import type { HTTPOAuthSettings } from './HTTPOAuthSettings';
import type { HTTPSSLOptions } from './HTTPSSLOptions';
export type HTTPSettings = {
    HTTPAuthSettings: HTTPAuthSettings;
    HTTPOAuth2Settings?: HTTPOAuth2Settings;
    HTTPOAuthSettings?: HTTPOAuthSettings;
    HTTPSSLOptions: HTTPSSLOptions;
    authenticationType?: HTTPSettings.authenticationType;
    connectTimeout?: number;
    cookieScope?: HTTPSettings.cookieScope;
    readTimeout?: number;
    url?: string;
    useBasicAuth?: boolean;
    useCustomAuth?: boolean;
    useDefaultSettings?: boolean;
};
export namespace HTTPSettings {
    export enum authenticationType {
        NONE = 'NONE',
        BASIC = 'BASIC',
        PASSWORD_DIGEST = 'PASSWORD_DIGEST',
        CUSTOM = 'CUSTOM',
        OAUTH = 'OAUTH',
        OAUTH2 = 'OAUTH2',
    }
    export enum cookieScope {
        IGNORED = 'IGNORED',
        GLOBAL = 'GLOBAL',
        CONNECTOR_SHAPE = 'CONNECTOR_SHAPE',
    }
}

