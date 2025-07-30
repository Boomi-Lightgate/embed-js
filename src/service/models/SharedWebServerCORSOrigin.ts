/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SharedWebServerCORSOrigin = {
    EnableHTTPRequestHandling?: boolean;
    EnableHTTPSRequestHandling?: boolean;
    allowCredentials?: boolean;
    allowMethods?: Array<string>;
    allowRequestHeaders?: Array<string>;
    allowResponseHeaders?: Array<string>;
    cacheTimeout?: number;
    domain: string;
    ports?: Array<number>;
};

