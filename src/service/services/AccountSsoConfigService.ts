/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountSSOConfig } from '../models/AccountSSOConfig';
import type { AccountSSOConfigBulkRequest } from '../models/AccountSSOConfigBulkRequest';
import type { AccountSSOConfigBulkResponse } from '../models/AccountSSOConfigBulkResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AccountSsoConfigService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Retrieves an instance of an AccountSSOConfig object
     * Returns the Account Single Sign-on Configuration for the supplied account ID.
     * @param id
     * @returns AccountSSOConfig Successful request and response.
     * @throws ApiError
     */
    public getAccountSsoConfig(
        id: string,
    ): CancelablePromise<AccountSSOConfig> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/AccountSSOConfig/{id}',
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
     * Modifies or updates an AccountSSOConfig object
     * Updates the Account Single Sign-on Configuration for the supplied account ID.
     * @param id
     * @param requestBody
     * @returns AccountSSOConfig Successful request and response.
     * @throws ApiError
     */
    public updateAccountSsoConfig(
        id: string,
        requestBody?: AccountSSOConfig,
    ): CancelablePromise<AccountSSOConfig> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/AccountSSOConfig/{id}',
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
     * Deletes an AccountSSOConfig object
     * Deletes the Account Single Sign-on Configuration for the supplied account ID.
     * @param id
     * @returns any Successful request and response.
     * @throws ApiError
     */
    public deleteAccountSsoConfig(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/AccountSSOConfig/{id}',
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
     * Retrieves multiple AccountSSOConfig objects by identifier
     * To learn more about `bulk`, refer to [Bulk GET operations](#section/Introduction/Bulk-GET-operations).
     * @param requestBody
     * @returns AccountSSOConfigBulkResponse Successful request and response.
     * @throws ApiError
     */
    public bulkAccountSsoConfig(
        requestBody?: AccountSSOConfigBulkRequest,
    ): CancelablePromise<AccountSSOConfigBulkResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/AccountSSOConfig/bulk',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
