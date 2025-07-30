/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountGroupAccount } from '../models/AccountGroupAccount';
import type { AccountGroupAccountQueryConfig } from '../models/AccountGroupAccountQueryConfig';
import type { AccountGroupAccountQueryResponse } from '../models/AccountGroupAccountQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AccountGroupAccountService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates an AccountGroupAccount object
     * Adds an account to an account group.
     * @param requestBody
     * @returns AccountGroupAccount Successful request and response.
     * @throws ApiError
     */
    public createAccountGroupAccount(
        requestBody?: AccountGroupAccount,
    ): CancelablePromise<AccountGroupAccount> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/AccountGroupAccount',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Queries for an AccountGroupAccount object(s)
     * For general information about the structure of QUERY filters, their sample payloads, and how to handle the paged results, refer to [Query filters](#section/Introduction/Query-filters) and [Query paging](#section/Introduction/Query-paging).
     * @param requestBody  Possible properties include: accountGroupId, accountId
     * @returns AccountGroupAccountQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryAccountGroupAccount(
        requestBody?: AccountGroupAccountQueryConfig,
    ): CancelablePromise<AccountGroupAccountQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/AccountGroupAccount/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves additional results for an AccountGroupAccount query
     * To learn about using `queryMore`, refer to [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns AccountGroupAccountQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMoreAccountGroupAccount(
        requestBody: string,
    ): CancelablePromise<AccountGroupAccountQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/AccountGroupAccount/queryMore',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Deletes an AccountGroupAccount object
     * Removes an account from an account group.
     * @param id The object’s conceptual ID from which the account and account group IDs synthesizes.
     * @returns any Successful request and response.
     * @throws ApiError
     */
    public deleteAccountGroupAccount(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/AccountGroupAccount/{id}',
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
