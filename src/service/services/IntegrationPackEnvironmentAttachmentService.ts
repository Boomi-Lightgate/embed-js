/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IntegrationPackEnvironmentAttachment } from '../models/IntegrationPackEnvironmentAttachment';
import type { IntegrationPackEnvironmentAttachmentQueryConfig } from '../models/IntegrationPackEnvironmentAttachmentQueryConfig';
import type { IntegrationPackEnvironmentAttachmentQueryResponse } from '../models/IntegrationPackEnvironmentAttachmentQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class IntegrationPackEnvironmentAttachmentService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates an IntegrationPackEnvironmentAttachment object
     * Attaches an integration pack instance having the specified ID to the environment having the specified ID.
     * @param requestBody
     * @returns IntegrationPackEnvironmentAttachment Successful request and response.
     * @throws ApiError
     */
    public createIntegrationPackEnvironmentAttachment(
        requestBody?: IntegrationPackEnvironmentAttachment,
    ): CancelablePromise<IntegrationPackEnvironmentAttachment> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/IntegrationPackEnvironmentAttachment',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Queries for an IntegrationPackEnvironmentAttachment object(s)
     * For general information about the structure of QUERY filters, their sample payloads, and how to handle the paged results, refer to [Query filters](#section/Introduction/Query-filters) and [Query paging](#section/Introduction/Query-paging).
     * @param requestBody  Possible properties include: environmentId, integrationPackInstanceId
     * @returns IntegrationPackEnvironmentAttachmentQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryIntegrationPackEnvironmentAttachment(
        requestBody?: IntegrationPackEnvironmentAttachmentQueryConfig,
    ): CancelablePromise<IntegrationPackEnvironmentAttachmentQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/IntegrationPackEnvironmentAttachment/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves additional results for an IntegrationPackEnvironmentAttachment query
     * To learn about using `queryMore`, refer to [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns IntegrationPackEnvironmentAttachmentQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMoreIntegrationPackEnvironmentAttachment(
        requestBody: string,
    ): CancelablePromise<IntegrationPackEnvironmentAttachmentQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/IntegrationPackEnvironmentAttachment/queryMore',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Deletes an IntegrationPackEnvironmentAttachment object
     * Detaches an integration pack instance from an environment where the conceptual Integration Pack Environment Attachment object ID specifies the attachment. If you successfully detach the integration pack instance from the environment, the response is `true`.
     * @param id The conceptual Integration Pack Environment Attachment object ID
     * @returns any Successful request and response.
     * @throws ApiError
     */
    public deleteIntegrationPackEnvironmentAttachment(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/IntegrationPackEnvironmentAttachment/{id}',
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
