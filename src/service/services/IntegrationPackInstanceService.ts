/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IntegrationPackInstance } from '../models/IntegrationPackInstance';
import type { IntegrationPackInstanceBulkRequest } from '../models/IntegrationPackInstanceBulkRequest';
import type { IntegrationPackInstanceBulkResponse } from '../models/IntegrationPackInstanceBulkResponse';
import type { IntegrationPackInstanceQueryConfig } from '../models/IntegrationPackInstanceQueryConfig';
import type { IntegrationPackInstanceQueryResponse } from '../models/IntegrationPackInstanceQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class IntegrationPackInstanceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates an IntegrationPackInstance object
     * Installs an instance of the integration pack with a specific ID in the requesting account. You can set the integrationPackOverrideName field only if you configure the specified integration pack to allow multiple installs.
     * @param requestBody
     * @returns IntegrationPackInstance Successful request and response.
     * @throws ApiError
     */
    public createIntegrationPackInstance(
        requestBody?: IntegrationPackInstance,
    ): CancelablePromise<IntegrationPackInstance> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/IntegrationPackInstance',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves an instance of an IntegrationPackInstance object
     * Retrieves the properties of the integration pack instance having the specified ID.
     *
     * The ordinary GET operation retrieves the properties of the integration pack instance having the specified ID. The bulk GET operation retrieves the properties of the integration pack instances having the specified IDs, to a maximum of 100. You can obtain integration pack instance IDs from the QUERY operation.
     * @param id The integration pack instance ID.
     * @returns IntegrationPackInstance Successful request and response.
     * @throws ApiError
     */
    public getIntegrationPackInstance(
        id: string,
    ): CancelablePromise<IntegrationPackInstance> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/IntegrationPackInstance/{id}',
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
     * Deletes an IntegrationPackInstance object
     * Uninstalls the integration pack instance having a specified ID from the requesting account. You can obtain this ID from a QUERY operation.
     * @param id The integration pack instance ID.
     * @returns any Successful request and response.
     * @throws ApiError
     */
    public deleteIntegrationPackInstance(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/IntegrationPackInstance/{id}',
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
     * Retrieves multiple IntegrationPackInstance objects by identifier
     * To learn more about `bulk`, refer to [Bulk GET operations](#section/Introduction/Bulk-GET-operations).
     * @param requestBody
     * @returns IntegrationPackInstanceBulkResponse Successful request and response.
     * @throws ApiError
     */
    public bulkIntegrationPackInstance(
        requestBody?: IntegrationPackInstanceBulkRequest,
    ): CancelablePromise<IntegrationPackInstanceBulkResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/IntegrationPackInstance/bulk',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Queries for an IntegrationPackInstance object(s)
     * For general information about the structure of QUERY filters, their sample payloads, and how to handle the paged results, refer to [Query filters](#section/Introduction/Query-filters) and [Query paging](#section/Introduction/Query-paging).
     * @param requestBody  Possible properties include: integrationPackOverrideName, integrationPackName, integrationPackId
     * @returns IntegrationPackInstanceQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryIntegrationPackInstance(
        requestBody?: IntegrationPackInstanceQueryConfig,
    ): CancelablePromise<IntegrationPackInstanceQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/IntegrationPackInstance/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves additional results for an IntegrationPackInstance query
     * To learn about using `queryMore`, refer to [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns IntegrationPackInstanceQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMoreIntegrationPackInstance(
        requestBody: string,
    ): CancelablePromise<IntegrationPackInstanceQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/IntegrationPackInstance/queryMore',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
