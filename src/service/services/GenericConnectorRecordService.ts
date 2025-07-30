/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GenericConnectorRecord } from '../models/GenericConnectorRecord';
import type { GenericConnectorRecordBulkRequest } from '../models/GenericConnectorRecordBulkRequest';
import type { GenericConnectorRecordBulkResponse } from '../models/GenericConnectorRecordBulkResponse';
import type { GenericConnectorRecordQueryConfig } from '../models/GenericConnectorRecordQueryConfig';
import type { GenericConnectorRecordQueryResponse } from '../models/GenericConnectorRecordQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class GenericConnectorRecordService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Retrieves an instance of a GenericConnectorRecord object
     * Allows you to view document metadata for exactly one document based on the provided id.
     * @param id The ID of the GenericConnectorRecord. You obtain this ID from querying the GenericConnectorRecord object.
     * @returns GenericConnectorRecord Successful request and response.
     * @throws ApiError
     */
    public getGenericConnectorRecord(
        id: string,
    ): CancelablePromise<GenericConnectorRecord> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/GenericConnectorRecord/{id}',
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
     * Retrieves multiple GenericConnectorRecord objects by identifier
     * To learn more about `bulk`, refer to [Bulk GET operations](#section/Introduction/Bulk-GET-operations).
     * @param requestBody
     * @returns GenericConnectorRecordBulkResponse Successful request and response.
     * @throws ApiError
     */
    public bulkGenericConnectorRecord(
        requestBody?: GenericConnectorRecordBulkRequest,
    ): CancelablePromise<GenericConnectorRecordBulkResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/GenericConnectorRecord/bulk',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Queries for a GenericConnectorRecord object(s)
     * - The QUERY operation allows you to view document metadata for all documents in the run. You must query by exactly one `executionId`.
     * - You cannot query `connectorFields`.
     *
     * For general information about the structure of QUERY filters, their sample payloads, and how to handle the paged results, refer to [Query filters](#section/Introduction/Query-filters) and [Query paging](#section/Introduction/Query-paging).
     * @param requestBody  Possible properties include: id, executionConnectorId, executionId, connectionId, operationId, actionType, connectorType, atomId, dateProcessed, connectionName, operationName, errorMessage, status, documentIndex, incrementalDocumentIndex, size, startShape, retryable
     * @returns GenericConnectorRecordQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryGenericConnectorRecord(
        requestBody?: GenericConnectorRecordQueryConfig,
    ): CancelablePromise<GenericConnectorRecordQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/GenericConnectorRecord/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves additional results for a GenericConnectorRecord query
     * To learn about using `queryMore`, refer to [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns GenericConnectorRecordQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMoreGenericConnectorRecord(
        requestBody: string,
    ): CancelablePromise<GenericConnectorRecordQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/GenericConnectorRecord/queryMore',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
