/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuditLog } from '../models/AuditLog';
import type { AuditLogBulkRequest } from '../models/AuditLogBulkRequest';
import type { AuditLogBulkResponse } from '../models/AuditLogBulkResponse';
import type { AuditLogQueryConfig } from '../models/AuditLogQueryConfig';
import type { AuditLogQueryResponse } from '../models/AuditLogQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AuditLogService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Retrieves an instance of an AuditLog object
     * Retrieve audit information for a single audit log entry, like the audit logs action message, the audit log type, action, and modifier. For example, you can use the GET operation to retrieve the environment extensions for a certain date using the document ID.
     * @param id
     * @returns AuditLog Successful request and response.
     * @throws ApiError
     */
    public getAuditLog(
        id: string,
    ): CancelablePromise<AuditLog> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/AuditLog/{id}',
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
     * Retrieves multiple AuditLog objects by identifier
     * To learn more about `bulk`, refer to [Bulk GET operations](#section/Introduction/Bulk-GET-operations).
     * @param requestBody
     * @returns AuditLogBulkResponse Successful request and response.
     * @throws ApiError
     */
    public bulkAuditLog(
        requestBody?: AuditLogBulkRequest,
    ): CancelablePromise<AuditLogBulkResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/AuditLog/bulk',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Queries for an AuditLog object(s)
     * For general information about the structure of QUERY filters, their sample payloads, and how to handle the paged results, refer to [Query filters](#section/Introduction/Query-filters) and [Query paging](#section/Introduction/Query-paging).
     * @param requestBody  Possible properties include: containerId, userId, date, type, action, modifier, level, source
     * @returns AuditLogQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryAuditLog(
        requestBody?: AuditLogQueryConfig,
    ): CancelablePromise<AuditLogQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/AuditLog/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves additional results for an AuditLog query
     * To learn about using `queryMore`, refer to [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns AuditLogQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMoreAuditLog(
        requestBody: string,
    ): CancelablePromise<AuditLogQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/AuditLog/queryMore',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
