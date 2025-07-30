/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EventQueryConfig } from '../models/EventQueryConfig';
import type { EventQueryResponse } from '../models/EventQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class EventService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Queries for an Event object(s)
     * For general information about the structure of QUERY filters, their sample payloads, and how to handle the paged results, refer to [Query filters](#section/Introduction/Query-filters) and [Query paging](#section/Introduction/Query-paging).
     * @param requestBody  Possible properties include: eventId, accountId, atomId, atomName, eventLevel, eventDate, status, eventType, executionId, title, updateDate, startTime, endTime, errorDocumentCount, inboundDocumentCount, outboundDocumentCount, processName, recordDate, error, environment, classification
     * @returns EventQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryEvent(
        requestBody?: EventQueryConfig,
    ): CancelablePromise<EventQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Event/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves additional results for an Event query
     * To learn about using `queryMore`, refer to [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns EventQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMoreEvent(
        requestBody: string,
    ): CancelablePromise<EventQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Event/queryMore',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
