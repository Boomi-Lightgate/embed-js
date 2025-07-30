/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HL7ConnectorRecordQueryConfig } from '../models/HL7ConnectorRecordQueryConfig';
import type { HL7ConnectorRecordQueryResponse } from '../models/HL7ConnectorRecordQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class Hl7ConnectorRecordService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Queries for a HL7ConnectorRecord object(s)
     * To filter by a customField, use the format `customFields.fieldName` as the filter property where `fieldName` is the element name of the custom field in the HL7 Connector Record structure. To get a list of the available custom fields, refer to [CustomTrackedField object](#tag/CustomTrackedField).
     *
     * The STARTS_WITH operator accepts values that do not include spaces.
     *
     * For general information about the structure of QUERY filters, their sample payloads, and how to handle the paged results, refer to [Query filters](#section/Introduction/Query-filters) and [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns HL7ConnectorRecordQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryHl7ConnectorRecord(
        requestBody?: HL7ConnectorRecordQueryConfig,
    ): CancelablePromise<HL7ConnectorRecordQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/HL7ConnectorRecord/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves additional results for a HL7ConnectorRecord query
     * To learn about using `queryMore`, refer to [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns HL7ConnectorRecordQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMoreHl7ConnectorRecord(
        requestBody: string,
    ): CancelablePromise<HL7ConnectorRecordQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/HL7ConnectorRecord/queryMore',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
