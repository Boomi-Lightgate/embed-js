/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EnvironmentAtomAttachment } from '../models/EnvironmentAtomAttachment';
import type { EnvironmentAtomAttachmentQueryConfig } from '../models/EnvironmentAtomAttachmentQueryConfig';
import type { EnvironmentAtomAttachmentQueryResponse } from '../models/EnvironmentAtomAttachmentQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class EnvironmentAtomAttachmentService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates an EnvironmentAtomAttachment object
     * Attaches a Runtime having the specified ID to the environment having the specified ID. Attaching an already attached Runtime moves the Runtime to the environment specified in the request.
     *
     * >**Note:** For accounts with Basic environment support, you can attach a single Runtime to each environment. For accounts with Unlimited environment support, you can attach have an unlimited number of Runtimes attached in each environment.
     * @param requestBody
     * @returns EnvironmentAtomAttachment Successful request and response.
     * @throws ApiError
     */
    public createEnvironmentAtomAttachment(
        requestBody?: EnvironmentAtomAttachment,
    ): CancelablePromise<EnvironmentAtomAttachment> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/EnvironmentAtomAttachment',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Queries for an EnvironmentAtomAttachment object(s)
     * For general information about the structure of QUERY filters, their sample payloads, and how to handle the paged results, refer to [Query filters](#section/Introduction/Query-filters) and [Query paging](#section/Introduction/Query-paging).
     * @param requestBody  Possible properties include: atomId, environmentId
     * @returns EnvironmentAtomAttachmentQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryEnvironmentAtomAttachment(
        requestBody?: EnvironmentAtomAttachmentQueryConfig,
    ): CancelablePromise<EnvironmentAtomAttachmentQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/EnvironmentAtomAttachment/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves additional results for an EnvironmentAtomAttachment query
     * To learn about using `queryMore`, refer to [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns EnvironmentAtomAttachmentQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMoreEnvironmentAtomAttachment(
        requestBody: string,
    ): CancelablePromise<EnvironmentAtomAttachmentQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/EnvironmentAtomAttachment/queryMore',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Deletes an EnvironmentAtomAttachment object
     * Detaches a Runtime from an environment where the attachment is specified by the conceptual Environment Atom Attachment object ID. This ID is returned by the CREATE operation that originated the attachment and can also be obtained from a QUERY operation. If you successfully detach the Runtime from the environment, the response is  `<true/>`.
     * @param id The object’s conceptual ID, which is synthesized from the Runtime and environment IDs.
     * @returns any Successful request and response.
     * @throws ApiError
     */
    public deleteEnvironmentAtomAttachment(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/EnvironmentAtomAttachment/{id}',
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
