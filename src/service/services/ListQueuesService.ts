/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AsyncOperationTokenResult } from '../models/AsyncOperationTokenResult';
import type { ListQueuesAsyncResponse } from '../models/ListQueuesAsyncResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ListQueuesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Retrieves a ListQueues object by identifier
     * After receiving a 200 status code response, send a second GET request where {accountId} is the ID of the account authenticating the request and sessionId is the ID provided in the initial response.
     * @param token Takes in the token from a previous call to return a result.
     * @returns ListQueuesAsyncResponse Successful request and response.
     * @throws ApiError
     */
    public asyncTokenListQueues(
        token: string,
    ): CancelablePromise<ListQueuesAsyncResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/async/ListQueues/response/{token}',
            path: {
                'token': token,
            },
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves a ListQueues object by identifier
     * To retrieve a list of message queues, Send an HTTP GET where accountId is the account that you are authenticating with and containerId is the ID of the Runtime, Runtime cluster, or Runtime cloud which owns the message queue that you want to retrieve.
     * >**Note:** You can find the Account ID for an account by navigating to Settings > Account Information and Setup in the user interface. Additionally, you can find the container ID by navigating to Manage > Runtime Management and viewing the Runtime ID value on the Runtime Information panel for a selected Runtime, Runtime cluster, or Runtime cloud.
     * @param id
     * @returns AsyncOperationTokenResult Successful request and response.
     * @throws ApiError
     */
    public asyncGetListQueues(
        id: string,
    ): CancelablePromise<AsyncOperationTokenResult> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/async/ListQueues/{id}',
            path: {
                'id': id,
            },
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
