/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PublisherIntegrationPack } from '../models/PublisherIntegrationPack';
import type { PublisherIntegrationPackBulkRequest } from '../models/PublisherIntegrationPackBulkRequest';
import type { PublisherIntegrationPackBulkResponse } from '../models/PublisherIntegrationPackBulkResponse';
import type { PublisherIntegrationPackQueryConfig } from '../models/PublisherIntegrationPackQueryConfig';
import type { PublisherIntegrationPackQueryResponse } from '../models/PublisherIntegrationPackQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PublisherIntegrationPackService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates a PublisherIntegrationPack object
     * Creates a single attachment or multiple attachment integration pack.
     * @param requestBody
     * @returns PublisherIntegrationPack Successful request and response.
     * @throws ApiError
     */
    public createPublisherIntegrationPack(
        requestBody?: PublisherIntegrationPack,
    ): CancelablePromise<PublisherIntegrationPack> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/PublisherIntegrationPack',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves an instance of a PublisherIntegrationPack object
     * Retrieves the details of the integration pack and packaged components.
     * The standard GET operation retrieves the properties of the integration pack with a specified ID.
     * The bulk GET operation retrieves the properties of the integration packs with the specified IDs to a maximum of 100.
     * @param id A unique ID assigned by the system to the integration pack.
     * @returns PublisherIntegrationPack Successful request and response.
     * @throws ApiError
     */
    public getPublisherIntegrationPack(
        id: string,
    ): CancelablePromise<PublisherIntegrationPack> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/PublisherIntegrationPack/{id}',
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
     * Modifies or updates a PublisherIntegrationPack object
     * The Update operation adds or removes the packaged components from the publisher integration pack.
     * It also updates the description field of single and multiple attachment integration packs and the name field only for a single attachment integration pack.
     *
     * >**Note:** When updating an integration pack, you must include all the packaged components associated with it in the request body.
     * If a packaged component is not included, it will be deleted upon updating an integration pack.
     * For example, include all packaged components while updating the integration pack name.
     * @param id
     * @param requestBody
     * @returns PublisherIntegrationPack Successful request and response.
     * @throws ApiError
     */
    public updatePublisherIntegrationPack(
        id: string,
        requestBody?: PublisherIntegrationPack,
    ): CancelablePromise<PublisherIntegrationPack> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/PublisherIntegrationPack/{id}',
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
     * Deletes a PublisherIntegrationPack object
     * Deletes the publisher integration pack having a specified ID from the requesting account.
     * The deleted integration pack is automatically uninstalled from all accounts where it was installed.
     * Any Runtimes or environments attached to the integration pack are also detached.
     * @param id A unique ID assigned by the system to the integration pack.
     * @returns any Successful request and response.
     * @throws ApiError
     */
    public deletePublisherIntegrationPack(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/PublisherIntegrationPack/{id}',
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
     * Retrieves multiple PublisherIntegrationPack objects by identifier
     * The bulk GET operation returns multiple objects based on the supplied account IDs, to a maximum of 100. To learn more about `bulk`, refer to [Bulk GET operations](#section/Introduction/Bulk-GET-operations).
     * @param requestBody
     * @returns PublisherIntegrationPackBulkResponse Successful request and response.
     * @throws ApiError
     */
    public bulkPublisherIntegrationPack(
        requestBody?: PublisherIntegrationPackBulkRequest,
    ): CancelablePromise<PublisherIntegrationPackBulkResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/PublisherIntegrationPack/bulk',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Queries for a PublisherIntegrationPack object(s)
     * For general information about the structure of QUERY filters, their sample payloads, and how to handle the paged results, refer to [Query filters](#section/Introduction/Query-filters) and [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns PublisherIntegrationPackQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryPublisherIntegrationPack(
        requestBody?: PublisherIntegrationPackQueryConfig,
    ): CancelablePromise<PublisherIntegrationPackQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/PublisherIntegrationPack/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves additional results for a PublisherIntegrationPack query
     * To learn about using `queryMore`, refer to [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns PublisherIntegrationPackQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMorePublisherIntegrationPack(
        requestBody: string,
    ): CancelablePromise<PublisherIntegrationPackQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/PublisherIntegrationPack/queryMore',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
