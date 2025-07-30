/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IntegrationPack } from '../models/IntegrationPack';
import type { IntegrationPackBulkRequest } from '../models/IntegrationPackBulkRequest';
import type { IntegrationPackBulkResponse } from '../models/IntegrationPackBulkResponse';
import type { IntegrationPackQueryConfig } from '../models/IntegrationPackQueryConfig';
import type { IntegrationPackQueryResponse } from '../models/IntegrationPackQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class IntegrationPackService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Retrieves an instance of an IntegrationPack object
     * Retrieves the properties of the integration pack with a specified ID. The ordinary GET operation retrieves the properties of the integration pack with a specified ID. The bulk GET operation retrieves the properties of the integration packs having the specified IDs, to a maximum of 100.
     * @param id A unique ID assigned by the system to the integration pack.
     * @returns IntegrationPack Successful request and response.
     * @throws ApiError
     */
    public getIntegrationPack(
        id: string,
    ): CancelablePromise<IntegrationPack> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/IntegrationPack/{id}',
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
     * Retrieves multiple IntegrationPack objects by identifier
     * To learn more about `bulk`, refer to [Bulk GET operations](#section/Introduction/Bulk-GET-operations).
     * @param requestBody
     * @returns IntegrationPackBulkResponse Successful request and response.
     * @throws ApiError
     */
    public bulkIntegrationPack(
        requestBody?: IntegrationPackBulkRequest,
    ): CancelablePromise<IntegrationPackBulkResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/IntegrationPack/bulk',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Queries for an IntegrationPack object(s)
     * For general information about the structure of QUERY filters, their sample payloads, and how to handle the paged results, refer to [Query filters](#section/Introduction/Query-filters) and [Query paging](#section/Introduction/Query-paging).
     * @param requestBody  Possible properties include: name, id, installationType
     * @returns IntegrationPackQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryIntegrationPack(
        requestBody?: IntegrationPackQueryConfig,
    ): CancelablePromise<IntegrationPackQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/IntegrationPack/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves additional results for an IntegrationPack query
     * To learn about using `queryMore`, refer to [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns IntegrationPackQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMoreIntegrationPack(
        requestBody: string,
    ): CancelablePromise<IntegrationPackQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/IntegrationPack/queryMore',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
