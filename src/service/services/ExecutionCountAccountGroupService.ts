/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExecutionCountAccountGroupQueryConfig } from '../models/ExecutionCountAccountGroupQueryConfig';
import type { ExecutionCountAccountGroupQueryResponse } from '../models/ExecutionCountAccountGroupQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ExecutionCountAccountGroupService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Queries for an ExecutionCountAccountGroup object(s)
     * The authenticating user for a QUERY operation must have the Dashboard privilege.
     *
     * For general information about the structure of QUERY filters, their sample payloads, and how to handle the paged results, refer to [Query filters](#section/Introduction/Query-filters) and [Query paging](#section/Introduction/Query-paging).
     * @param requestBody  Possible properties include: accountGroupId, processDate
     * @returns ExecutionCountAccountGroupQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryExecutionCountAccountGroup(
        requestBody?: ExecutionCountAccountGroupQueryConfig,
    ): CancelablePromise<ExecutionCountAccountGroupQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ExecutionCountAccountGroup/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves additional results for an ExecutionCountAccountGroup query
     * To learn about using `queryMore`, refer to [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns ExecutionCountAccountGroupQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMoreExecutionCountAccountGroup(
        requestBody: string,
    ): CancelablePromise<ExecutionCountAccountGroupQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ExecutionCountAccountGroup/queryMore',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
