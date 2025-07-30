/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OFTP2ConnectorRecordQueryConfig } from '../models/OFTP2ConnectorRecordQueryConfig';
import type { OFTP2ConnectorRecordQueryResponse } from '../models/OFTP2ConnectorRecordQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class Oftp2ConnectorRecordService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Queries for an OFTP2ConnectorRecord object
     * For general information about the structure of QUERY filters, their sample payloads, and how to handle the paged results, refer to [Query filters](#section/Introduction/Query-filters) and [Query paging](#section/Introduction/Query-paging).
     *
     * To filter by a custom field, use the format `customFields/fieldName` as the filter property, where `fieldName` is the element name of the custom field in the OFTP2 Connector Record structure. To get a list of the available custom fields, see [Custom Tracked Field](/api/platformapi#tag/CustomTrackedField) object.
     *
     *
     *
     * The STARTS_WITH operator accepts only values that do not include spaces.
     *
     * Sorting of the QUERY results are by the dateProcessed field value, from the oldest to the newest.
     * @param requestBody
     * @returns OFTP2ConnectorRecordQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryOftp2ConnectorRecord(
        requestBody?: OFTP2ConnectorRecordQueryConfig,
    ): CancelablePromise<OFTP2ConnectorRecordQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/OFTP2ConnectorRecord/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves additional results for an OFTP2ConnectorRecord query
     * To learn about using `queryMore`, refer to [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns OFTP2ConnectorRecordQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMoreOftp2ConnectorRecord(
        requestBody: string,
    ): CancelablePromise<OFTP2ConnectorRecordQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/OFTP2ConnectorRecord/queryMore',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
