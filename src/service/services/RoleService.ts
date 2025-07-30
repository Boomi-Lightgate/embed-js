/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Role } from '../models/Role';
import type { RoleBulkRequest } from '../models/RoleBulkRequest';
import type { RoleBulkResponse } from '../models/RoleBulkResponse';
import type { RoleQueryConfig } from '../models/RoleQueryConfig';
import type { RoleQueryResponse } from '../models/RoleQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class RoleService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates a Role object
     * Creates a Role object based on the supplied values.
     * @param requestBody
     * @returns Role Successful request and response.
     * @throws ApiError
     */
    public createRole(
        requestBody?: Role,
    ): CancelablePromise<Role> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Role',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves an instance of a Role object
     * Returns a single Role object based on the supplied role ID.
     * @param id
     * @returns Role Successful request and response.
     * @throws ApiError
     */
    public getRole(
        id: string,
    ): CancelablePromise<Role> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Role/{id}',
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
     * Modifies or updates a Role object
     * Updates a role as identified by its role ID.
     * @param id
     * @param requestBody
     * @returns Role Successful request and response.
     * @throws ApiError
     */
    public updateRole(
        id: string,
        requestBody?: Role,
    ): CancelablePromise<Role> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Role/{id}',
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
     * Deletes a Role object
     * Deletes a Role object based on the supplied role ID.
     * @param id
     * @returns any Successful request and response.
     * @throws ApiError
     */
    public deleteRole(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/Role/{id}',
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
     * Retrieves multiple Role objects by identifier
     * To learn more about `bulk`, refer to [Bulk GET operations](#section/Introduction/Bulk-GET-operations).
     * @param requestBody
     * @returns RoleBulkResponse Successful request and response.
     * @throws ApiError
     */
    public bulkRole(
        requestBody?: RoleBulkRequest,
    ): CancelablePromise<RoleBulkResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Role/bulk',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Queries for a Role object(s)
     * For general information about the structure of QUERY filters, their sample payloads, and how to handle the paged results, refer to [Query filters](#section/Introduction/Query-filters) and [Query paging](#section/Introduction/Query-paging).
     * @param requestBody  Possible properties include: name, parentId
     * @returns RoleQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryRole(
        requestBody?: RoleQueryConfig,
    ): CancelablePromise<RoleQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Role/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves additional results for a Role query
     * To learn about using `queryMore`, refer to [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns RoleQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMoreRole(
        requestBody: string,
    ): CancelablePromise<RoleQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Role/queryMore',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
