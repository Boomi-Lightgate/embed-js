/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiUsageCountQueryConfig } from '../models/ApiUsageCountQueryConfig';
import type { ApiUsageCountQueryResponse } from '../models/ApiUsageCountQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ApiUsageCountService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Queries for an ApiUsageCount object(s)
     * For general information about the structure of QUERY filters, their sample payloads, and how to handle the paged results, refer to [Query filters](#section/Introduction/Query-filters) and [Query paging](#section/Introduction/Query-paging).
     * @param requestBody  Possible properties include: processDate, classification, successCount, errorCount
     * @returns ApiUsageCountQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryApiUsageCount(
        requestBody?: ApiUsageCountQueryConfig,
    ): CancelablePromise<ApiUsageCountQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ApiUsageCount/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves additional results for an ApiUsageCount query
     * To learn about using `queryMore`, refer to [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns ApiUsageCountQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMoreApiUsageCount(
        requestBody: string,
    ): CancelablePromise<ApiUsageCountQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ApiUsageCount/queryMore',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
