/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProcessScheduleStatus } from '../models/ProcessScheduleStatus';
import type { ProcessScheduleStatusBulkRequest } from '../models/ProcessScheduleStatusBulkRequest';
import type { ProcessScheduleStatusBulkResponse } from '../models/ProcessScheduleStatusBulkResponse';
import type { ProcessScheduleStatusQueryConfig } from '../models/ProcessScheduleStatusQueryConfig';
import type { ProcessScheduleStatusQueryResponse } from '../models/ProcessScheduleStatusQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ProcessScheduleStatusService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Retrieves an instance of a ProcessScheduleStatus object
     * Retrieves the Process Schedule Status object with a specified conceptual ID.
     *
     * The ordinary GET operation retrieves the Process Schedules object with a specific conceptual ID. The bulk GET operation retrieves the Process Schedules objects with specific conceptual IDs to a maximum of 100. In addition, you can obtain conceptual IDs from the QUERY operation.
     * @param id The object’s conceptual ID, which is synthesized from the process and Runtime IDs.
     * @returns ProcessScheduleStatus Successful request and response.
     * @throws ApiError
     */
    public getProcessScheduleStatus(
        id: string,
    ): CancelablePromise<ProcessScheduleStatus> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ProcessScheduleStatus/{id}',
            path: {
                'id': id,
            },
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Modifies or updates a ProcessScheduleStatus object
     * Stops or resumes process run schedules for a deployed process.
     *
     * The body of the request must specify not only the conceptual Process Schedule Status object ID but also the Runtime and process IDs. You can obtain the object ID from a QUERY operation.
     *
     * You must have the Runtime Management privilege and the Scheduling privilege to perform the UPDATE operation. If you have the Runtime Management Read Accessprivilege, you cannot update the status of process run schedules.
     * @param id
     * @param requestBody
     * @returns ProcessScheduleStatus Successful request and response.
     * @throws ApiError
     */
    public updateProcessScheduleStatus(
        id: string,
        requestBody?: ProcessScheduleStatus,
    ): CancelablePromise<ProcessScheduleStatus> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ProcessScheduleStatus/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves multiple ProcessScheduleStatus objects by identifier
     * To learn more about `bulk`, refer to [Bulk GET operations](#section/Introduction/Bulk-GET-operations).
     * @param requestBody
     * @returns ProcessScheduleStatusBulkResponse Successful request and response.
     * @throws ApiError
     */
    public bulkProcessScheduleStatus(
        requestBody?: ProcessScheduleStatusBulkRequest,
    ): CancelablePromise<ProcessScheduleStatusBulkResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ProcessScheduleStatus/bulk',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Queries for a ProcessScheduleStatus object(s)
     * For general information about the structure of QUERY filters, their sample payloads, and how to handle the paged results, refer to [Query filters](#section/Introduction/Query-filters) and [Query paging](#section/Introduction/Query-paging).
     * @param requestBody  Possible properties include: processId, atomId
     * @returns ProcessScheduleStatusQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryProcessScheduleStatus(
        requestBody?: ProcessScheduleStatusQueryConfig,
    ): CancelablePromise<ProcessScheduleStatusQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ProcessScheduleStatus/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves additional results for a ProcessScheduleStatus query
     * To learn about using `queryMore`, refer to [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns ProcessScheduleStatusQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMoreProcessScheduleStatus(
        requestBody: string,
    ): CancelablePromise<ProcessScheduleStatusQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ProcessScheduleStatus/queryMore',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
