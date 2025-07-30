/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChangeListenerStatusRequest } from '../models/ChangeListenerStatusRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ChangeListenerStatusService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Update listeners status
     * You can use the changeListenerStatus operation to pause, resume, or restart listeners. A successful changeListenerStatus call returns an empty changeListenerStatusResponse to indicate acceptance of the request.
     * @param requestBody
     * @returns any Successful request and response.
     * @throws ApiError
     */
    public postChangeListenerStatus(
        requestBody?: ChangeListenerStatusRequest,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ChangeListenerStatus',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
