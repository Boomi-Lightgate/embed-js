/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Process } from '../models/Process';
import type { ProcessBulkRequest } from '../models/ProcessBulkRequest';
import type { ProcessBulkResponse } from '../models/ProcessBulkResponse';
import type { ProcessQueryConfig } from '../models/ProcessQueryConfig';
import type { ProcessQueryResponse } from '../models/ProcessQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ProcessService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Retrieves an instance of a Process object
     * Retrieves the properties of the process having the specified ID.
     *
     * The ordinary GET operation retrieves the properties of the process having the specified ID. The bulk GET operation retrieves the properties of the processes having the specified IDs, to a maximum of 100.
     * @param id A unique ID assigned by the system to the process. For deployed processes and processes belonging to single-install integration packs, this value is the process component ID. For processes belonging to multi-install integration packs, this is an synthetic ID and does not match an actual process component. You can use this value as the `extensionGroupId` when querying the Environment Extensions object.
     * @returns Process Successful request and response.
     * @throws ApiError
     */
    public getProcess(
        id: string,
    ): CancelablePromise<Process> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Process/{id}',
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
     * Retrieves multiple Process objects by identifier
     * To learn more about `bulk`, refer to [Bulk GET operations](#section/Introduction/Bulk-GET-operations).
     * @param requestBody
     * @returns ProcessBulkResponse Successful request and response.
     * @throws ApiError
     */
    public bulkProcess(
        requestBody?: ProcessBulkRequest,
    ): CancelablePromise<ProcessBulkResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Process/bulk',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Queries for a Process object(s)
     * For general information about the structure of QUERY filters, their sample payloads, and how to handle the paged results, refer to [Query filters](#section/Introduction/Query-filters) and [Query paging](#section/Introduction/Query-paging).
     * @param requestBody  Possible properties include: name, id, integrationPackId, integrationPackInstanceId
     * @returns ProcessQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryProcess(
        requestBody?: ProcessQueryConfig,
    ): CancelablePromise<ProcessQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Process/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves additional results for a Process query
     * To learn about using `queryMore`, refer to [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns ProcessQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMoreProcess(
        requestBody: string,
    ): CancelablePromise<ProcessQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Process/queryMore',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
