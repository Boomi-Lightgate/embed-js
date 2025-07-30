/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DocumentCountAccountGroupQueryConfig } from '../models/DocumentCountAccountGroupQueryConfig';
import type { DocumentCountAccountGroupQueryResponse } from '../models/DocumentCountAccountGroupQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DocumentCountAccountGroupService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Queries for a DocumentCountAccountGroup object(s)
     * - You can use the EQUALS operator only with the `accountGroupId` filter parameter.
     * - The authenticating user for a QUERY operation must have the Dashboard privilege.
     *
     * For general information about the structure of QUERY filters, their sample payloads, and how to handle the paged results, refer to [Query filters](#section/Introduction/Query-filters) and [Query paging](#section/Introduction/Query-paging).
     * @param requestBody  Possible properties include: accountGroupId, processDate
     * @returns DocumentCountAccountGroupQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryDocumentCountAccountGroup(
        requestBody?: DocumentCountAccountGroupQueryConfig,
    ): CancelablePromise<DocumentCountAccountGroupQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/DocumentCountAccountGroup/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves additional results for a DocumentCountAccountGroup query
     * To learn about using `queryMore`, refer to [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns DocumentCountAccountGroupQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMoreDocumentCountAccountGroup(
        requestBody: string,
    ): CancelablePromise<DocumentCountAccountGroupQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/DocumentCountAccountGroup/queryMore',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
