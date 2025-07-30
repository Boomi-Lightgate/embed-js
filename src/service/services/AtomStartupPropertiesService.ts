/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AtomStartupProperties } from '../models/AtomStartupProperties';
import type { AtomStartupPropertiesBulkRequest } from '../models/AtomStartupPropertiesBulkRequest';
import type { AtomStartupPropertiesBulkResponse } from '../models/AtomStartupPropertiesBulkResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AtomStartupPropertiesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Retrieves an instance of an AtomStartupProperties object
     * Retrieves the startup properties for the Runtime, Runtime cluster, or Runtime cloud with the specified ID.
     * @param id A unique ID for the Runtime, Runtime cluster, or Runtime cloud. (This API is not applicable for runtimes attached to clouds)
     * @returns AtomStartupProperties Successful request and response.
     * @throws ApiError
     */
    public getAtomStartupProperties(
        id: string,
    ): CancelablePromise<AtomStartupProperties> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/AtomStartupProperties/{id}',
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
     * Retrieves multiple AtomStartupProperties objects by identifier
     * To learn more about `bulk`, refer to [Bulk GET operations](#section/Introduction/Bulk-GET-operations).
     * @param requestBody
     * @returns AtomStartupPropertiesBulkResponse Successful request and response.
     * @throws ApiError
     */
    public bulkAtomStartupProperties(
        requestBody?: AtomStartupPropertiesBulkRequest,
    ): CancelablePromise<AtomStartupPropertiesBulkResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/AtomStartupProperties/bulk',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
