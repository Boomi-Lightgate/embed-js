/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CancelExecutionService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Cancel execution operation
     * This API is supported by the Platform Partner APIs. Refer to the Partner API Reference.
     * @returns any Success response
     * @throws ApiError
     */
    public getCancelExecution(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/CancelExecution',
        });
    }
}
