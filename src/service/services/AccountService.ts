/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Account } from '../models/Account';
import type { AccountBulkRequest } from '../models/AccountBulkRequest';
import type { AccountBulkResponse } from '../models/AccountBulkResponse';
import type { AccountQueryConfig } from '../models/AccountQueryConfig';
import type { AccountQueryResponse } from '../models/AccountQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AccountService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Retrieves an instance of an Account object
     * Returns a single Account object based on the supplied account ID.
     * @param id
     * @returns Account Successful request and response.
     * @throws ApiError
     */
    public getAccount(
        id: string,
    ): CancelablePromise<Account> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Account/{id}',
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
     * Retrieves multiple Account objects by identifier
     * The bulk GET operation returns multiple Account objects based on the supplied account IDs, to a maximum of 100. To learn more about `bulk`, refer to [Bulk GET operations](#section/Introduction/Bulk-GET-operations).
     * @param requestBody
     * @returns AccountBulkResponse Successful request and response.
     * @throws ApiError
     */
    public bulkAccount(
        requestBody?: AccountBulkRequest,
    ): CancelablePromise<AccountBulkResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Account/bulk',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Queries for an Account object(s)
     * For general information about the structure of QUERY filters, their sample payloads, and how to handle the paged results, refer to [Query filters](#section/Introduction/Query-filters) and [Query paging](#section/Introduction/Query-paging).
     * @param requestBody  Possible properties include: ACCOUNTID, DATECREATED, EXPIRATIONDATE, NAME, STATUS, WIDGETACCOUNT, OVERDEPLOYED
     * @returns AccountQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryAccount(
        requestBody?: AccountQueryConfig,
    ): CancelablePromise<AccountQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Account/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves additional results for an Account query
     * To learn about using `queryMore`, refer to [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns AccountQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMoreAccount(
        requestBody: string,
    ): CancelablePromise<AccountQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Account/queryMore',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
