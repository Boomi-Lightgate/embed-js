/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AsyncOperationTokenResult } from '../models/AsyncOperationTokenResult';
import type { Atom } from '../models/Atom';
import type { AtomBulkRequest } from '../models/AtomBulkRequest';
import type { AtomBulkResponse } from '../models/AtomBulkResponse';
import type { AtomCountersAsyncResponse } from '../models/AtomCountersAsyncResponse';
import type { AtomQueryConfig } from '../models/AtomQueryConfig';
import type { AtomQueryResponse } from '../models/AtomQueryResponse';
import type { PersistedProcessPropertiesAsyncResponse } from '../models/PersistedProcessPropertiesAsyncResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AtomService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates a Runtime object
     * Creates and attaches a Runtime with the specified name to a specified Runtime cloud owned by the requesting account. This operation cannot be used to create a local Runtime. You must have the Runtime Management privilege to perform the POST operation.
     *
     * >**Note:** The `createdBy` is a system-generated or read-only field. It cannot be passed in a CREATE request.
     * @param requestBody
     * @returns Atom Successful request and response.
     * @throws ApiError
     */
    public createAtom(
        requestBody?: Atom,
    ): CancelablePromise<Atom> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Atom',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves an instance of a Runtime object
     * Retrieves the properties of the Runtime, Runtime cluster, or Runtime cloud having the specified ID.
     *
     * For Runtime clusters and Runtime clouds that are part of a multi-node runtime, the GET operation returns values for the following additional variables:
     *
     * - *nodeId*
     * - *hostName*
     * - *status*
     * - *clusterProblem*
     *
     * For more information on these variables, see the topic [Cluster Status panel](https://help.boomi.com/docs/Atomsphere/Integration/Integration%20management/r-atm-Cluster_Status_panel_fbdb3645-00e2-4c3c-bba8-bf5fdb0f90f6).
     * @param id A unique ID for the Runtime, Runtime cluster, or Runtime cloud.
     * @returns Atom Successful request and response.
     * @throws ApiError
     */
    public getAtom(
        id: string,
    ): CancelablePromise<Atom> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Atom/{id}',
            path: {
                'id': id,
            },
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Modifies or updates a Runtime object
     * Updates the Runtime object having the specified ID. You can only update the name, purgeHistoryDays, purgeImmediate, forceRestartTime. You must have the Runtime Management privilege to perform the UPDATE operation. If you have the Runtime Management Read Access privilege, you cannot update an Runtime.
     *
     * >**Note:** There might be a delay before you see the changes in the Runtime Information panel.
     * @param id A unique ID for the Runtime, Runtime cluster, or Runtime cloud.
     * @param requestBody
     * @returns Atom Successful request and response.
     * @throws ApiError
     */
    public updateAtom(
        id: string,
        requestBody?: Atom,
    ): CancelablePromise<Atom> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Atom/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Deletes a Runtime object
     * Deletes the Runtime object with the specified ID. You must have the Runtime Management privilege to perform the DELETE operation. If you have the Runtime Management Read Access privilege, you cannot delete a Runtime.
     * @param id A unique ID for the Runtime, Runtime cluster, or Runtime cloud.
     * @returns any Successful request and response.
     * @throws ApiError
     */
    public deleteAtom(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/Atom/{id}',
            path: {
                'id': id,
            },
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves multiple Runtime objects by identifier
     * To learn more about `bulk`, refer to [Bulk GET operations](#section/Introduction/Bulk-GET-operations).
     * @param requestBody
     * @returns AtomBulkResponse Successful request and response.
     * @throws ApiError
     */
    public bulkAtom(
        requestBody?: AtomBulkRequest,
    ): CancelablePromise<AtomBulkResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Atom/bulk',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Queries for a Runtime object(s)
     * Use either `BROKER` or `GATEWAY` with either the CONTAINS or NOT_CONTAINS operator to filter by API Gateways and Authentication Brokers that you own.
     *
     * For general information about the structure of QUERY filters, their sample payloads, and how to handle the paged results, refer to [Query filters](#section/Introduction/Query-filters) and [Query paging](#section/Introduction/Query-paging).
     * @param requestBody  Possible properties include: name, id, hostname, status, type, capabilities
     * @returns AtomQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryAtom(
        requestBody?: AtomQueryConfig,
    ): CancelablePromise<AtomQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Atom/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves additional results for a Runtime query
     * To learn about using `queryMore`, refer to [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns AtomQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMoreAtom(
        requestBody: string,
    ): CancelablePromise<AtomQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Atom/queryMore',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves an AtomCounters object by identifier
     * For a response, use the token from the initial GET response in a new request.
     * @param token Takes in the token from a previous call to return a result.
     * @returns AtomCountersAsyncResponse Successful request and response.
     * @throws ApiError
     */
    public asyncTokenAtomCounters(
        token: string,
    ): CancelablePromise<AtomCountersAsyncResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/async/AtomCounters/response/{token}',
            path: {
                'token': token,
            },
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves an AtomCounters object by identifier
     * The GET operation returns the current state of the counter names and values for the specified Runtime. The initial GET operation returns a token for the specified Runtime.
     * `accountId` is the Platform account that you are authenticating with and `id` is the Runtime ID for the counters you are attempting to GET.
     * @param id
     * @returns AsyncOperationTokenResult Successful request and response.
     * @throws ApiError
     */
    public asyncGetAtomCounters(
        id: string,
    ): CancelablePromise<AsyncOperationTokenResult> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/async/AtomCounters/{id}',
            path: {
                'id': id,
            },
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves a PersistedProcessProperties object by identifier
     * For a response, use the token from the response in a new request.
     * @param token Takes in the token from a previous call to return a result.
     * @returns PersistedProcessPropertiesAsyncResponse Successful request and response.
     * @throws ApiError
     */
    public asyncTokenPersistedProcessProperties(
        token: string,
    ): CancelablePromise<PersistedProcessPropertiesAsyncResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/async/PersistedProcessProperties/response/{token}',
            path: {
                'token': token,
            },
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves a PersistedProcessProperties object by identifier
     * The GET operation returns the current state of the Persisted Process properties names and values for the specified Runtime.
     * The initial GET operation returns a token for the specified Runtime.
     * @param id
     * @returns AsyncOperationTokenResult Successful request and response.
     * @throws ApiError
     */
    public asyncGetPersistedProcessProperties(
        id: string,
    ): CancelablePromise<AsyncOperationTokenResult> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/async/PersistedProcessProperties/{id}',
            path: {
                'id': id,
            },
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
