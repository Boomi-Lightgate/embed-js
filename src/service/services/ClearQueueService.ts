/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ClearQueueRequest } from '../models/ClearQueueRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ClearQueueService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Executes an action on a ClearQueue object
     * - When you run the Clear queue messages action, it deletes all messages in a queue name from the queue. Note that this clears all messages in the queue; you cannot select and remove individual messages using this action. In addition, the action overrides any purge settings you might configure in the user interface.
     * - The immediate response indicates success in passing the request to the Runtime.
     * - If the specified Runtime queue does not contain any messages to clear, the response only returns a success message stating that the message passed even though there is no action taken on the Runtime.
     * - You can use the Get queue list API action to retrieve the number of messages in a queue, which works as an alternative way to check if the clear queue message action succeeded on the Runtime.
     * @param id The unique ID assigned by the system to the container. The Runtime ID for Runtimes, Runtime clusters, and Runtime clouds is found in the user interface by navigating to Manage > Runtime Management and viewing the Runtime Information panel for the selected container.
     * @param requestBody
     * @returns ClearQueueRequest Successful request and response.
     * @throws ApiError
     */
    public executeClearQueue(
        id: string,
        requestBody?: ClearQueueRequest,
    ): CancelablePromise<ClearQueueRequest> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ClearQueue/execute/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
