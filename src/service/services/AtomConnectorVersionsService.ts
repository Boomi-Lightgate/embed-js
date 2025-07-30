/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AtomConnectorVersions } from '../models/AtomConnectorVersions';
import type { AtomConnectorVersionsBulkRequest } from '../models/AtomConnectorVersionsBulkRequest';
import type { AtomConnectorVersionsBulkResponse } from '../models/AtomConnectorVersionsBulkResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AtomConnectorVersionsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Retrieves an instance of an AtomConnectorVersions object
     * Retrieves the properties of connectors used by the Runtime, Runtime cluster, or Runtime cloud with specified ID.
     * @param id The ID of the Runtime, Runtime cluster, or Runtime cloud.
     * @returns AtomConnectorVersions Successful request and response.
     * @throws ApiError
     */
    public getAtomConnectorVersions(
        id: string,
    ): CancelablePromise<AtomConnectorVersions> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/AtomConnectorVersions/{id}',
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
     * Retrieves multiple AtomConnectorVersions objects by identifier
     * To learn more about `bulk`, refer to [Bulk GET operations](#section/Introduction/Bulk-GET-operations).
     * @param requestBody
     * @returns AtomConnectorVersionsBulkResponse Successful request and response.
     * @throws ApiError
     */
    public bulkAtomConnectorVersions(
        requestBody?: AtomConnectorVersionsBulkRequest,
    ): CancelablePromise<AtomConnectorVersionsBulkResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/AtomConnectorVersions/bulk',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
