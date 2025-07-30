/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InstallerToken } from '../models/InstallerToken';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class InstallerTokenService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates an InstallerToken object
     * Creates an installer token of a specific type that is valid for a specific number of minutes.
     * @param requestBody
     * @returns InstallerToken Successful request and response.
     * @throws ApiError
     */
    public createInstallerToken(
        requestBody?: InstallerToken,
    ): CancelablePromise<InstallerToken> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/InstallerToken',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
