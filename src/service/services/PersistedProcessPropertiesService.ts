/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PersistedProcessProperties } from '../models/PersistedProcessProperties';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PersistedProcessPropertiesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Modifies or updates a PersistedProcessProperties object
     * The UPDATE operation updates Persisted Process Property values for the specified Runtime. Using the UPDATE operation overrides all current property settings. Therefore, strongly recommends that you include a complete list of all Persisted Process properties you want to keep or update. If you do not list a current persisted process property in the Persisted Process properties object, the UPDATE operation deletes those properties.
     * @param id A unique ID assigned by the system to the Runtime.
     * @param requestBody
     * @returns PersistedProcessProperties Successful request and response.
     * @throws ApiError
     */
    public updatePersistedProcessProperties(
        id: string,
        requestBody?: PersistedProcessProperties,
    ): CancelablePromise<PersistedProcessProperties> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/PersistedProcessProperties/{id}',
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
