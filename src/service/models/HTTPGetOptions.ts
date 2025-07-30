/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HTTPPathElements } from './HTTPPathElements';
import type { HTTPReflectHeaders } from './HTTPReflectHeaders';
import type { HTTPRequestHeaders } from './HTTPRequestHeaders';
import type { HTTPResponseHeaderMapping } from './HTTPResponseHeaderMapping';
export type HTTPGetOptions = {
    dataContentType?: string;
    followRedirects?: boolean;
    methodType?: HTTPGetOptions.methodType;
    pathElements: HTTPPathElements;
    reflectHeaders?: HTTPReflectHeaders;
    requestHeaders: HTTPRequestHeaders;
    requestProfile?: string;
    requestProfileType?: HTTPGetOptions.requestProfileType;
    responseHeaderMapping: HTTPResponseHeaderMapping;
    responseProfile?: string;
    responseProfileType?: HTTPGetOptions.responseProfileType;
    returnErrors?: boolean;
    useDefaultOptions?: boolean;
};
export namespace HTTPGetOptions {
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

