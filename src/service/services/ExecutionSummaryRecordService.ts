/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExecutionSummaryRecordQueryConfig } from '../models/ExecutionSummaryRecordQueryConfig';
import type { ExecutionSummaryRecordQueryResponse } from '../models/ExecutionSummaryRecordQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ExecutionSummaryRecordService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Queries for an ExecutionSummaryRecord object(s)
     * For general information about the structure of QUERY filters, their sample payloads, and how to handle the paged results, refer to [Query filters](#section/Introduction/Query-filters) and [Query paging](#section/Introduction/Query-paging).
     * @param requestBody Possible properties include: processId, timeBlock, atomId, status, reportKey, launcherId
     * @returns ExecutionSummaryRecordQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryExecutionSummaryRecord(
        requestBody?: ExecutionSummaryRecordQueryConfig,
    ): CancelablePromise<ExecutionSummaryRecordQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ExecutionSummaryRecord/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves additional results for an ExecutionSummaryRecord query
     * To learn about using `queryMore`, refer to [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns ExecutionSummaryRecordQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMoreExecutionSummaryRecord(
        requestBody: string,
    ): CancelablePromise<ExecutionSummaryRecordQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ExecutionSummaryRecord/queryMore',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
