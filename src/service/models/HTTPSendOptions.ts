/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HTTPPathElements } from './HTTPPathElements';
import type { HTTPReflectHeaders } from './HTTPReflectHeaders';
import type { HTTPRequestHeaders } from './HTTPRequestHeaders';
import type { HTTPResponseHeaderMapping } from './HTTPResponseHeaderMapping';
export type HTTPSendOptions = {
    dataContentType?: string;
    followRedirects?: boolean;
    methodType?: HTTPSendOptions.methodType;
    pathElements: HTTPPathElements;
    reflectHeaders?: HTTPReflectHeaders;
    requestHeaders: HTTPRequestHeaders;
    requestProfile?: string;
    requestProfileType?: HTTPSendOptions.requestProfileType;
    responseHeaderMapping: HTTPResponseHeaderMapping;
    responseProfile?: string;
    responseProfileType?: HTTPSendOptions.responseProfileType;
    returnErrors?: boolean;
    returnResponses?: boolean;
    useDefaultOptions?: boolean;
};
export namespace HTTPSendOptions {
    export enum methodType {
        GET = 'GET',
        POST = 'POST',
        PUT = 'PUT',
        DELETE = 'DELETE',
    }
    export enum requestProfileType {
        NONE = 'NONE',
        XML = 'XML',
        JSON = 'JSON',
    }
    export enum responseProfileType {
        NONE = 'NONE',
        XML = 'XML',
        JSON = 'JSON',
    }
}

