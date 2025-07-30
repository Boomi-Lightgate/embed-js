/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AtomWorkerLog } from '../models/AtomWorkerLog';
import type { LogDownload } from '../models/LogDownload';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AtomWorkerLogService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates an AtomWorkerLog object
     * Allows users to programmatically retrieve a link for downloading a given Runtime workers log.
     * @param requestBody
     * @returns LogDownload Successful request and response.
     * @throws ApiError
     */
    public createAtomWorkerLog(
        requestBody?: AtomWorkerLog,
    ): CancelablePromise<LogDownload> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/AtomWorkerLog',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
