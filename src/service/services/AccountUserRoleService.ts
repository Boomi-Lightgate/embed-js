/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountUserRole } from '../models/AccountUserRole';
import type { AccountUserRoleQueryConfig } from '../models/AccountUserRoleQueryConfig';
import type { AccountUserRoleQueryResponse } from '../models/AccountUserRoleQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AccountUserRoleService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates an AccountUserRole object
     * Adds a user to an account. If you provide a user ID (email address) that does not exist, the system creates the user and adds them to the account.
     *
     * When creating a new user, the API request does not require the firstName and lastName fields. If you do not provide those fields, it assigns the default firstName or lastName values automatically. If you include the firstName and lastName fields in a CREATE request for a user name that exists, the request ignores those fields.
     * @param requestBody
     * @returns AccountUserRole Successful request and response.
     * @throws ApiError
     */
    public createAccountUserRole(
        requestBody?: AccountUserRole,
    ): CancelablePromise<AccountUserRole> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/AccountUserRole',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Queries for an AccountUserRole object(s)
     * For general information about the structure of QUERY filters, their sample payloads, and how to handle the paged results, refer to [Query filters](#section/Introduction/Query-filters) and [Query paging](#section/Introduction/Query-paging).
     * @param requestBody  Possible properties include: accountId, userId, roleId
     * @returns AccountUserRoleQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryAccountUserRole(
        requestBody?: AccountUserRoleQueryConfig,
    ): CancelablePromise<AccountUserRoleQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/AccountUserRole/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves additional results for an AccountUserRole query
     * To learn about using `queryMore`, refer to [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns AccountUserRoleQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMoreAccountUserRole(
        requestBody: string,
    ): CancelablePromise<AccountUserRoleQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/AccountUserRole/queryMore',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Deletes an AccountUserRole object
     * Removes the specified user by a specified conceptual Account User Role object ID from an account.
     * @param id
     * @returns any Successful request and response.
     * @throws ApiError
     */
    public deleteAccountUserRole(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/AccountUserRole/{id}',
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
