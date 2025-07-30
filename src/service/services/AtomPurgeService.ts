/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AtomPurge } from '../models/AtomPurge';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AtomPurgeService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Modifies or updates an AtomPurge object
     * You can use the Purge Runtime cloud attachment operation to programmatically start the purge process for test and browse components, logs, processed documents, and temporary data for a Runtime Cloud attachment.
     * @param id The unique ID assigned by the system to the Runtime cloud attachment. The Runtime ID is found in the user interface by navigating to **Manage > Runtime Management** and viewing the Runtime Information panel for a selected Runtime.
     * @param requestBody
     * @returns AtomPurge Successful request and response.
     * @throws ApiError
     */
    public updateAtomPurge(
        id: string,
        requestBody?: AtomPurge,
    ): CancelablePromise<AtomPurge> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/AtomPurge/{id}',
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
