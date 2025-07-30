/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AsyncOperationTokenResult } from '../models/AsyncOperationTokenResult';
import type { AtomSecurityPolicies } from '../models/AtomSecurityPolicies';
import type { AtomSecurityPoliciesAsyncResponse } from '../models/AtomSecurityPoliciesAsyncResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AtomSecurityPoliciesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Modifies or updates an AtomSecurityPolicies object
     * Updates the security policy for the specified Runtime cloud or Runtime cluster. You can add, update, or delete permissions by using the UPDATE operation. You can add custom Java runtime permissions you specify in an UPDATE operation to the appropriate High-security policy file. In addition, all High-security policy files contain custom permissions that you specify in the <common> section.
     * As confirmation of the changes made, the UPDATE operation returns a copy of the request.
     * @param id The runtime (container) id for the applicable runtime (accepts only Runtime cloud cluster and regular Runtime cluster types, no basic runtimes or cloud attachments).
     * @param requestBody
     * @returns AtomSecurityPolicies Successful request and response.
     * @throws ApiError
     */
    public updateAtomSecurityPolicies(
        id: string,
        requestBody?: AtomSecurityPolicies,
    ): CancelablePromise<AtomSecurityPolicies> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/AtomSecurityPolicies/{id}',
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
    /**
     * Retrieves an AtomSecurityPolicies object by identifier
     * The initial GET operation returns a security policy token for the specified Runtime cloud or Runtime cluster. Subsequent GET operations return status code 202 (while the request is in progress) or the custom contents of a security policy based on the token that was returned.
     *
     * The GET operation returns only custom runtime permissions that you added to the security policy, not the entire policy file. If you did not update the security policy for a given Runtime cloud or Runtime cluster, the response to a GET operation is empty.
     * @param id The runtime (container) id for the applicable runtime (accepts only Runtime cloud cluster and regular runtime cluster types, no basic runtimes or cloud attachments).
     * @returns AsyncOperationTokenResult Successful request and response.
     * @throws ApiError
     */
    public asyncGetAtomSecurityPolicies(
        id: string,
    ): CancelablePromise<AsyncOperationTokenResult> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/async/AtomSecurityPolicies/{id}',
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
     * Retrieves AtomSecurityPolicies objects by token
     * Using the token from the initial GET response, send an HTTP GET where accountId is the account with which you are authenticating.
     *
     * Custom Java runtime permissions listed in the `<common>` section apply to all High security policy files (procrunner-HIGH.policy, procbrowser-HIGH.policy, and procworker-HIGH.policy). Custom permissions listed in a specific section, such as `<runner>`, apply only to the associated security policy file.
     * @param token Takes in the token from a previous call to return a result.
     * @returns AtomSecurityPoliciesAsyncResponse Successful request and response.
     * @throws ApiError
     */
    public asyncTokenAtomSecurityPolicies(
        token: string,
    ): CancelablePromise<AtomSecurityPoliciesAsyncResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/async/AtomSecurityPolicies/response/{token}',
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
