/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ThroughputAccountGroupQueryConfig } from '../models/ThroughputAccountGroupQueryConfig';
import type { ThroughputAccountGroupQueryResponse } from '../models/ThroughputAccountGroupQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ThroughputAccountGroupService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Queries for a ThroughputAccountGroup object(s)
     * - You can only use the EQUALS operator with the `environmentId` filter parameter.
     * - The authenticating user for a QUERY operation must have the Dashboard privilege.
     *
     * For general information about the structure of QUERY filters, their sample payloads, and how to handle the paged results, refer to [Query filters](#section/Introduction/Query-filters) and [Query paging](#section/Introduction/Query-paging).
     * @param requestBody  Possible properties include: accountGroupId, processDate
     * @returns ThroughputAccountGroupQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryThroughputAccountGroup(
        requestBody?: ThroughputAccountGroupQueryConfig,
    ): CancelablePromise<ThroughputAccountGroupQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ThroughputAccountGroup/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves additional results for a ThroughputAccountGroup query
     * To learn about using `queryMore`, refer to [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns ThroughputAccountGroupQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMoreThroughputAccountGroup(
        requestBody: string,
    ): CancelablePromise<ThroughputAccountGroupQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ThroughputAccountGroup/queryMore',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
