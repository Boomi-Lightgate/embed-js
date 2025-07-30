/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IntegrationPackAtomAttachment } from '../models/IntegrationPackAtomAttachment';
import type { IntegrationPackAtomAttachmentQueryConfig } from '../models/IntegrationPackAtomAttachmentQueryConfig';
import type { IntegrationPackAtomAttachmentQueryResponse } from '../models/IntegrationPackAtomAttachmentQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class IntegrationPackAtomAttachmentService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates an IntegrationPackAtomAttachment object
     * Attaches an integration pack instance having the specified ID to the Runtime having the specified ID.
     * @param requestBody
     * @returns IntegrationPackAtomAttachment Successful request and response.
     * @throws ApiError
     */
    public createIntegrationPackAtomAttachment(
        requestBody?: IntegrationPackAtomAttachment,
    ): CancelablePromise<IntegrationPackAtomAttachment> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/IntegrationPackAtomAttachment',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Queries for an IntegrationPackAtomAttachment object(s)
     * For general information about the structure of QUERY filters, their sample payloads, and how to handle the paged results, refer to [Query filters](#section/Introduction/Query-filters) and [Query paging](#section/Introduction/Query-paging).
     * @param requestBody  Possible properties include: atomId, integrationPackInstanceId
     * @returns IntegrationPackAtomAttachmentQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryIntegrationPackAtomAttachment(
        requestBody?: IntegrationPackAtomAttachmentQueryConfig,
    ): CancelablePromise<IntegrationPackAtomAttachmentQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/IntegrationPackAtomAttachment/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves additional results for an IntegrationPackAtomAttachment query
     * To learn about using `queryMore`, refer to [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns IntegrationPackAtomAttachmentQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMoreIntegrationPackAtomAttachment(
        requestBody: string,
    ): CancelablePromise<IntegrationPackAtomAttachmentQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/IntegrationPackAtomAttachment/queryMore',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Deletes an IntegrationPackAtomAttachment object
     * Detaches an integration pack instance from a Runtime, where the attachment is specified by the conceptual Integration Pack Atom Attachment object ID. This ID can be obtained from a QUERY operation.
     * @param id The object’s conceptual ID, which is synthesized from the Runtime and integration pack instance IDs.
     * @returns any Successful request and response.
     * @throws ApiError
     */
    public deleteIntegrationPackAtomAttachment(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/IntegrationPackAtomAttachment/{id}',
            path: {
                'id': id,
            },
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
