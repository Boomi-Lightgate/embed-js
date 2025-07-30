/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RerunDocument } from '../models/RerunDocument';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class RerunDocumentService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates a RerunDocument object
     * Allows you to reprocess one or more documents from a previous run.
     * @param requestBody
     * @returns RerunDocument Successful request and response.
     * @throws ApiError
     */
    public createRerunDocument(
        requestBody?: RerunDocument,
    ): CancelablePromise<RerunDocument> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/RerunDocument',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
