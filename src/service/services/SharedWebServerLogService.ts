/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SharedWebServerLogService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Download shared web server log
     * This API is documented externally. Please visit the following link for full details:
     * @returns void
     * @throws ApiError
     */
    public postSharedWebServerLog(): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/SharedWebServerLog',
        });
    }
}
