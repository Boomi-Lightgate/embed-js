/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SharedCommunicationChannelComponent } from '../models/SharedCommunicationChannelComponent';
import type { SharedCommunicationChannelComponentBulkRequest } from '../models/SharedCommunicationChannelComponentBulkRequest';
import type { SharedCommunicationChannelComponentBulkResponse } from '../models/SharedCommunicationChannelComponentBulkResponse';
import type { SharedCommunicationChannelComponentQueryConfig } from '../models/SharedCommunicationChannelComponentQueryConfig';
import type { SharedCommunicationChannelComponentQueryResponse } from '../models/SharedCommunicationChannelComponentQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SharedCommunicationChannelComponentService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates a SharedCommunicationChannelComponent object
     * The sample request creates a Shared Communication Component named `Disk Comms Channel`.
     * @param requestBody
     * @returns SharedCommunicationChannelComponent Successful request and response.
     * @throws ApiError
     */
    public createSharedCommunicationChannelComponent(
        requestBody?: SharedCommunicationChannelComponent,
    ): CancelablePromise<SharedCommunicationChannelComponent> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/SharedCommunicationChannelComponent',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves an instance of a SharedCommunicationChannelComponent object
     * Send an HTTP GET request where `{accountId}` is the ID of the authenticating account for the request and `{componentId}` is the ID of the component being retrieved.
     * @param id ID of the component being retrieved.
     * @returns SharedCommunicationChannelComponent Successful request and response.
     * @throws ApiError
     */
    public getSharedCommunicationChannelComponent(
        id: string,
    ): CancelablePromise<SharedCommunicationChannelComponent> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/SharedCommunicationChannelComponent/{id}',
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
     * Modifies or updates a SharedCommunicationChannelComponent object
     * The sample request updates the component named `Disk Comms Channel`.
     * @param id ID of the component that needs updating.
     * @param requestBody
     * @returns SharedCommunicationChannelComponent Successful request and response.
     * @throws ApiError
     */
    public updateSharedCommunicationChannelComponent(
        id: string,
        requestBody?: SharedCommunicationChannelComponent,
    ): CancelablePromise<SharedCommunicationChannelComponent> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/SharedCommunicationChannelComponent/{id}',
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
     * Deletes a SharedCommunicationChannelComponent object
     * If the Shared Communication Channel component is deleted successfully, the response is `true`.
     * @param id ID of the component that you want to delete.
     * @returns any Successful request and response.
     * @throws ApiError
     */
    public deleteSharedCommunicationChannelComponent(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/SharedCommunicationChannelComponent/{id}',
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
     * Retrieves multiple SharedCommunicationChannelComponent objects by identifier
     * To learn more about `bulk`, refer to [Bulk GET operations](#section/Introduction/Bulk-GET-operations).
     * @param requestBody
     * @returns SharedCommunicationChannelComponentBulkResponse Successful request and response.
     * @throws ApiError
     */
    public bulkSharedCommunicationChannelComponent(
        requestBody?: SharedCommunicationChannelComponentBulkRequest,
    ): CancelablePromise<SharedCommunicationChannelComponentBulkResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/SharedCommunicationChannelComponent/bulk',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Queries for a SharedCommunicationChannelComponent object(s).
     * For general information about the structure of QUERY filters, their sample payloads, and how to handle the paged results, refer to [Query filters](#section/Introduction/Query-filters) and [Query paging](#section/Introduction/Query-paging).
     *
     * The sample request query returns the Shared Communication Channel components using the AS2 standard for the authenticating account.
     *
     * >**Note:** The name field in a QUERY filter represents the object's `componentName` field.
     * @param requestBody  Possible properties include: name, communicationType
     * @returns SharedCommunicationChannelComponentQueryResponse Successful request and response.
     * @throws ApiError
     */
    public querySharedCommunicationChannelComponent(
        requestBody?: SharedCommunicationChannelComponentQueryConfig,
    ): CancelablePromise<SharedCommunicationChannelComponentQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/SharedCommunicationChannelComponent/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves additional results for a SharedCommunicationChannelComponent query.
     * To learn about using `queryMore`, refer to [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns SharedCommunicationChannelComponentQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMoreSharedCommunicationChannelComponent(
        requestBody: string,
    ): CancelablePromise<SharedCommunicationChannelComponentQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/SharedCommunicationChannelComponent/queryMore',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
