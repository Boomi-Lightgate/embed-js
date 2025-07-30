/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TradingPartnerProcessingGroup } from '../models/TradingPartnerProcessingGroup';
import type { TradingPartnerProcessingGroupBulkRequest } from '../models/TradingPartnerProcessingGroupBulkRequest';
import type { TradingPartnerProcessingGroupBulkResponse } from '../models/TradingPartnerProcessingGroupBulkResponse';
import type { TradingPartnerProcessingGroupQueryConfig } from '../models/TradingPartnerProcessingGroupQueryConfig';
import type { TradingPartnerProcessingGroupQueryResponse } from '../models/TradingPartnerProcessingGroupQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TradingPartnerProcessingGroupService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates a TradingPartnerProcessingGroup object
     * Send an HTTP POST request where `accountId` is the ID of the authenticating account for the request.
     * If you omit the folderName field, you must include the folderId field — and vice versa.
     * @param requestBody
     * @returns TradingPartnerProcessingGroup Successful request and response.
     * @throws ApiError
     */
    public createTradingPartnerProcessingGroup(
        requestBody?: TradingPartnerProcessingGroup,
    ): CancelablePromise<TradingPartnerProcessingGroup> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/TradingPartnerProcessingGroup',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves an instance of a TradingPartnerProcessingGroup object
     * The ordinary GET operation returns a single Trading Partner Processing Group object based on the supplied ID. The bulk GET operation returns multiple Trading Partner Processing Group objects based on the supplied IDs, to a maximum of 100.
     * A GET operation specifying the ID of a deleted processing group component retrieves the component. In the component, the deleted field’s value is true.
     * @param id
     * @returns TradingPartnerProcessingGroup Successful request and response.
     * @throws ApiError
     */
    public getTradingPartnerProcessingGroup(
        id: string,
    ): CancelablePromise<TradingPartnerProcessingGroup> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/TradingPartnerProcessingGroup/{id}',
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
     * Modifies or updates a TradingPartnerProcessingGroup object
     * An UPDATE operation specifying the ID of a deleted processing group component restores the component to a non-deleted state, assuming the request is otherwise valid. It also overwrites the entire processing group component.
     * @param id
     * @param requestBody
     * @returns TradingPartnerProcessingGroup Successful request and response.
     * @throws ApiError
     */
    public updateTradingPartnerProcessingGroup(
        id: string,
        requestBody?: TradingPartnerProcessingGroup,
    ): CancelablePromise<TradingPartnerProcessingGroup> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/TradingPartnerProcessingGroup/{id}',
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
     * Deletes a TradingPartnerProcessingGroup object
     * A DELETE operation specifying the ID of a deleted processing group component returns a false response. If you deleted the component successfully, the response is "true".
     * @param id
     * @returns any Successful request and response.
     * @throws ApiError
     */
    public deleteTradingPartnerProcessingGroup(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/TradingPartnerProcessingGroup/{id}',
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
     * Retrieves multiple TradingPartnerProcessingGroup objects by identifier
     * To learn more about `bulk`, refer to [Bulk GET operations](#section/Introduction/Bulk-GET-operations).
     * @param requestBody
     * @returns TradingPartnerProcessingGroupBulkResponse Successful request and response.
     * @throws ApiError
     */
    public bulkTradingPartnerProcessingGroup(
        requestBody?: TradingPartnerProcessingGroupBulkRequest,
    ): CancelablePromise<TradingPartnerProcessingGroupBulkResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/TradingPartnerProcessingGroup/bulk',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Queries for a TradingPartnerProcessingGroup object(s)
     * The QUERY operation returns all of the authenticating account’s processing group components. The operation does not return full component representations; it returns, for each result, the component’s name, ID, and folder ID.
     *
     * For general information about the structure of QUERY filters, their sample payloads, and how to handle the paged results, refer to [Query filters](#section/Introduction/Query-filters) and [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns TradingPartnerProcessingGroupQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryTradingPartnerProcessingGroup(
        requestBody?: TradingPartnerProcessingGroupQueryConfig,
    ): CancelablePromise<TradingPartnerProcessingGroupQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/TradingPartnerProcessingGroup/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves additional results for a TradingPartnerProcessingGroup query
     * To learn about using `queryMore`, refer to [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns TradingPartnerProcessingGroupQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMoreTradingPartnerProcessingGroup(
        requestBody: string,
    ): CancelablePromise<TradingPartnerProcessingGroupQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/TradingPartnerProcessingGroup/queryMore',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
