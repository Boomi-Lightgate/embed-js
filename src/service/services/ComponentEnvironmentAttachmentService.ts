/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ComponentEnvironmentAttachment } from '../models/ComponentEnvironmentAttachment';
import type { ComponentEnvironmentAttachmentQueryConfig } from '../models/ComponentEnvironmentAttachmentQueryConfig';
import type { ComponentEnvironmentAttachmentQueryResponse } from '../models/ComponentEnvironmentAttachmentQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ComponentEnvironmentAttachmentService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates a ComponentEnvironmentAttachment object
     * Attaches a component with a specific ID to the environment with a specific ID.
     * @param requestBody
     * @returns ComponentEnvironmentAttachment Successful request and response.
     * @throws ApiError
     */
    public createComponentEnvironmentAttachment(
        requestBody?: ComponentEnvironmentAttachment,
    ): CancelablePromise<ComponentEnvironmentAttachment> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ComponentEnvironmentAttachment',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Queries for a ComponentEnvironmentAttachment object(s)
     * For general information about the structure of QUERY filters, their sample payloads, and how to handle the paged results, refer to [Query filters](#section/Introduction/Query-filters) and [Query paging](#section/Introduction/Query-paging).
     * @param requestBody  Possible properties include: environmentId, componentId, componentType
     * @returns ComponentEnvironmentAttachmentQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryComponentEnvironmentAttachment(
        requestBody?: ComponentEnvironmentAttachmentQueryConfig,
    ): CancelablePromise<ComponentEnvironmentAttachmentQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ComponentEnvironmentAttachment/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves additional results for a ComponentEnvironmentAttachment query
     * To learn about using `queryMore`, refer to [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns ComponentEnvironmentAttachmentQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMoreComponentEnvironmentAttachment(
        requestBody: string,
    ): CancelablePromise<ComponentEnvironmentAttachmentQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ComponentEnvironmentAttachment/queryMore',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Deletes a ComponentEnvironmentAttachment object
     * Detaches a component from an environment where the attachment is specified by the conceptual Component Environment Attachment object ID. This ID is returned by the CREATE operation that originated the attachment and can also be obtained from a QUERY operation.
     * @param id
     * @returns any Successful request and response.
     * @throws ApiError
     */
    public deleteComponentEnvironmentAttachment(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/ComponentEnvironmentAttachment/{id}',
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
