/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Branch } from '../models/Branch';
import type { BranchBulkRequest } from '../models/BranchBulkRequest';
import type { BranchBulkResponse } from '../models/BranchBulkResponse';
import type { BranchQueryConfig } from '../models/BranchQueryConfig';
import type { BranchQueryResponse } from '../models/BranchQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class BranchService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates a Branch object
     * - To create a branch, you need the branch ID for the branch from which you want to create a new branch. New branches return ready as false until the creating stage has cleared.
     * - You can also create a branch from a packaged component. To do so, use the ID of the packaged component as the packageId.
     * - To create a branch from a deployment, use the ID of the deployment for the packageId.
     * @param requestBody
     * @returns Branch Successful request and response.
     * @throws ApiError
     */
    public createBranch(
        requestBody?: Branch,
    ): CancelablePromise<Branch> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Branch',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves an instance of a Branch object
     * When you have the branch ID, you can query for additional information about the branch. Send an HTTP GET where {accountId} is the ID of the authenticating account and {branchId} is the ID of the branch you want to query.
     * @param id The ID of the branch.
     * @returns Branch Successful request and response.
     * @throws ApiError
     */
    public getBranch(
        id: string,
    ): CancelablePromise<Branch> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Branch/{id}',
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
     * Modifies or updates a Branch object
     * To update a branch, you need the branch ID. Currently, you can only update the name of the branch.
     * @param id The ID of the branch.
     * @param requestBody
     * @returns Branch Successful request and response.
     * @throws ApiError
     */
    public updateBranch(
        id: string,
        requestBody?: Branch,
    ): CancelablePromise<Branch> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Branch/{id}',
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
     * Deletes a Branch object
     * Deletes a branch
     * @param id The ID of the branch.
     * @returns any Successful request and response.
     * @throws ApiError
     */
    public deleteBranch(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/Branch/{id}',
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
     * Retrieves multiple Branch objects by identifier
     * To learn more about `bulk`, refer to [Bulk GET operations](#section/Introduction/Bulk-GET-operations).
     * @param requestBody
     * @returns BranchBulkResponse Successful request and response.
     * @throws ApiError
     */
    public bulkBranch(
        requestBody?: BranchBulkRequest,
    ): CancelablePromise<BranchBulkResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Branch/bulk',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Queries for a Branch object(s)
     * You must first retrieve the ID of your main branch, using the name of your current branch. If you haven't created any branches, your current branch will be `main`.
     *
     * When you query a branch, it might be in one of the following states:
     * - `CREATING`: The branch is being created
     * - `NORMAL`: The branch is ready to use
     * - `DELETING`: The branch is being deleted.
     *
     * For general information about the structure of QUERY filters, their sample payloads, and how to handle the paged results, refer to [Query filters](#section/Introduction/Query-filters) and [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns BranchQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryBranch(
        requestBody?: BranchQueryConfig,
    ): CancelablePromise<BranchQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Branch/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves additional results for a Branch query
     * To learn about using `queryMore`, refer to [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns BranchQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMoreBranch(
        requestBody: string,
    ): CancelablePromise<BranchQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Branch/queryMore',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
