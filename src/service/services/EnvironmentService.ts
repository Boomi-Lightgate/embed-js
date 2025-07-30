/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Environment } from '../models/Environment';
import type { EnvironmentBulkRequest } from '../models/EnvironmentBulkRequest';
import type { EnvironmentBulkResponse } from '../models/EnvironmentBulkResponse';
import type { EnvironmentMapExtension } from '../models/EnvironmentMapExtension';
import type { EnvironmentQueryConfig } from '../models/EnvironmentQueryConfig';
import type { EnvironmentQueryResponse } from '../models/EnvironmentQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class EnvironmentService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates an Environment object
     * Creates an environment having the specified name. Environment names must be unique.
     * @param requestBody
     * @returns Environment Successful request and response.
     * @throws ApiError
     */
    public createEnvironment(
        requestBody?: Environment,
    ): CancelablePromise<Environment> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Environment',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves an instance of an Environment object
     * Retrieves the properties of the environment with a specified ID.
     * @param id A unique ID assigned by the system to the environment.
     * @returns Environment Successful request and response.
     * @throws ApiError
     */
    public getEnvironment(
        id: string,
    ): CancelablePromise<Environment> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Environment/{id}',
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
     * Modifies or updates an Environment object
     * Updates the Environment object having the specified ID. You can edit the name field only.
     * @param id A unique ID assigned by the system to the environment.
     * @param requestBody
     * @returns Environment Successful request and response.
     * @throws ApiError
     */
    public updateEnvironment(
        id: string,
        requestBody?: Environment,
    ): CancelablePromise<Environment> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Environment/{id}',
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
     * Deletes an Environment object
     * Deletes the Environment object with a specified ID. It is not possible to delete an environment that has attached Runtimes or integration packs.
     * @param id A unique ID assigned by the system to the environment.
     * @returns any Successful request and response.
     * @throws ApiError
     */
    public deleteEnvironment(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/Environment/{id}',
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
     * Retrieves multiple Environment objects by identifier
     * To learn more about `bulk`, refer to [Bulk GET operations](#section/Introduction/Bulk-GET-operations).
     * @param requestBody
     * @returns EnvironmentBulkResponse Successful request and response.
     * @throws ApiError
     */
    public bulkEnvironment(
        requestBody?: EnvironmentBulkRequest,
    ): CancelablePromise<EnvironmentBulkResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Environment/bulk',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Queries for an Environment object(s)
     * For general information about the structure of QUERY filters, their sample payloads, and how to handle the paged results, refer to [Query filters](#section/Introduction/Query-filters) and [Query paging](#section/Introduction/Query-paging).
     * @param requestBody  Possible properties include: name, id, classification
     * @returns EnvironmentQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryEnvironment(
        requestBody?: EnvironmentQueryConfig,
    ): CancelablePromise<EnvironmentQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Environment/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves additional results for an Environment query
     * To learn about using `queryMore`, refer to [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns EnvironmentQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMoreEnvironment(
        requestBody: string,
    ): CancelablePromise<EnvironmentQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Environment/queryMore',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Modifies or updates an EnvironmentMapExtension object
     * Updates the extended mapping configuration for the specified Environment Map Extension object ID.
     * @param id
     * @param requestBody
     * @returns EnvironmentMapExtension Successful request and response.
     * @throws ApiError
     */
    public updateEnvironmentMapExtension(
        id: string,
        requestBody?: EnvironmentMapExtension,
    ): CancelablePromise<EnvironmentMapExtension> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/EnvironmentMapExtension/{id}',
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
}
