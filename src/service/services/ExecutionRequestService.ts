/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExecutionRequest } from '../models/ExecutionRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ExecutionRequestService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates an ExecutionRequest object
     * Submits the process to run and returns results immediately. The operation does not wait for the run to complete.
     *
     * - The Execution Request response returns a requestID, which you use to make a subsequent call to the [Execution Record object](/api/platformapi#tag/ExecutionRecord) to retrieve detailed information about the process run.
     * - This operation returns an error when the client:
     * -  Fails authentication or does not have the correct permissions
     * -  Supplies an invalid Account ID
     * -  Supplies an invalid Runtime ID
     * -  Attempts to reach a deleted Atom
     * -  Supplies an invalid Process ID
     * -  Missing privileges to run processes on the given Runtime or its associated Environment.
     * @param requestBody
     * @returns ExecutionRequest Successful request and response.
     * @throws ApiError
     */
    public createExecutionRequest(
        requestBody?: ExecutionRequest,
    ): CancelablePromise<ExecutionRequest> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ExecutionRequest',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
