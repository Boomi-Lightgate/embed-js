/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EnvironmentExtensions } from '../models/EnvironmentExtensions';
import type { EnvironmentExtensionsBulkRequest } from '../models/EnvironmentExtensionsBulkRequest';
import type { EnvironmentExtensionsBulkResponse } from '../models/EnvironmentExtensionsBulkResponse';
import type { EnvironmentExtensionsQueryConfig } from '../models/EnvironmentExtensionsQueryConfig';
import type { EnvironmentExtensionsQueryResponse } from '../models/EnvironmentExtensionsQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class EnvironmentExtensionsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Retrieves an instance of an EnvironmentExtensions object
     * Retrieves the extension values for the environment having the specified ID (except for encrypted values).
     * @param id The ID of the object. This can be either of the following:
     * 1. The value of `environmentId`.
     * 2. A conceptual ID synthesized from the environment ID (`environmentId`) and the ID of the multi-install integration pack to which the extension values apply (`extensionGroupId`).
     * @returns EnvironmentExtensions Successful request and response.
     * @throws ApiError
     */
    public getEnvironmentExtensions(
        id: string,
    ): CancelablePromise<EnvironmentExtensions> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/EnvironmentExtensions/{id}',
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
     * Modifies or updates an EnvironmentExtensions object
     * Updates the extension values for the environment having the specified ID. When updating extension values, you must perform either a partial update to update only those extension values requiring modification in the request, or a full update to update the full set of environment extensions in a single request. A partial update is typically recommended because it results in smaller payloads and more targeted updates.
     *
     * >**Warning:** The UPDATE operation does not support running muliple map extensions requests concurrently. Some map extensions might not get updated properly.
     *
     * #### Performing a partial update
     *
     * To perform a **partial update**, set `partial` to true and then provide only the extension fields and values that you wish to update in the request.
     *
     * >**Note:** For cross reference tables, you can update a single cross reference table. However, you must provide all values for the entire table. You cannot update individual rows within a table.
     * >
     * > - For process property components, you can update a single process property component but you must provide the values for all properties in the component.
     *
     * #### Performing a full update
     *
     * To perform a **full update**, set `partial` to false and then provide all the environment extension fields and values in the request, regardless if you wish to change only some values but not all.
     *
     * >**Caution:** Values not included in the request are reset to use their default values. If you omit the partial attribute, the behavior defaults to a full update.
     * @param id The ID of the object. This can be either of the following:
     * 1. The value of environmentId.
     * 2. A conceptual ID synthesized from the environment ID (environmentId) and the ID of the multi-install integration pack to which the extension values apply (extensionGroupId).
     * @param requestBody
     * @returns EnvironmentExtensions Successful request and response.
     * @throws ApiError
     */
    public updateEnvironmentExtensions(
        id: string,
        requestBody?: EnvironmentExtensions,
    ): CancelablePromise<EnvironmentExtensions> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/EnvironmentExtensions/{id}',
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
     * Retrieves multiple EnvironmentExtensions objects by identifier
     * To learn more about `bulk`, refer to [Bulk GET operations](#section/Introduction/Bulk-GET-operations).
     * @param requestBody
     * @returns EnvironmentExtensionsBulkResponse Successful request and response.
     * @throws ApiError
     */
    public bulkEnvironmentExtensions(
        requestBody?: EnvironmentExtensionsBulkRequest,
    ): CancelablePromise<EnvironmentExtensionsBulkResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/EnvironmentExtensions/bulk',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Queries for an EnvironmentExtensions object(s)
     * For general information about the structure of QUERY filters, their sample payloads, and how to handle the paged results, refer to [Query filters](#section/Introduction/Query-filters) and [Query paging](#section/Introduction/Query-paging).
     * @param requestBody  Possible properties include: environmentId, extensionGroupId
     * @returns EnvironmentExtensionsQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryEnvironmentExtensions(
        requestBody?: EnvironmentExtensionsQueryConfig,
    ): CancelablePromise<EnvironmentExtensionsQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/EnvironmentExtensions/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves additional results for an EnvironmentExtensions query
     * To learn about using `queryMore`, refer to [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns EnvironmentExtensionsQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMoreEnvironmentExtensions(
        requestBody: string,
    ): CancelablePromise<EnvironmentExtensionsQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/EnvironmentExtensions/queryMore',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
