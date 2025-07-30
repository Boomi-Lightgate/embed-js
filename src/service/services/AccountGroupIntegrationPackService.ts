/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountGroupIntegrationPack } from '../models/AccountGroupIntegrationPack';
import type { AccountGroupIntegrationPackBulkRequest } from '../models/AccountGroupIntegrationPackBulkRequest';
import type { AccountGroupIntegrationPackBulkResponse } from '../models/AccountGroupIntegrationPackBulkResponse';
import type { AccountGroupIntegrationPackQueryConfig } from '../models/AccountGroupIntegrationPackQueryConfig';
import type { AccountGroupIntegrationPackQueryResponse } from '../models/AccountGroupIntegrationPackQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AccountGroupIntegrationPackService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates an AccountGroupIntegrationPack object
     * Adds an integration pack to the requesting account group.
     * @param requestBody
     * @returns AccountGroupIntegrationPack Successful request and response.
     * @throws ApiError
     */
    public createAccountGroupIntegrationPack(
        requestBody?: AccountGroupIntegrationPack,
    ): CancelablePromise<AccountGroupIntegrationPack> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/AccountGroupIntegrationPack',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves an instance of an AccountGroupIntegrationPack object
     * The ordinary GET operation retrieves the properties of the AccountGroupIntegrationPack with the specified ID.
     * The bulk GET operation retrieves the properties of the AccountGroupIntegrationPack with the specified IDs to a maximum of 100.
     * You can obtain AccountGroupIntegrationPack IDs from the QUERY operation.
     * @param id A unique ID assigned by the system to the integration pack.
     * @returns AccountGroupIntegrationPack Successful request and response.
     * @throws ApiError
     */
    public getAccountGroupIntegrationPack(
        id: string,
    ): CancelablePromise<AccountGroupIntegrationPack> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/AccountGroupIntegrationPack/{id}',
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
     * Deletes an AccountGroupIntegrationPack object
     * Removes the integration pack with a specified ID from the requesting account group.
     * You can obtain this ID from a QUERY operation.
     * @param id A unique ID assigned by the system to the integration pack.
     * @returns any Successful request and response.
     * @throws ApiError
     */
    public deleteAccountGroupIntegrationPack(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/AccountGroupIntegrationPack/{id}',
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
     * Retrieves multiple AccountGroupIntegrationPack objects by identifier
     * The bulk GET operation returns multiple objects based on the supplied account IDs, to a maximum of 100. To learn more about `bulk`, refer to [Bulk GET operations](#section/Introduction/Bulk-GET-operations).
     * @param requestBody
     * @returns AccountGroupIntegrationPackBulkResponse Successful request and response.
     * @throws ApiError
     */
    public bulkAccountGroupIntegrationPack(
        requestBody?: AccountGroupIntegrationPackBulkRequest,
    ): CancelablePromise<AccountGroupIntegrationPackBulkResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/AccountGroupIntegrationPack/bulk',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Queries for an AccountGroupIntegrationPack object(s)
     * Retrieves all integration packs available to the requesting account group ID.
     *
     * For general information about the structure of QUERY filters and how to handle paged results, see the Query filters and Query paging topics.
     * @param requestBody
     * @returns AccountGroupIntegrationPackQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryAccountGroupIntegrationPack(
        requestBody?: AccountGroupIntegrationPackQueryConfig,
    ): CancelablePromise<AccountGroupIntegrationPackQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/AccountGroupIntegrationPack/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves additional results for an AccountGroupIntegrationPack query
     * To learn about using `queryMore`, refer to [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns AccountGroupIntegrationPackQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMoreAccountGroupIntegrationPack(
        requestBody: string,
    ): CancelablePromise<AccountGroupIntegrationPackQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/AccountGroupIntegrationPack/queryMore',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
