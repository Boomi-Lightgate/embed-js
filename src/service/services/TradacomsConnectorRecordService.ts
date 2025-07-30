/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TradacomsConnectorRecordQueryConfig } from '../models/TradacomsConnectorRecordQueryConfig';
import type { TradacomsConnectorRecordQueryResponse } from '../models/TradacomsConnectorRecordQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TradacomsConnectorRecordService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Queries for a TradacomsConnectorRecord object(s)
     * - To filter by a custom field, use the format `customFields`. Use the `fieldName` as the filter property where `fieldName` is the element name of the custom field in the record structure. To get a list of the available custom fields see the [Custom Tracked Field](#tag/CustomTrackedField) object.
     *
     * - The STARTS_WITH operator only accepts values that do not include spaces.
     *
     * For general information about the structure of QUERY filters, their sample payloads, and how to handle the paged results, refer to [Query filters](#section/Introduction/Query-filters) and [Query paging](#section/Introduction/Query-paging).
     *
     *
     * @param requestBody
     * @returns TradacomsConnectorRecordQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryTradacomsConnectorRecord(
        requestBody?: TradacomsConnectorRecordQueryConfig,
    ): CancelablePromise<TradacomsConnectorRecordQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/TradacomsConnectorRecord/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves additional results for a TradacomsConnectorRecord query
     * To learn about using `queryMore`, refer to [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns TradacomsConnectorRecordQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMoreTradacomsConnectorRecord(
        requestBody: string,
    ): CancelablePromise<TradacomsConnectorRecordQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/TradacomsConnectorRecord/queryMore',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
