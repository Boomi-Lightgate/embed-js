/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AtomConnectionFieldExtensionSummaryQueryConfig } from '../models/AtomConnectionFieldExtensionSummaryQueryConfig';
import type { AtomConnectionFieldExtensionSummaryQueryResponse } from '../models/AtomConnectionFieldExtensionSummaryQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AtomConnectionFieldExtensionSummaryService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Queries for an AtomConnectionFieldExtensionSummary object(s)
     * All filters are required except for `extensionGroupId`, which is required only for a multi-install integration pack. You can obtain valid values for each filter by using the QUERY operation on the Atom Extensions object.
     *
     * For general information about the structure of QUERY filters, their sample payloads, and how to handle the paged results, refer to [Query filters](#section/Introduction/Query-filters) and [Query paging](#section/Introduction/Query-paging).
     * @param requestBody  Possible properties include: atomId, extensionGroupId, connectionId, fieldId
     * @returns AtomConnectionFieldExtensionSummaryQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryAtomConnectionFieldExtensionSummary(
        requestBody?: AtomConnectionFieldExtensionSummaryQueryConfig,
    ): CancelablePromise<AtomConnectionFieldExtensionSummaryQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/AtomConnectionFieldExtensionSummary/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves additional results for an AtomConnectionFieldExtensionSummary query
     * To learn about using `queryMore`, refer to [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns AtomConnectionFieldExtensionSummaryQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMoreAtomConnectionFieldExtensionSummary(
        requestBody: string,
    ): CancelablePromise<AtomConnectionFieldExtensionSummaryQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/AtomConnectionFieldExtensionSummary/queryMore',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
