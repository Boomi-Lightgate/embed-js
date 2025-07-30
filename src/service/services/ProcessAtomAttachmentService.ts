/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProcessAtomAttachment } from '../models/ProcessAtomAttachment';
import type { ProcessAtomAttachmentQueryConfig } from '../models/ProcessAtomAttachmentQueryConfig';
import type { ProcessAtomAttachmentQueryResponse } from '../models/ProcessAtomAttachmentQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ProcessAtomAttachmentService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates a ProcessAtomAttachment object
     * Attaches a process having the specified ID to the Runtime having the specified ID.
     * @param requestBody
     * @returns ProcessAtomAttachment Successful request and response.
     * @throws ApiError
     */
    public createProcessAtomAttachment(
        requestBody?: ProcessAtomAttachment,
    ): CancelablePromise<ProcessAtomAttachment> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ProcessAtomAttachment',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Queries for a ProcessAtomAttachment object(s)
     * For general information about the structure of QUERY filters, their sample payloads, and how to handle the paged results, refer to [Query filters](#section/Introduction/Query-filters) and [Query paging](#section/Introduction/Query-paging).
     * @param requestBody  Possible properties include: atomId, processId, componentType
     * @returns ProcessAtomAttachmentQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryProcessAtomAttachment(
        requestBody?: ProcessAtomAttachmentQueryConfig,
    ): CancelablePromise<ProcessAtomAttachmentQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ProcessAtomAttachment/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves additional results for a ProcessAtomAttachment query
     * To learn about using `queryMore`, refer to [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns ProcessAtomAttachmentQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMoreProcessAtomAttachment(
        requestBody: string,
    ): CancelablePromise<ProcessAtomAttachmentQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ProcessAtomAttachment/queryMore',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Deletes a ProcessAtomAttachment object
     * Detaches a process from a Runtime where the attachment is specified by the conceptual Process Atom Attachment object ID.
     * @param id
     * @returns any Successful request and response.
     * @throws ApiError
     */
    public deleteProcessAtomAttachment(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/ProcessAtomAttachment/{id}',
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
