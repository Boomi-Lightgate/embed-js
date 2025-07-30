/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountCloudAttachmentProperties } from '../models/AccountCloudAttachmentProperties';
import type { AccountCloudAttachmentPropertiesAsyncResponse } from '../models/AccountCloudAttachmentPropertiesAsyncResponse';
import type { AsyncOperationTokenResult } from '../models/AsyncOperationTokenResult';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AccountCloudAttachmentPropertiesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Modifies or updates an AccountCloudAttachmentProperties object
     * Modifies one or more Account Cloud attachment properties.
     *
     * - To update property values, include all property names that you want to modify including their new values in the request body you do not need to provide the full list of properties in the request. This action is equivalent to editing property values on the [Attachment quotas tab](https://help.boomi.com/docs/Atomsphere/Integration/Integration%20management/r-atm-Attachment_Quotas_tab_4fbc3fff-7aaf-4bbd-a2dc-25d0edb5189c) (Manage > Cloud Management) in the user interface.
     *
     * - To ensure a successful request, you must provide valid property names and their accepted values in the request body. Otherwise, it returns an error.
     *
     * - The response returns a status code of 200 indicating a successful request. To verify updates made to a property, you can make a new GET request or view the Cloud attachment quotas tab (Manage > Cloud Management) in the user interface.
     *
     * - To modify properties, you must be the owner of the private Runtime cloud, and both the Runtime cloud and its attachments must be online.
     * @param id
     * @param requestBody
     * @returns AccountCloudAttachmentProperties Successful request and response.
     * @throws ApiError
     */
    public updateAccountCloudAttachmentProperties(
        id: string,
        requestBody?: AccountCloudAttachmentProperties,
    ): CancelablePromise<AccountCloudAttachmentProperties> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/AccountCloudAttachmentProperties/{id}',
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
     * Retrieves an AccountCloudAttachmentProperties object by identifier
     * Use the GET operation to return and view a full list of Account Cloud attachment properties and their current values. This action is equivalent to viewing the [Attachment quotas](https://help.boomi.com/docs/Atomsphere/Integration/Integration%20management/r-atm-Attachment_Quotas_tab_4fbc3fff-7aaf-4bbd-a2dc-25d0edb5189c) tab (Manage > Cloud Management) in the user interface.
     * >**Note:** The Cloud and attachments to which you are calling must be online. Cloud owners and users that own the Cloud attachments can use this operation.
     * @param id
     * @returns AsyncOperationTokenResult Successful request and response.
     * @throws ApiError
     */
    public asyncGetAccountCloudAttachmentProperties(
        id: string,
    ): CancelablePromise<AsyncOperationTokenResult> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/async/AccountCloudAttachmentProperties/{id}',
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
     * Retrieves an AccountCloudAttachmentProperties object by token
     * Send a second GET request with the token returned in the first GET request. The object returns a list of existing property names and values for the given account and Cloud.
     * >**Note:** The Cloud and attachments to which you are calling must be online. Cloud owners and users that own the Cloud attachments can use this operation.
     * @param token Takes in the token from a previous call to return a result.
     * @returns AccountCloudAttachmentPropertiesAsyncResponse Successful request and response.
     * @throws ApiError
     */
    public asyncTokenAccountCloudAttachmentProperties(
        token: string,
    ): CancelablePromise<AccountCloudAttachmentPropertiesAsyncResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/async/AccountCloudAttachmentProperties/response/{token}',
            path: {
                'token': token,
            },
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
