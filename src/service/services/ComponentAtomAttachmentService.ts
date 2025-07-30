/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ComponentAtomAttachment } from '../models/ComponentAtomAttachment';
import type { ComponentAtomAttachmentQueryConfig } from '../models/ComponentAtomAttachmentQueryConfig';
import type { ComponentAtomAttachmentQueryResponse } from '../models/ComponentAtomAttachmentQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ComponentAtomAttachmentService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates a ComponentAtomAttachment object
     * Attaches a component with a specific ID to the Runtime with a specific ID. You must have the Runtime Management privilege to perform the CREATE operation. If you have the Runtime Management Read Access privilege, you cannot attach components.
     * @param requestBody
     * @returns ComponentAtomAttachment Successful request and response.
     * @throws ApiError
     */
    public createComponentAtomAttachment(
        requestBody?: ComponentAtomAttachment,
    ): CancelablePromise<ComponentAtomAttachment> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ComponentAtomAttachment',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Queries for a ComponentAtomAttachment object(s)
     * For general information about the structure of QUERY filters, their sample payloads, and how to handle the paged results, refer to [Query filters](#section/Introduction/Query-filters) and [Query paging](#section/Introduction/Query-paging).
     * @param requestBody  Possible properties include: atomId, componentId, componentType
     * @returns ComponentAtomAttachmentQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryComponentAtomAttachment(
        requestBody?: ComponentAtomAttachmentQueryConfig,
    ): CancelablePromise<ComponentAtomAttachmentQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ComponentAtomAttachment/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves additional results for a ComponentAtomAttachment query
     * To learn about using `queryMore`, refer to [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns ComponentAtomAttachmentQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMoreComponentAtomAttachment(
        requestBody: string,
    ): CancelablePromise<ComponentAtomAttachmentQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ComponentAtomAttachment/queryMore',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Deletes a ComponentAtomAttachment object
     * Detaches a component from a Runtime where the attachment is specified by the conceptual Component Atom Attachment object ID. This ID is returned by the CREATE operation that originated the attachment and can also be obtained from a QUERY operation. You must have the Runtime Management privilege to perform the DELETE operation.
     * @param id
     * @returns any Successful request and response.
     * @throws ApiError
     */
    public deleteComponentAtomAttachment(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/ComponentAtomAttachment/{id}',
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
