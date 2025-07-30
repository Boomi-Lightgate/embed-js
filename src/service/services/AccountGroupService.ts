/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountGroup } from '../models/AccountGroup';
import type { AccountGroupBulkRequest } from '../models/AccountGroupBulkRequest';
import type { AccountGroupBulkResponse } from '../models/AccountGroupBulkResponse';
import type { AccountGroupQueryConfig } from '../models/AccountGroupQueryConfig';
import type { AccountGroupQueryResponse } from '../models/AccountGroupQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AccountGroupService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates an AccountGroup object
     * Creates an account group based on the supplied name.
     * @param requestBody
     * @returns AccountGroup Successful request and response.
     * @throws ApiError
     */
    public createAccountGroup(
        requestBody?: AccountGroup,
    ): CancelablePromise<AccountGroup> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/AccountGroup',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves an instance of an AccountGroup object
     * Returns a single Account Group object based on the supplied account group ID.
     *
     * >**Note:**
     * Resources information is returned only for the Get operation, not the Query operation.
     * @param id The ID of the account group.
     * @returns AccountGroup Successful request and response.
     * @throws ApiError
     */
    public getAccountGroup(
        id: string,
    ): CancelablePromise<AccountGroup> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/AccountGroup/{id}',
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
     * Modifies or updates an AccountGroup object
     * Updates an account group based on the supplied account group ID.
     * @param id The ID of the account group.
     * @param requestBody
     * @returns AccountGroup Successful request and response.
     * @throws ApiError
     */
    public updateAccountGroup(
        id: string,
        requestBody?: AccountGroup,
    ): CancelablePromise<AccountGroup> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/AccountGroup/{id}',
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
     * Retrieves multiple AccountGroup objects by identifier
     * To learn more about `bulk`, refer to [Bulk GET operations](#section/Introduction/Bulk-GET-operations).
     * @param requestBody
     * @returns AccountGroupBulkResponse Successful request and response.
     * @throws ApiError
     */
    public bulkAccountGroup(
        requestBody?: AccountGroupBulkRequest,
    ): CancelablePromise<AccountGroupBulkResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/AccountGroup/bulk',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Queries for an AccountGroup object(s)
     * For general information about the structure of QUERY filters, their sample payloads, and how to handle the paged results, refer to [Query filters](#section/Introduction/Query-filters) and [Query paging](#section/Introduction/Query-paging).
     * @param requestBody  Possible properties include: id, accountId, name, defaultGroup, autoSubscribeAlertLevel
     * @returns AccountGroupQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryAccountGroup(
        requestBody?: AccountGroupQueryConfig,
    ): CancelablePromise<AccountGroupQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/AccountGroup/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves additional results for an AccountGroup query
     * To learn about using `queryMore`, refer to [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns AccountGroupQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMoreAccountGroup(
        requestBody: string,
    ): CancelablePromise<AccountGroupQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/AccountGroup/queryMore',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
