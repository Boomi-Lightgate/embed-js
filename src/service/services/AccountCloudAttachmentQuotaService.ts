/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountCloudAttachmentQuota } from '../models/AccountCloudAttachmentQuota';
import type { AccountCloudAttachmentQuotaBulkRequest } from '../models/AccountCloudAttachmentQuotaBulkRequest';
import type { AccountCloudAttachmentQuotaBulkResponse } from '../models/AccountCloudAttachmentQuotaBulkResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AccountCloudAttachmentQuotaService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates an AccountCloudAttachmentQuota object
     * - Use the CREATE operation to create a new Cloud quota and determine the maximum number of Runtime attachments that you can create on the account.
     * - You can use the CREATE or UPDATE operations interchangeably to edit a Cloud quota value. Both operations can act as an update after creating the quota.
     * - CREATE and UPDATE use the same REST endpoint, as seen in the next section of sample code REST calls. When calling the endpoint for an account that has a quota set, the endpoint acts as an update and modifies the existing value, as explained in the previous item. When calling the endpoint for an account that does not already have a quota set, the endpoint creates a new quota.
     * - You cannot set the Cloud quota less than the number of attachments that currently exist on the account, unless you are setting the value to -1 for unlimited. Attempting to do so returns an error.
     * - The CREATE operation returns an id value that you can use in a GET operation to retrieve the existing quota for a specific account's Cloud ID.
     * @param requestBody
     * @returns AccountCloudAttachmentQuota Successful request and response.
     * @throws ApiError
     */
    public createAccountCloudAttachmentQuota(
        requestBody?: AccountCloudAttachmentQuota,
    ): CancelablePromise<AccountCloudAttachmentQuota> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/AccountCloudAttachmentQuota',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves an instance of an AccountCloudAttachmentQuota object
     * Retrieves the Cloud quota value currently existing for a Cloud ID on a specific account. The GET operation requires an additional ID (id), and differs from the `cloudId` and `accountId`.
     * @param id A unique ID generated for a newly created or recently updated Cloud quota (using the Account Cloud Attachment quota object). You can use this ID to get a Cloud quota for an account's specific Cloud ID.
     * @returns AccountCloudAttachmentQuota Successful request and response.
     * @throws ApiError
     */
    public getAccountCloudAttachmentQuota(
        id: string,
    ): CancelablePromise<AccountCloudAttachmentQuota> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/AccountCloudAttachmentQuota/{id}',
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
     * Modifies or updates an AccountCloudAttachmentQuota object
     * Edit the number of Runtime attachments that you can create on the given account. Specify the IDs of both the account and the Runtime cloud that you want to update. You cannot set the Cloud quota less than the number of attachments that currently exist on the account, unless you are setting the value to -1 for unlimited. Attempting to do so returns an error.
     * @param id A unique ID generated for a newly created or recently updated Cloud quota (using the Account Cloud Attachment quota object). You can use this ID to get a Cloud quota for an account's specific Cloud ID.
     * @param requestBody
     * @returns AccountCloudAttachmentQuota Successful request and response.
     * @throws ApiError
     */
    public updateAccountCloudAttachmentQuota(
        id: string,
        requestBody?: AccountCloudAttachmentQuota,
    ): CancelablePromise<AccountCloudAttachmentQuota> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/AccountCloudAttachmentQuota/{id}',
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
     * Deletes an AccountCloudAttachmentQuota object
     * Deletes a Cloud quota for a given account.
     * @param id A unique ID generated for a newly created or recently updated Cloud quota (using the Account Cloud Attachment quota object). You can use this ID to get a Cloud quota for an account's specific Cloud ID.
     * @returns any Successful request and response.
     * @throws ApiError
     */
    public deleteAccountCloudAttachmentQuota(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/AccountCloudAttachmentQuota/{id}',
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
     * Retrieves multiple AccountCloudAttachmentQuota objects by identifier
     * To learn more about `bulk`, refer to [Bulk GET operations](#section/Introduction/Bulk-GET-operations).
     * @param requestBody
     * @returns AccountCloudAttachmentQuotaBulkResponse Successful request and response.
     * @throws ApiError
     */
    public bulkAccountCloudAttachmentQuota(
        requestBody?: AccountCloudAttachmentQuotaBulkRequest,
    ): CancelablePromise<AccountCloudAttachmentQuotaBulkResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/AccountCloudAttachmentQuota/bulk',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
