/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AtomLog } from '../models/AtomLog';
import type { LogDownload } from '../models/LogDownload';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AtomLogService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates an AtomLog object
     * You can use the Download Atom Log operation to request and download Runtime logs.
     * @param requestBody
     * @returns LogDownload Successful request and response.
     * @throws ApiError
     */
    public createAtomLog(
        requestBody?: AtomLog,
    ): CancelablePromise<LogDownload> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/AtomLog',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
