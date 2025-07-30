/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProcessEnvironmentAttachment } from '../models/ProcessEnvironmentAttachment';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ProcessEnvironmentAttachmentService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates a ProcessEnvironmentAttachment object
     * Attaches a process having the specified ID to the environment having the specified ID.
     * @param requestBody
     * @returns ProcessEnvironmentAttachment Successful request and response.
     * @throws ApiError
     */
    public createProcessEnvironmentAttachment(
        requestBody?: ProcessEnvironmentAttachment,
    ): CancelablePromise<ProcessEnvironmentAttachment> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ProcessEnvironmentAttachment',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
