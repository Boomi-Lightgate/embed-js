/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListenerStatus } from './ListenerStatus';
export type ListenerStatusAsyncResponse = {
    numberOfResults?: number;
    /**
     * The status code returned from a request, as follows:
     * - 202 — Initialized the Listener status request and is in progress (QUERY response).
     * - 200 — Listener status request is complete (GET response).
     */
    responseStatusCode: ListenerStatusAsyncResponse.responseStatusCode;
    result?: Array<ListenerStatus>;
};
export namespace ListenerStatusAsyncResponse {
    /**
     * The status code returned from a request, as follows:
     * - 202 — Initialized the Listener status request and is in progress (QUERY response).
     * - 200 — Listener status request is complete (GET response).
     */
    export enum responseStatusCode {
        '_200' = 200,
        '_202' = 202,
    }
}

