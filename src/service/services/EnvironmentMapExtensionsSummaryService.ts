/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EnvironmentMapExtensionsSummaryQueryConfig } from '../models/EnvironmentMapExtensionsSummaryQueryConfig';
import type { EnvironmentMapExtensionsSummaryQueryResponse } from '../models/EnvironmentMapExtensionsSummaryQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class EnvironmentMapExtensionsSummaryService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Queries for an EnvironmentMapExtensionsSummary object(s)
     * For general information about the structure of QUERY filters, their sample payloads, and how to handle the paged results, refer to [Query filters](#section/Introduction/Query-filters) and [Query paging](#section/Introduction/Query-paging).
     * @param requestBody  Possible properties include: environmentId, extensionGroupId
     * @returns EnvironmentMapExtensionsSummaryQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryEnvironmentMapExtensionsSummary(
        requestBody?: EnvironmentMapExtensionsSummaryQueryConfig,
    ): CancelablePromise<EnvironmentMapExtensionsSummaryQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/EnvironmentMapExtensionsSummary/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves additional results for an EnvironmentMapExtensionsSummary query
     * To learn about using `queryMore`, refer to [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns EnvironmentMapExtensionsSummaryQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMoreEnvironmentMapExtensionsSummary(
        requestBody: string,
    ): CancelablePromise<EnvironmentMapExtensionsSummaryQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/EnvironmentMapExtensionsSummary/queryMore',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
