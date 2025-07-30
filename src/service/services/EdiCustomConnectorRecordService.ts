/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EdiCustomConnectorRecordQueryConfig } from '../models/EdiCustomConnectorRecordQueryConfig';
import type { EdiCustomConnectorRecordQueryResponse } from '../models/EdiCustomConnectorRecordQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class EdiCustomConnectorRecordService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Queries for an EdiCustomConnectorRecord object(s)
     * - To filter by a customField, use the format customFields. Use fieldName as the filter property where fieldName is the element name of the custom field in the EDI Custom Connector Record structure. To get a list of the available custom fields, refer to [Custom Tracked Field object](#tag/CustomTrackedField).
     * - The STARTS_WITH operator accepts values that do not include spaces.
     * - Sorting of the Query results are by the `dateProcessed` field value, from the oldest to the newest.
     *
     * For general information about the structure of QUERY filters, their sample payloads, and how to handle the paged results, refer to [Query filters](#section/Introduction/Query-filters) and [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns EdiCustomConnectorRecordQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryEdiCustomConnectorRecord(
        requestBody?: EdiCustomConnectorRecordQueryConfig,
    ): CancelablePromise<EdiCustomConnectorRecordQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/EdiCustomConnectorRecord/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves additional results for an EdiCustomConnectorRecord query
     * To learn about using `queryMore`, refer to [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns EdiCustomConnectorRecordQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMoreEdiCustomConnectorRecord(
        requestBody: string,
    ): CancelablePromise<EdiCustomConnectorRecordQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/EdiCustomConnectorRecord/queryMore',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
