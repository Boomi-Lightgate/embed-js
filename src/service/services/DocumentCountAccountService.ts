/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DocumentCountAccountQueryConfig } from '../models/DocumentCountAccountQueryConfig';
import type { DocumentCountAccountQueryResponse } from '../models/DocumentCountAccountQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DocumentCountAccountService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Queries for a DocumentCountAccount object(s)
     * The authenticating user for a QUERY operation must have the Dashboard privilege.
     *
     * For general information about the structure of QUERY filters, their sample payloads, and how to handle the paged results, refer to [Query filters](#section/Introduction/Query-filters) and [Query paging](#section/Introduction/Query-paging).
     * @param requestBody  Possible properties include: environmentId, atomId, processDate
     * @returns DocumentCountAccountQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryDocumentCountAccount(
        requestBody?: DocumentCountAccountQueryConfig,
    ): CancelablePromise<DocumentCountAccountQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/DocumentCountAccount/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves additional results for a DocumentCountAccount query
     * To learn about using `queryMore`, refer to [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns DocumentCountAccountQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMoreDocumentCountAccount(
        requestBody: string,
    ): CancelablePromise<DocumentCountAccountQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/DocumentCountAccount/queryMore',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
