/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ODETTEConnectorRecordQueryConfig } from '../models/ODETTEConnectorRecordQueryConfig';
import type { ODETTEConnectorRecordQueryResponse } from '../models/ODETTEConnectorRecordQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class OdetteConnectorRecordService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Queries for an ODETTEConnectorRecord object(s).
     * For general information about the structure of QUERY filters, their sample payloads, and how to handle the paged results, refer to [Query filters](#section/Introduction/Query-filters) and [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns ODETTEConnectorRecordQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryOdetteConnectorRecord(
        requestBody?: ODETTEConnectorRecordQueryConfig,
    ): CancelablePromise<ODETTEConnectorRecordQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ODETTEConnectorRecord/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves additional results for an ODETTEConnectorRecord query.
     * To learn about using `queryMore`, refer to [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns ODETTEConnectorRecordQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMoreOdetteConnectorRecord(
        requestBody: string,
    ): CancelablePromise<ODETTEConnectorRecordQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ODETTEConnectorRecord/queryMore',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
