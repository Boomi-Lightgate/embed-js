/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AsyncToken } from './AsyncToken';
export type AsyncOperationTokenResult = {
    asyncToken: AsyncToken;
    /**
     * The status code returned from a request, as follows:
     * - 202 — Initialized the Listener status request and is in progress (QUERY response).
     * - 200 — Listener status request is complete (GET response).
     */
    responseStatusCode: number;
};

