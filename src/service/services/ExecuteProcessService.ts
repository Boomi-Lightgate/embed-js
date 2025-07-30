/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ExecuteProcessService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Execute process operation
     * This API is documented externally. Please visit the following link for full details:
     * @returns any Resource created
     * @throws ApiError
     */
    public postExecuteProcess(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ExecuteProcess',
        });
    }
}
