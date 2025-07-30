/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SharedServerInformation = {
    /**
     * The level of user management and API management functionality applicable to the shared web server.Options are basic, intermediate, and advanced. The default is intermediate.
     */
    apiType?: SharedServerInformation.apiType;
    /**
     * The ID of the Runtime that is hosting the shared web server.
     */
    atomId?: string;
    /**
     * The authentication required by the web server. Options are none and basic. If minAuth is set to basic, you must also set auth to basic.
     */
    auth?: SharedServerInformation.auth;
    /**
     * If you configure BASIC authentication, this is an authentication token for connecting to the shared web server. You cannot update this with the UPDATE operation.
     */
    authToken?: string;
    /**
     * Information regarding the external host, might be forwarded in headers. The embedded Java technology is capable of examining these headers and extracting external host information for response and callback purposes. Set this to true to enable the server to check for this information. The default is false.
     */
    checkForwardedHeaders?: boolean;
    /**
     * The external host name or IP for the listener.
     */
    externalHost?: string;
    /**
     * The external HTTP port routes to the shared web server listener.
     */
    externalHttpPort?: number;
    /**
     * The external HTTPS port routes to the shared web server listener.
     */
    externalHttpsPort?: number;
    /**
     * The HTTP port on which the web server listens. The default port is 9090.
     */
    httpPort?: number;
    /**
     * The SSL \(HTTPS\) port on which the web server listens, if applicable. The default port is 9093.
     */
    httpsPort?: number;
    /**
     * For multi-homed boxes, the IP address you want to use for binding to a specific interface.
     */
    internalHost?: string;
    /**
     * The maximum number of handler threads that the listen process spawn. It queues other requests.
     */
    maxThreads?: number;
    /**
     * The minimum authentication required by the web server. Options are none and basic. The are multi-tenant, so the default is set to basic. The default for local Runtimes and Runtime clusters is none.
     */
    minAuth?: SharedServerInformation.minAuth;
    /**
     * Allows manual overriding of the exposed URL used to connect to the shared web server. This value is for informational purposes for any tenant. By default, this is false, meaning the URL is constructed based on the host name or external host name and port or SSL port settings. Set this to true to specify a custom URL attribute value.
     */
    overrideUrl?: boolean;
    /**
     * The component ID for the SSL certificate used by the server, if applicable.
     */
    sslCertificateId?: string;
    /**
     * The URL for connecting to the shared web server.
     */
    url?: string;
};
export namespace SharedServerInformation {
    /**
     * The level of user management and API management functionality applicable to the shared web server.Options are basic, intermediate, and advanced. The default is intermediate.
     */
    export enum apiType {
        BASIC = 'basic',
        INTERMEDIATE = 'intermediate',
        ADVANCED = 'advanced',
    }
    /**
     * The authentication required by the web server. Options are none and basic. If minAuth is set to basic, you must also set auth to basic.
     */
    export enum auth {
        NONE = 'none',
        BASIC = 'basic',
    }
    /**
     * The minimum authentication required by the web server. Options are none and basic. The are multi-tenant, so the default is set to basic. The default for local Runtimes and Runtime clusters is none.
     */
    export enum minAuth {
        NONE = 'none',
        BASIC = 'basic',
    }
}

