/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EnvironmentRole } from '../models/EnvironmentRole';
import type { EnvironmentRoleBulkRequest } from '../models/EnvironmentRoleBulkRequest';
import type { EnvironmentRoleBulkResponse } from '../models/EnvironmentRoleBulkResponse';
import type { EnvironmentRoleQueryConfig } from '../models/EnvironmentRoleQueryConfig';
import type { EnvironmentRoleQueryResponse } from '../models/EnvironmentRoleQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class EnvironmentRoleService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates an EnvironmentRole object
     * Associates a role with an environment. You must have the Runtime Management privilege to perform the CREATE operation.
     * @param requestBody
     * @returns EnvironmentRole Successful request and response.
     * @throws ApiError
     */
    public createEnvironmentRole(
        requestBody?: EnvironmentRole,
    ): CancelablePromise<EnvironmentRole> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/EnvironmentRole',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves an instance of an EnvironmentRole object
     * Returns a single Environment Role object based on the supplied environment role ID.
     * @param id The Environment Role object you are attempting to get.
     * @returns EnvironmentRole Successful request and response.
     * @throws ApiError
     */
    public getEnvironmentRole(
        id: string,
    ): CancelablePromise<EnvironmentRole> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/EnvironmentRole/{id}',
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
     * Deletes an EnvironmentRole object
     * Removes the association between a role and an environment.
     *
     * You must have the Runtime Management privilege to perform the DELETE operation. If you have the Runtime Management privilege, you cannot delete associations between roles and environments.
     * @param id The Environment Role object you are attempting to delete.
     * @returns any Successful request and response.
     * @throws ApiError
     */
    public deleteEnvironmentRole(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/EnvironmentRole/{id}',
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
     * Retrieves multiple EnvironmentRole objects by identifier
     * To learn more about `bulk`, refer to [Bulk GET operations](#section/Introduction/Bulk-GET-operations).
     * @param requestBody
     * @returns EnvironmentRoleBulkResponse Successful request and response.
     * @throws ApiError
     */
    public bulkEnvironmentRole(
        requestBody?: EnvironmentRoleBulkRequest,
    ): CancelablePromise<EnvironmentRoleBulkResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/EnvironmentRole/bulk',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Queries for an EnvironmentRole object(s)
     * For general information about the structure of QUERY filters, their sample payloads, and how to handle the paged results, refer to [Query filters](#section/Introduction/Query-filters) and [Query paging](#section/Introduction/Query-paging).
     * @param requestBody  Possible properties include: environmentId, roleId
     * @returns EnvironmentRoleQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryEnvironmentRole(
        requestBody?: EnvironmentRoleQueryConfig,
    ): CancelablePromise<EnvironmentRoleQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/EnvironmentRole/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves additional results for an EnvironmentRole query
     * To learn about using `queryMore`, refer to [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns EnvironmentRoleQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMoreEnvironmentRole(
        requestBody: string,
    ): CancelablePromise<EnvironmentRoleQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/EnvironmentRole/queryMore',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
