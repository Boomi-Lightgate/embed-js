/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AsyncOperationTokenResult } from '../models/AsyncOperationTokenResult';
import type { AtomDiskSpaceAsyncResponse } from '../models/AtomDiskSpaceAsyncResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AtomDiskSpaceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Retrieves an AtomDiskSpace object by identifier
     * The GET operation returns the current disk usage state of the given Runtime cloud attachment.
     * The initial GET operation returns a token for the specified Runtime cloud attachment. Subsequent GET operations return status code 202 (while the request is in progress) based on the returned token.
     * This first request is required to retrieve the authenticating token, which is used in a subsequent GET request.
     * >**Note:** `accountId` must always refer to the account ID of the parent Runtime cloud and not that of the attachment.
     * @param id ID of the Runtime cloud attachment.
     * @returns AsyncOperationTokenResult Successful request and response.
     * @throws ApiError
     */
    public asyncGetAtomDiskSpace(
        id: string,
    ): CancelablePromise<AsyncOperationTokenResult> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/async/AtomDiskSpace/{id}',
            path: {
                'id': id,
            },
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves an AtomDiskSpace object by token
     * Send a second HTTP GET request where accountId is the ID of the authenticating account for the request, and token is the token returned in the initial response. This second request authenticates the retrieval of the Runtime cloud attachments' disk space usage.
     * >**Note:** `accountId` must always refer to the account ID of the parent Runtime cloud and not that of the attachment.
     * @param token Takes in the token from a previous call to return a result.
     * @returns AtomDiskSpaceAsyncResponse Successful request and response.
     * @throws ApiError
     */
    public asyncTokenAtomDiskSpace(
        token: string,
    ): CancelablePromise<AtomDiskSpaceAsyncResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/async/AtomDiskSpace/response/{token}',
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
