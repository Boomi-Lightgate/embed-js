/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AsyncOperationTokenResult } from '../models/AsyncOperationTokenResult';
import type { ListenerStatusAsyncResponse } from '../models/ListenerStatusAsyncResponse';
import type { ListenerStatusQueryConfig } from '../models/ListenerStatusQueryConfig';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ListenerStatusService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Retrieves a ListenerStatus object by identifier
     * Send an HTTP POST where {accountId} is the ID of the authenticating account for the request.
     * >**Note:** For backward compatibility, Boomi continues to support the legacy URL: https://api.boomi.com/api/rest/v1/accountId/ListenerStatus/query/async.
     *
     * For general information about the structure of QUERY filters, their sample payloads, and how to handle the paged results, refer to [Query filters](#section/Introduction/Query-filters) and [Query paging](#section/Introduction/Query-paging).
     * @param requestBody  Possible properties include: listenerId, containerId
     * @returns AsyncOperationTokenResult Successful request and response.
     * @throws ApiError
     */
    public asyncGetListenerStatus(
        requestBody?: ListenerStatusQueryConfig,
    ): CancelablePromise<AsyncOperationTokenResult> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/async/ListenerStatus/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves a ListenerStatus object by token
     * The ordinary GET operation retrieves async results from the QUERY. Send an HTTP GET where {accountId} is the account that you are authenticating with and {token} is the listener status token returned by your QUERY request.
     * >**Note:** For backward compatibility, Boomi continues to support the legacy URL: https://api.boomi.com/api/rest/v1/accountId/ListenerStatus/query/async.
     * @param token Takes in the token from a previous call to return a result.
     * @returns ListenerStatusAsyncResponse Successful request and response.
     * @throws ApiError
     */
    public asyncTokenListenerStatus(
        token: string,
    ): CancelablePromise<ListenerStatusAsyncResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/async/ListenerStatus/response/{token}',
            path: {
                'token': token,
            },
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
