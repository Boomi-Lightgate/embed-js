/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountUserFederation } from '../models/AccountUserFederation';
import type { AccountUserFederationQueryConfig } from '../models/AccountUserFederationQueryConfig';
import type { AccountUserFederationQueryResponse } from '../models/AccountUserFederationQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AccountUserFederationService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates an AccountUserFederation object
     * Enables single sign-on for a specific user under a specific account using a specific federation ID. The user is not visible in the Setup page unless you assign one or more roles to that user.
     * @param requestBody
     * @returns AccountUserFederation Successful request and response.
     * @throws ApiError
     */
    public createAccountUserFederation(
        requestBody?: AccountUserFederation,
    ): CancelablePromise<AccountUserFederation> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/AccountUserFederation',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Queries for an AccountUserFederation object(s)
     * For general information about the structure of QUERY filters, their sample payloads, and how to handle the paged results, refer to [Query filters](#section/Introduction/Query-filters) and [Query paging](#section/Introduction/Query-paging).
     * @param requestBody  Possible properties include: accountId, userId, federationId
     * @returns AccountUserFederationQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryAccountUserFederation(
        requestBody?: AccountUserFederationQueryConfig,
    ): CancelablePromise<AccountUserFederationQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/AccountUserFederation/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves additional results for an AccountUserFederation query
     * To learn about using `queryMore`, refer to [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns AccountUserFederationQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMoreAccountUserFederation(
        requestBody: string,
    ): CancelablePromise<AccountUserFederationQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/AccountUserFederation/queryMore',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Modifies or updates an AccountUserFederation object
     * Updates the federation ID of a specific user in a specific account.
     * @param id
     * @param requestBody
     * @returns AccountUserFederation Successful request and response.
     * @throws ApiError
     */
    public updateAccountUserFederation(
        id: string,
        requestBody?: AccountUserFederation,
    ): CancelablePromise<AccountUserFederation> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/AccountUserFederation/{id}',
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
     * Deletes an AccountUserFederation object
     * Disables single sign-on for the user specified by the conceptual Account User Federation object ID.
     * @param id
     * @returns any Successful request and response.
     * @throws ApiError
     */
    public deleteAccountUserFederation(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/AccountUserFederation/{id}',
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
