/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AS2ConnectorRecordQueryConfig } from '../models/AS2ConnectorRecordQueryConfig';
import type { AS2ConnectorRecordQueryResponse } from '../models/AS2ConnectorRecordQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class As2ConnectorRecordService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Queries for an AS2ConnectorRecord object(s)
     * For general information about the structure of QUERY filters, their sample payloads, and how to handle the paged results, refer to [Query filters](#section/Introduction/Query-filters) and [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns AS2ConnectorRecordQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryAs2ConnectorRecord(
        requestBody?: AS2ConnectorRecordQueryConfig,
    ): CancelablePromise<AS2ConnectorRecordQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/AS2ConnectorRecord/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves additional results for an AS2ConnectorRecord query
     * To learn about using `queryMore`, refer to [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns AS2ConnectorRecordQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMoreAs2ConnectorRecord(
        requestBody: string,
    ): CancelablePromise<AS2ConnectorRecordQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/AS2ConnectorRecord/queryMore',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
