/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomTrackedFieldQueryConfig } from '../models/CustomTrackedFieldQueryConfig';
import type { CustomTrackedFieldQueryResponse } from '../models/CustomTrackedFieldQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CustomTrackedFieldService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Queries for a CustomTrackedField object(s)
     * For general information about the structure of QUERY filters, their sample payloads, and how to handle the paged results, refer to [Query filters](#section/Introduction/Query-filters) and [Query paging](#section/Introduction/Query-paging).
     *
     * >**Note:** This operation doesn't accept filters because the list is constrained to 20 fields.
     * @param requestBody
     * @returns CustomTrackedFieldQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryCustomTrackedField(
        requestBody?: CustomTrackedFieldQueryConfig,
    ): CancelablePromise<CustomTrackedFieldQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/CustomTrackedField/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves additional results for a CustomTrackedField query
     * To learn about using `queryMore`, refer to [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns CustomTrackedFieldQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMoreCustomTrackedField(
        requestBody: string,
    ): CancelablePromise<CustomTrackedFieldQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/CustomTrackedField/queryMore',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
