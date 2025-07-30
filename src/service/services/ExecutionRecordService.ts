/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExecutionRecordQueryConfig } from '../models/ExecutionRecordQueryConfig';
import type { ExecutionRecordQueryResponse } from '../models/ExecutionRecordQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ExecutionRecordService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Queries for an ExecutionRecord object(s)
     * For general information about the structure of QUERY filters, their sample payloads, and how to handle the paged results, refer to [Query filters](#section/Introduction/Query-filters) and [Query paging](#section/Introduction/Query-paging).
     * @param requestBody  Possible properties include: executionId, originalExecutionId, account, executionTime, status, executionType, processName, processId, atomName, atomId, inboundDocumentCount, outboundDocumentCount, executionDuration, message, reportKey, launcherId, nodeId, recordedDate
     * @returns ExecutionRecordQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryExecutionRecord(
        requestBody?: ExecutionRecordQueryConfig,
    ): CancelablePromise<ExecutionRecordQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ExecutionRecord/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves additional results for an ExecutionRecord query
     * To learn about using `queryMore`, refer to [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns ExecutionRecordQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMoreExecutionRecord(
        requestBody: string,
    ): CancelablePromise<ExecutionRecordQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ExecutionRecord/queryMore',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
