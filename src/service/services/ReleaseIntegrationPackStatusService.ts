/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReleaseIntegrationPackStatus } from '../models/ReleaseIntegrationPackStatus';
import type { ReleaseIntegrationPackStatusBulkRequest } from '../models/ReleaseIntegrationPackStatusBulkRequest';
import type { ReleaseIntegrationPackStatusBulkResponse } from '../models/ReleaseIntegrationPackStatusBulkResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ReleaseIntegrationPackStatusService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Retrieves an instance of a ReleaseIntegrationPackStatus object
     *
     * To retrieve the release status of the publisher integration pack, follow these steps:
     *
     * 1. Send a POST request to the ReleaseIntegrationPackStatus object. The response will return a requestId.
     * 2. Use the requestId returned in Step 1 to make a subsequent call to the ReleaseIntegrationPackStatus object to retrieve detailed information about the released integration pack.
     * 3. Repeatedly poll the ReleaseIntegrationPackStatus object using the requestId until the details of the released integration pack are available. If the request is still in progress or scheduled, it returns an HTTP 202 status code. When the integration pack is released successfully, the ReleaseIntegrationPackStatus object returns the released details.
     * @param id A unique ID assigned by the system to the integration pack.
     * @returns ReleaseIntegrationPackStatus Successful request and response.
     * @throws ApiError
     */
    public getReleaseIntegrationPackStatus(
        id: string,
    ): CancelablePromise<ReleaseIntegrationPackStatus> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ReleaseIntegrationPackStatus/{id}',
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
     * Retrieves multiple ReleaseIntegrationPackStatus objects by identifier
     * The bulk GET operation returns multiple objects based on the supplied account IDs, to a maximum of 100. To learn more about `bulk`, refer to [Bulk GET operations](#section/Introduction/Bulk-GET-operations).
     * @param requestBody
     * @returns ReleaseIntegrationPackStatusBulkResponse Successful request and response.
     * @throws ApiError
     */
    public bulkReleaseIntegrationPackStatus(
        requestBody?: ReleaseIntegrationPackStatusBulkRequest,
    ): CancelablePromise<ReleaseIntegrationPackStatusBulkResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ReleaseIntegrationPackStatus/bulk',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
