/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExecutionCountAccountQueryConfig } from '../models/ExecutionCountAccountQueryConfig';
import type { ExecutionCountAccountQueryResponse } from '../models/ExecutionCountAccountQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ExecutionCountAccountService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Queries for an ExecutionCountAccount object(s)
     * For general information about the structure of QUERY filters, their sample payloads, and how to handle the paged results, refer to [Query filters](#section/Introduction/Query-filters) and [Query paging](#section/Introduction/Query-paging).
     * @param requestBody  Possible properties include: environmentId, atomId, processDate
     * @returns ExecutionCountAccountQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryExecutionCountAccount(
        requestBody?: ExecutionCountAccountQueryConfig,
    ): CancelablePromise<ExecutionCountAccountQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ExecutionCountAccount/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves additional results for an ExecutionCountAccount query
     * To learn about using `queryMore`, refer to [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns ExecutionCountAccountQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMoreExecutionCountAccount(
        requestBody: string,
    ): CancelablePromise<ExecutionCountAccountQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ExecutionCountAccount/queryMore',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
