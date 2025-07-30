/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TradingPartnerComponent } from '../models/TradingPartnerComponent';
import type { TradingPartnerComponentBulkRequest } from '../models/TradingPartnerComponentBulkRequest';
import type { TradingPartnerComponentBulkResponse } from '../models/TradingPartnerComponentBulkResponse';
import type { TradingPartnerComponentQueryConfig } from '../models/TradingPartnerComponentQueryConfig';
import type { TradingPartnerComponentQueryResponse } from '../models/TradingPartnerComponentQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TradingPartnerComponentService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates a TradingPartnerComponent object
     * - This operation creates a Trading Partner Component object with a specified component name.
     * - The request body requires the standard, classification, and componentName fields. If you omit the folderName field, you must use the folderId field — and vice versa. If you omit the componentID field and the IDs of any certificates you want to create, their values are assigned when you create the components. If you leave off the folderID field when creating a component, it assigns a value.
     * - Includes the organizationId field only if the trading partner is to reference an Organization component, in which case the field value is the ID of the Organization component. A request specifying the organizationId field populates the ContactInformation fields with the data from the referenced Organization component.
     * @param requestBody
     * @returns TradingPartnerComponent Successful request and response.
     * @throws ApiError
     */
    public createTradingPartnerComponent(
        requestBody?: TradingPartnerComponent,
    ): CancelablePromise<TradingPartnerComponent> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/TradingPartnerComponent',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves an instance of a TradingPartnerComponent object
     * The ordinary GET operation returns a single Trading Partner Component object based on the supplied ID. A GET operation specifying the ID of a deleted Trading Partner component retrieves the component. In the component, the deleted field’s value is true.
     * @param id
     * @returns TradingPartnerComponent Successful request and response.
     * @throws ApiError
     */
    public getTradingPartnerComponent(
        id: string,
    ): CancelablePromise<TradingPartnerComponent> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/TradingPartnerComponent/{id}',
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
     * Modifies or updates a TradingPartnerComponent object
     * This operation overwrites the Trading Partner Component object with the specified component ID except as described:
     * - If the fields are empty, an UPDATE operation specifying the organizationId field populates the ContactInformation fields with the data from the referenced Organization component. However, if those fields have values, they are not overwritten.
     * An UPDATE operation specifying the ID of a deleted Trading Partner component restores the component to a non-deleted state, assuming the request is otherwise valid.
     * @param id
     * @param requestBody
     * @returns TradingPartnerComponent Successful request and response.
     * @throws ApiError
     */
    public updateTradingPartnerComponent(
        id: string,
        requestBody?: TradingPartnerComponent,
    ): CancelablePromise<TradingPartnerComponent> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/TradingPartnerComponent/{id}',
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
     * Deletes a TradingPartnerComponent object
     * The DELETE operation deletes the Trading Partner Component object with a specific component ID.
     * A DELETE operation specifying the ID of a deleted Trading Partner component returns a false response.
     * @param id
     * @returns any Successful request and response.
     * @throws ApiError
     */
    public deleteTradingPartnerComponent(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/TradingPartnerComponent/{id}',
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
     * Retrieves multiple TradingPartnerComponent objects by identifier
     * The bulk GET operation returns multiple Trading Partner Component objects based on the supplied IDs, to a maximum of 100.
     * @param requestBody
     * @returns TradingPartnerComponentBulkResponse Successful request and response.
     * @throws ApiError
     */
    public bulkTradingPartnerComponent(
        requestBody?: TradingPartnerComponentBulkRequest,
    ): CancelablePromise<TradingPartnerComponentBulkResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/TradingPartnerComponent/bulk',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Queries for a TradingPartnerComponent object(s)
     * The QUERY operation returns each Trading Partner component that meets the specified filtering criteria.
     *
     * - The name field in a QUERY filter represents the object’s componentName field.
     * - Only the LIKE operator is allowed with a name filter. Likewise, you can only use the EQUALS operator with a classification, standard, identifier filter, or a communication method filter (as2, disk, ftp, http, mllp, sftp). Filtering on a communication method field requests Trading Partner components by defining the communication method.
     * - If the QUERY request includes multiple filters, you can connect the filters with a logical AND operator. The QUERY request does not support the logical OR operator.
     * - The QUERY results omit the folderName field.
     *
     * For general information about the structure of QUERY filters, their sample payloads, and how to handle the paged results, refer to [Query filters](#section/Introduction/Query-filters) and [Query paging](#section/Introduction/Query-paging).
     * @param requestBody  Possible properties include: name, classification, standard, identifier, as2, disk, ftp, mllp, sftp, http, oftp
     * @returns TradingPartnerComponentQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryTradingPartnerComponent(
        requestBody?: TradingPartnerComponentQueryConfig,
    ): CancelablePromise<TradingPartnerComponentQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/TradingPartnerComponent/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves additional results for a TradingPartnerComponent query
     * To learn about using `queryMore`, refer to [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns TradingPartnerComponentQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMoreTradingPartnerComponent(
        requestBody: string,
    ): CancelablePromise<TradingPartnerComponentQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/TradingPartnerComponent/queryMore',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
