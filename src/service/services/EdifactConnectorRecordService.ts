/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EDIFACTConnectorRecordQueryConfig } from '../models/EDIFACTConnectorRecordQueryConfig';
import type { EDIFACTConnectorRecordQueryResponse } from '../models/EDIFACTConnectorRecordQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class EdifactConnectorRecordService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Queries for an EDIFACTConnectorRecord object(s)
     * - To filter by a customField, use the format customFields/fieldName as the filter property where fieldName is the element name of the custom field in the EDIFACT Connector Record structure. To get a list of the available custom fields, refer to [Custom Tracked Field object](#tag/CustomTrackedField).
     * - The STARTS_WITH operator accepts values that do not include spaces only.
     *
     * For general information about the structure of QUERY filters, their sample payloads, and how to handle the paged results, refer to [Query filters](#section/Introduction/Query-filters) and [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns EDIFACTConnectorRecordQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryEdifactConnectorRecord(
        requestBody?: EDIFACTConnectorRecordQueryConfig,
    ): CancelablePromise<EDIFACTConnectorRecordQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/EDIFACTConnectorRecord/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves additional results for an EDIFACTConnectorRecord query
     * To learn about using `queryMore`, refer to [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns EDIFACTConnectorRecordQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMoreEdifactConnectorRecord(
        requestBody: string,
    ): CancelablePromise<EDIFACTConnectorRecordQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/EDIFACTConnectorRecord/queryMore',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
