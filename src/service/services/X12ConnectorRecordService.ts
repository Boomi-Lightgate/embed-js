/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { X12ConnectorRecordQueryConfig } from '../models/X12ConnectorRecordQueryConfig';
import type { X12ConnectorRecordQueryResponse } from '../models/X12ConnectorRecordQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class X12ConnectorRecordService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Queries for a X12ConnectorRecord object
     * To filter by a custom field, use the format customFields. Use the fieldName as the filter property where fieldName is the element name of the custom field in the X12 Connector Record structure. To get a list of the available custom fields see the [Custom Tracked Field](/api/platformapi#tag/CustomTrackedField) object.
     *
     * The STARTS_WITH operator only accepts values that do not include spaces.
     *
     * For general information about the structure of QUERY filters, their sample payloads, and how to handle the paged results, refer to [Query filters](#section/Introduction/Query-filters) and [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns X12ConnectorRecordQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryX12ConnectorRecord(
        requestBody?: X12ConnectorRecordQueryConfig,
    ): CancelablePromise<X12ConnectorRecordQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/X12ConnectorRecord/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves additional results for a X12ConnectorRecord query
     * To learn about using `queryMore`, refer to [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns X12ConnectorRecordQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMoreX12ConnectorRecord(
        requestBody: string,
    ): CancelablePromise<X12ConnectorRecordQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/X12ConnectorRecord/queryMore',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
