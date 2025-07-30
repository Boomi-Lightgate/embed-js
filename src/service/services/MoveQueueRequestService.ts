/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MoveQueueRequest } from '../models/MoveQueueRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class MoveQueueRequestService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates a MoveQueueRequest object
     * Moves messages from one Runtime queue to another.
     *
     * - You must have the **Runtime Management** privilege to use the Move queue request operation.
     * - You can only move messages between queues of the same type. For example, moving queue messages from a point-to-point queue to a *Publish/Subscribe* queue results in an error.
     * - Any Runtime queues that you specify in the request must currently exist on the Runtime. For clarification, you cannot create a new endpoint using the CREATE operation.
     * - You must supply the *AtomID*, *SourceQueue*, *QueueName*, *DLQ*, and *DestinationQueue* fields in the request.
     * - If the operation returns an error, it logs a message in the Runtime, Runtime cluster, or Runtime cloud, but is not sent to the platform.
     * - You cannot track move updates directly through this operation. Instead, to see if the action is in progress or complete, use the Queue Management API or the ListQueues API to observe the number of messages in the queue.
     * @param requestBody
     * @returns MoveQueueRequest Successful request and response.
     * @throws ApiError
     */
    public createMoveQueueRequest(
        requestBody?: MoveQueueRequest,
    ): CancelablePromise<MoveQueueRequest> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/MoveQueueRequest',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
