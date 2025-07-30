/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LogDownload } from '../models/LogDownload';
import type { ProcessLog } from '../models/ProcessLog';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ProcessLogService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates a ProcessLog object
     * Download process run logs.
     * @param requestBody
     * @returns LogDownload Successful request and response.
     * @throws ApiError
     */
    public createProcessLog(
        requestBody?: ProcessLog,
    ): CancelablePromise<LogDownload> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ProcessLog',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
