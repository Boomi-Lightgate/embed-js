/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExecutionConnectorQueryConfig } from '../models/ExecutionConnectorQueryConfig';
import type { ExecutionConnectorQueryResponse } from '../models/ExecutionConnectorQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ExecutionConnectorService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Queries for an ExecutionConnector object(s)
     * For general information about the structure of QUERY filters, their sample payloads, and how to handle the paged results, refer to [Query filters](#section/Introduction/Query-filters) and [Query paging](#section/Introduction/Query-paging).
     *
     * - The QUERY operation allows you to query the connectors involved in a process run by filtering on attributes like executionId, actionType, successCount, and so on.
     * - Requires one or more execution IDs in the request body.
     * - You can filter all fields except executionConnector and id.
     * @param requestBody  Possible properties include: executionId, connectorType, actionType, errorCount, successCount, size, isStartShape, recordType
     * @returns ExecutionConnectorQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryExecutionConnector(
        requestBody?: ExecutionConnectorQueryConfig,
    ): CancelablePromise<ExecutionConnectorQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ExecutionConnector/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves additional results for an ExecutionConnector query
     * To learn about using `queryMore`, refer to [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns ExecutionConnectorQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMoreExecutionConnector(
        requestBody: string,
    ): CancelablePromise<ExecutionConnectorQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ExecutionConnector/queryMore',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
