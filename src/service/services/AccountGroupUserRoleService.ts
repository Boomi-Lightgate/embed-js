/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountGroupUserRole } from '../models/AccountGroupUserRole';
import type { AccountGroupUserRoleQueryConfig } from '../models/AccountGroupUserRoleQueryConfig';
import type { AccountGroupUserRoleQueryResponse } from '../models/AccountGroupUserRoleQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AccountGroupUserRoleService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates an AccountGroupUserRole object
     * Adds a user to an account group.
     * @param requestBody
     * @returns AccountGroupUserRole Successful request and response.
     * @throws ApiError
     */
    public createAccountGroupUserRole(
        requestBody?: AccountGroupUserRole,
    ): CancelablePromise<AccountGroupUserRole> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/AccountGroupUserRole',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Queries for an AccountGroupUserRole object(s)
     * For general information about the structure of QUERY filters, their sample payloads, and how to handle the paged results, refer to [Query filters](#section/Introduction/Query-filters) and [Query paging](#section/Introduction/Query-paging).
     * @param requestBody  Possible properties include: accountGroupId, userId, roleId
     * @returns AccountGroupUserRoleQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryAccountGroupUserRole(
        requestBody?: AccountGroupUserRoleQueryConfig,
    ): CancelablePromise<AccountGroupUserRoleQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/AccountGroupUserRole/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves additional results for an AccountGroupUserRole query
     * To learn about using `queryMore`, refer to [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns AccountGroupUserRoleQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMoreAccountGroupUserRole(
        requestBody: string,
    ): CancelablePromise<AccountGroupUserRoleQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/AccountGroupUserRole/queryMore',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Deletes an AccountGroupUserRole object
     * Removes the user from an account group specified by the conceptual Account Group User Role object ID.
     * @param id
     * @returns any Successful request and response.
     * @throws ApiError
     */
    public deleteAccountGroupUserRole(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/AccountGroupUserRole/{id}',
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
