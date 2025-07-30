/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MergeRequest } from '../models/MergeRequest';
import type { MergeRequestBulkRequest } from '../models/MergeRequestBulkRequest';
import type { MergeRequestBulkResponse } from '../models/MergeRequestBulkResponse';
import type { MergeRequestQueryConfig } from '../models/MergeRequestQueryConfig';
import type { MergeRequestQueryResponse } from '../models/MergeRequestQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class MergeRequestService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates a MergeRequest object
     * You can use the Merge Request object to merge a development branch into the main branch.
     *
     * - To create a merge request, you need the branch IDs for the source and destination branches. The source branch is the branch you want to merge into the destination branch.
     *
     * - There are two merge request strategies you can choose from: OVERRIDE or CONFLICT_RESOLVE. An override merge automatically resolves any merge conflicts by prioritizing the branch specified in the `priorityBranch` field. If you choose the CONFLICT_RESOLVE strategy, you have the opportunity to review any conflicts and choose which version you want to keep.
     * @param requestBody
     * @returns MergeRequest Successful request and response.
     * @throws ApiError
     */
    public createMergeRequest(
        requestBody?: MergeRequest,
    ): CancelablePromise<MergeRequest> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/MergeRequest',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves an instance of a MergeRequest object
     * Retrieve more information about the recently performed merge.
     *
     * - The `resolution` parameter is generated from the original merge request and specifies either the source branch for the final content for the merge or the destination. It can have the following values:
     *
     * -  OVERRIDE: The source branch has taken priority
     * -  KEEP_DESTINATION: The destination branch has taken priority
     * - The `changeType` parameter is generated from a branch diff that is performed on merge and can be one of the following values:
     * -  ADDED: A component was added to the source branch
     * -  MODIFIED: A component was modified in the source branch
     * -  DELETED: A component was deleted in the source branch
     *
     * After performing a merge request between two branches, you can use the merge request’s ID to retrieve more information about the recently performed merge. The following example shows a merge between two branches where something was deleted in the source branch:
     *
     * Send an HTTP GET to `https://api.boomi.com/api/rest/v1/{accountId}/MergeRequest/{mergeRequestId}` where `{accountId}` is the ID of the authenticating account and `{mergeRequestId}` is the ID of the merge request.
     *
     * You can also use the GET operation to view a user's current working branch:
     *
     * Send an HTTP GET to `https://api.boomi.com/api/rest/v1/{accountId}/UserAccountProperty/defaultWorkingBranch` where the `{accountId}` is the ID of the account for which you want to view the working branch.
     * @param id ID of the merge request.
     * @returns MergeRequest Successful request and response.
     * @throws ApiError
     */
    public getMergeRequest(
        id: string,
    ): CancelablePromise<MergeRequest> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/MergeRequest/{id}',
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
     * Modifies or updates a MergeRequest object
     * @param id ID of the merge request.
     * @param requestBody
     * @returns MergeRequest Successful request and response.
     * @throws ApiError
     */
    public updateMergeRequest(
        id: string,
        requestBody?: MergeRequest,
    ): CancelablePromise<MergeRequest> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/MergeRequest/{id}',
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
     * Deletes a MergeRequest object
     * - There are three actions you can choose from when executing a merge request:
     * -  MERGE: Use to start or restart a merge request; the `stage` must be REVIEWING or FAILED_TO_MERGE
     * -  REVERT: Use to revert a merge request; the `stage` must be MERGED or DELETED and `previousStage` is MERGED
     * -  RETRY_DRAFTING: Use when the merge request `stage` is FAILED_TO_DRAFT or FAILED_TO_REDRAFT
     * - If the merge is successful, the `stage` and/or `previousStage` might be in one of the following stages:
     * -  DRAFTING: The merge request is in the queue.
     * -  DRAFTED: The merge request is drafted for review.
     * -  REVIEWING: The merge request is being reviewed.
     * -  MERGING: The merge request is being processed.
     * -  MERGED: The merge request has successfully completed.
     * -  FAILED_TO_MERGE: The merge request failed to merge.
     * -  NOT_EXIST: No previous merge request has been submitted. This stage is typically returned in the `previousStage` parameter.
     * @param id
     * @returns any Successful request and response.
     * @throws ApiError
     */
    public deleteMergeRequest(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/MergeRequest/{id}',
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
     * Retrieves multiple MergeRequest objects by identifier
     * To learn more about `bulk`, refer to [Bulk GET operations](#section/Introduction/Bulk-GET-operations).
     * @param requestBody
     * @returns MergeRequestBulkResponse Successful request and response.
     * @throws ApiError
     */
    public bulkMergeRequest(
        requestBody?: MergeRequestBulkRequest,
    ): CancelablePromise<MergeRequestBulkResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/MergeRequest/bulk',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Executes an action on a MergeRequest object
     * - These are the actions you can choose from when executing a merge request: * MERGE: Use to start or restart a merge request; the stage must be REVIEWING or FAILED_TO_MERGE * REVERT: Use to revert a merge request; the stage must be MERGED or DELETED and previousStage is MERGED * RETRY_DRAFTING: Use when the merge request stage is FAILED_TO_DRAFT or FAILED_TO_REDRAFT - If the merge is successful, the stage and/or previousStage might be in one of the following stages: * DRAFTING - The merge request is in the queue. _* DRAFTED - The merge request is drafted for review. * REVIEWING - The merge request is being reviewed. * MERGING - The merge request is being processed. * MERGED - The merge request has successfully completed. * FAILED_TO_MERGE - The merge request failed to merge.
     * @param id
     * @param requestBody
     * @returns MergeRequest Successful request and response.
     * @throws ApiError
     */
    public executeMergeRequest(
        id: string,
        requestBody?: MergeRequest,
    ): CancelablePromise<MergeRequest> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/MergeRequest/execute/{id}',
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
     * Queries for a MergeRequest object
     * - You can query a branch to retrieve a list of all active merge request IDs.
     * - You must include the destination or source branch as a parameter. Only EQUALS is allowed for these parameters.
     * - Optional parameters include:
     * -   `createdDate`
     * -   `createdBy`
     * -   `stage`
     * -   `modifiedDate`
     * -   `modifiedBy`
     * -  You can use the `queryMore` request to return more than 100 results.
     *
     * For more information about query filters, refer to [Query filters](/api/platformapi#section/Introduction/Query-filters).
     * @param requestBody
     * @returns MergeRequestQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMergeRequest(
        requestBody?: MergeRequestQueryConfig,
    ): CancelablePromise<MergeRequestQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/MergeRequest/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves additional results for a MergeRequest query
     * To learn about using `queryMore`, refer to [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns MergeRequestQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMoreMergeRequest(
        requestBody: string,
    ): CancelablePromise<MergeRequestQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/MergeRequest/queryMore',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
