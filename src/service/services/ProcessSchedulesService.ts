/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProcessSchedules } from '../models/ProcessSchedules';
import type { ProcessSchedulesBulkRequest } from '../models/ProcessSchedulesBulkRequest';
import type { ProcessSchedulesBulkResponse } from '../models/ProcessSchedulesBulkResponse';
import type { ProcessSchedulesQueryConfig } from '../models/ProcessSchedulesQueryConfig';
import type { ProcessSchedulesQueryResponse } from '../models/ProcessSchedulesQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ProcessSchedulesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Retrieves an instance of a ProcessSchedules object
     * Retrieves the Process Schedules object with a specific conceptual ID.
     *
     * The ordinary GET operation retrieves the Process Schedules object with a specific conceptual ID. The bulk GET operation retrieves the Process Schedules objects with specific conceptual IDs to a maximum of 100. In addition, you can obtain conceptual IDs from the QUERY operation.
     * @param id The object’s conceptual ID, which is synthesized from the process and Runtime IDs.
     * @returns ProcessSchedules Successful request and response.
     * @throws ApiError
     */
    public getProcessSchedules(
        id: string,
    ): CancelablePromise<ProcessSchedules> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ProcessSchedules/{id}',
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
     * Modifies or updates a ProcessSchedules object
     * Clears and updates the process run schedules specified in the Process Schedules object with a specific ID. The body of the request must specify not only the conceptual object ID but also the Runtime and process IDs. You can obtain the object ID from a QUERY operation.
     *
     * A Process Schedules object exists for every deployed process. If you do not update the schedule, the object is empty and a run schedule is not in effect.
     *
     * >**Note:** Listener processes cannot be scheduled. If a listener process is referenced, the call will fail with a 400 status code.
     *
     * You must have the **Runtime Management** privilege and the **Scheduling** privilege to perform the UPDATE operation. If you have the **Runtime Management Read Access** privilege, you cannot update process run schedules.
     *
     * >**Note:** After you update run schedules for a process on a Runtime, those schedules appear in the **Scheduling** dialog using the Advanced (cron) syntax.
     *
     * You can additionally employ a Bulk UPDATE operation for the Process Schedules object. See related links for more information about performing a Bulk UPDATE operation.
     * @param id The object’s conceptual ID, which is synthesized from the process and Runtime IDs.
     * @param requestBody
     * @returns ProcessSchedules Successful request and response.
     * @throws ApiError
     */
    public updateProcessSchedules(
        id: string,
        requestBody?: ProcessSchedules,
    ): CancelablePromise<ProcessSchedules> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ProcessSchedules/{id}',
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
     * Retrieves multiple ProcessSchedules objects by identifier
     * To learn more about `bulk`, refer to [Bulk GET operations](#section/Introduction/Bulk-GET-operations).
     * @param requestBody
     * @returns ProcessSchedulesBulkResponse Successful request and response.
     * @throws ApiError
     */
    public bulkProcessSchedules(
        requestBody?: ProcessSchedulesBulkRequest,
    ): CancelablePromise<ProcessSchedulesBulkResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ProcessSchedules/bulk',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Queries for a ProcessSchedules object(s)
     * For general information about the structure of QUERY filters, their sample payloads, and how to handle the paged results, refer to [Query filters](#section/Introduction/Query-filters) and [Query paging](#section/Introduction/Query-paging).
     * @param requestBody  Possible properties include: processId, atomId
     * @returns ProcessSchedulesQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryProcessSchedules(
        requestBody?: ProcessSchedulesQueryConfig,
    ): CancelablePromise<ProcessSchedulesQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ProcessSchedules/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves additional results for a ProcessSchedules query
     * To learn about using `queryMore`, refer to [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns ProcessSchedulesQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMoreProcessSchedules(
        requestBody: string,
    ): CancelablePromise<ProcessSchedulesQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ProcessSchedules/queryMore',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
