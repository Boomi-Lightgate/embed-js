/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OrganizationComponent } from '../models/OrganizationComponent';
import type { OrganizationComponentBulkRequest } from '../models/OrganizationComponentBulkRequest';
import type { OrganizationComponentBulkResponse } from '../models/OrganizationComponentBulkResponse';
import type { OrganizationComponentQueryConfig } from '../models/OrganizationComponentQueryConfig';
import type { OrganizationComponentQueryResponse } from '../models/OrganizationComponentQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class OrganizationComponentService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates an OrganizationComponent object
     * The CREATE operation creates an Organization Component object with the specified component name.
     *
     * The request body requires the `componentName` field. If you omit the `folderName` field, it requires the `folderId` field — and vice versa. If you omit the `componentID` field, it assigns the value when you create the component. If you omit the `folderID` field, it assigns the value when you create the component.
     * @param requestBody
     * @returns OrganizationComponent Successful request and response.
     * @throws ApiError
     */
    public createOrganizationComponent(
        requestBody?: OrganizationComponent,
    ): CancelablePromise<OrganizationComponent> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/OrganizationComponent',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves an instance of an OrganizationComponent object.
     * The GET operation returns a single Organization Component object based on the supplied ID. A GET operation specifying the ID of a deleted Organization Component retrieves the component. In the component, the deleted field’s value is *true*.
     * @param id Organization component ID
     * @returns OrganizationComponent Successful request and response.
     * @throws ApiError
     */
    public getOrganizationComponent(
        id: string,
    ): CancelablePromise<OrganizationComponent> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/OrganizationComponent/{id}',
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
     * Modifies or updates an OrganizationComponent object
     * The UPDATE operation overwrites the Organization Component object with the specified component ID. An UPDATE operation specifying the ID of a deleted Organization component restores the component to a non-deleted state, assuming the request is otherwise valid.
     * @param id Organization component ID
     * @param requestBody
     * @returns OrganizationComponent Successful request and response.
     * @throws ApiError
     */
    public updateOrganizationComponent(
        id: string,
        requestBody?: OrganizationComponent,
    ): CancelablePromise<OrganizationComponent> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/OrganizationComponent/{id}',
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
     * Deletes an OrganizationComponent object
     * The DELETE operation deletes the Organization Component object with the specified component ID. A DELETE operation specifying the ID of a deleted Organization component returns a false response. If the component is deleted successfully, the response is `true`.
     * @param id ID of the Organization component you are attempting to delete.
     * @returns any Successful request and response.
     * @throws ApiError
     */
    public deleteOrganizationComponent(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/OrganizationComponent/{id}',
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
     * Retrieves multiple OrganizationComponent objects by identifier
     * The bulk GET operation returns multiple Account objects based on the supplied account IDs, to a maximum of 100. To learn more about `bulk`, refer to [Bulk GET operations](#section/Introduction/Bulk-GET-operations).
     * @param requestBody
     * @returns OrganizationComponentBulkResponse Successful request and response.
     * @throws ApiError
     */
    public bulkOrganizationComponent(
        requestBody?: OrganizationComponentBulkRequest,
    ): CancelablePromise<OrganizationComponentBulkResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/OrganizationComponent/bulk',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Queries for an OrganizationComponent object
     * - Only the LIKE operator is allowed with a name filter. Likewise, only the EQUALS operator is permitted with a contactName, email, or phone filter.
     *
     * -   If the QUERY request includes multiple filters, you can connect the filters with a logical AND operator — the query does not support the logical OR operator .
     *
     * -   The QUERY results omit the folderName field.
     *
     * For general information about the structure of QUERY filters, their sample payloads, and how to handle the paged results, refer to [Query filters](#section/Introduction/Query-filters) and [Query paging](#section/Introduction/Query-paging).
     * @param requestBody  Possible properties include: name, contactName, email, phone
     * @returns OrganizationComponentQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryOrganizationComponent(
        requestBody?: OrganizationComponentQueryConfig,
    ): CancelablePromise<OrganizationComponentQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/OrganizationComponent/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves additional results for an OrganizationComponent query
     * To learn about using `queryMore`, refer to [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns OrganizationComponentQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMoreOrganizationComponent(
        requestBody: string,
    ): CancelablePromise<OrganizationComponentQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/OrganizationComponent/queryMore',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
