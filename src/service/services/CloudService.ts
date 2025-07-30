/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Cloud } from '../models/Cloud';
import type { CloudBulkRequest } from '../models/CloudBulkRequest';
import type { CloudBulkResponse } from '../models/CloudBulkResponse';
import type { CloudQueryConfig } from '../models/CloudQueryConfig';
import type { CloudQueryResponse } from '../models/CloudQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CloudService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Retrieves an instance of a Cloud object
     * Retrieves the properties of the Runtime cloud having the specified ID.
     * @param id A unique ID assigned by the system to the Runtime cloud.
     * @returns Cloud Successful request and response.
     * @throws ApiError
     */
    public getCloud(
        id: string,
    ): CancelablePromise<Cloud> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Cloud/{id}',
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
     * Retrieves multiple Cloud objects by identifier
     * To learn more about `bulk`, refer to [Bulk GET operations](#section/Introduction/Bulk-GET-operations).
     * @param requestBody
     * @returns CloudBulkResponse Successful request and response.
     * @throws ApiError
     */
    public bulkCloud(
        requestBody?: CloudBulkRequest,
    ): CancelablePromise<CloudBulkResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Cloud/bulk',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Queries for a Cloud object(s)
     * For general information about the structure of QUERY filters, their sample payloads, and how to handle the paged results, refer to [Query filters](#section/Introduction/Query-filters) and [Query paging](#section/Introduction/Query-paging).
     * @param requestBody  Possible properties include: name, id
     * @returns CloudQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryCloud(
        requestBody?: CloudQueryConfig,
    ): CancelablePromise<CloudQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Cloud/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves additional results for a Cloud query
     * To learn about using `queryMore`, refer to [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns CloudQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMoreCloud(
        requestBody: string,
    ): CancelablePromise<CloudQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Cloud/queryMore',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
