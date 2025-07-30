/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AtomCounters } from '../models/AtomCounters';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AtomCountersService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Modifies or updates an AtomCounters object
     * The UPDATE operation updates Runtime Counter values for a specific Runtime. Using the UPDATE operation overrides all settings set on the current counter. However, calling the UPDATE operation does not delete any existing counters that are not included in the `AtomCounters` object.
     * @param id A unique ID assigned by the system to the Runtime.
     * @param requestBody
     * @returns AtomCounters Successful request and response.
     * @throws ApiError
     */
    public updateAtomCounters(
        id: string,
        requestBody?: AtomCounters,
    ): CancelablePromise<AtomCounters> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/AtomCounters/{id}',
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
