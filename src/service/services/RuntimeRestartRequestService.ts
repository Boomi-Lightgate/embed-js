/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RuntimeRestartRequest } from '../models/RuntimeRestartRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class RuntimeRestartRequestService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates a RuntimeRestartRequest object
     * Restarts the runtime.
     *
     * - The client sends a runtime restart request to the platform API that specifies the runtimeId that you want to restart.
     * - The platform returns the status code and message while the request is in progress. A successful response implies the restart request was submitted, not when the runtime restart is completed.
     * @param requestBody
     * @returns RuntimeRestartRequest Successful request and response.
     * @throws ApiError
     */
    public createRuntimeRestartRequest(
        requestBody?: RuntimeRestartRequest,
    ): CancelablePromise<RuntimeRestartRequest> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/RuntimeRestartRequest',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
