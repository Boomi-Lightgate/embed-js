/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SharedWebServer } from '../models/SharedWebServer';
import type { SharedWebServerBulkRequest } from '../models/SharedWebServerBulkRequest';
import type { SharedWebServerBulkResponse } from '../models/SharedWebServerBulkResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SharedWebServerService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Retrieves an instance of a SharedWebServer object
     * Retrieves the details of a Shared Web Server configuration for this atom/cloud ID by its unique ID. The response can be in either XML or JSON format based on your request.
     * @param id
     * @returns SharedWebServer Successful request and response.
     * @throws ApiError
     */
    public getSharedWebServer(
        id: string,
    ): CancelablePromise<SharedWebServer> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/SharedWebServer/{id}',
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
     * Modifies or updates a SharedWebServer object
     * Updates a Shared Web Server object based on the supplied Runtime ID.
     * @param id
     * @param requestBody
     * @returns SharedWebServer Successful request and response.
     * @throws ApiError
     */
    public updateSharedWebServer(
        id: string,
        requestBody?: SharedWebServer,
    ): CancelablePromise<SharedWebServer> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/SharedWebServer/{id}',
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
     * Retrieves multiple SharedWebServer objects by identifier
     * To learn more about `bulk`, refer to [Bulk GET operations](#section/Introduction/Bulk-GET-operations).
     * @param requestBody
     * @returns SharedWebServerBulkResponse Successful request and response.
     * @throws ApiError
     */
    public bulkSharedWebServer(
        requestBody?: SharedWebServerBulkRequest,
    ): CancelablePromise<SharedWebServerBulkResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/SharedWebServer/bulk',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
