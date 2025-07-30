/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EnvironmentConnectionFieldExtensionSummaryQueryConfig } from '../models/EnvironmentConnectionFieldExtensionSummaryQueryConfig';
import type { EnvironmentConnectionFieldExtensionSummaryQueryResponse } from '../models/EnvironmentConnectionFieldExtensionSummaryQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class EnvironmentConnectionFieldExtensionSummaryService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Queries for an EnvironmentConnectionFieldExtensionSummary object(s)
     * For general information about the structure of QUERY filters, their sample payloads, and how to handle the paged results, refer to [Query filters](#section/Introduction/Query-filters) and [Query paging](#section/Introduction/Query-paging).
     * @param requestBody  Possible properties include: environmentId, extensionGroupId, connectionId, fieldId
     * @returns EnvironmentConnectionFieldExtensionSummaryQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryEnvironmentConnectionFieldExtensionSummary(
        requestBody?: EnvironmentConnectionFieldExtensionSummaryQueryConfig,
    ): CancelablePromise<EnvironmentConnectionFieldExtensionSummaryQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/EnvironmentConnectionFieldExtensionSummary/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves additional results for an EnvironmentConnectionFieldExtensionSummary query
     * To learn about using `queryMore`, refer to [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns EnvironmentConnectionFieldExtensionSummaryQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMoreEnvironmentConnectionFieldExtensionSummary(
        requestBody: string,
    ): CancelablePromise<EnvironmentConnectionFieldExtensionSummaryQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/EnvironmentConnectionFieldExtensionSummary/queryMore',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
