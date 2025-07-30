/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PackagedComponentManifest } from '../models/PackagedComponentManifest';
import type { PackagedComponentManifestBulkRequest } from '../models/PackagedComponentManifestBulkRequest';
import type { PackagedComponentManifestBulkResponse } from '../models/PackagedComponentManifestBulkResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PackagedComponentManifestService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Retrieves an instance of a PackagedComponentManifest object
     * Retrieve a list of the included components and their summary metadata for a single version of a packaged component.
     * @param packageId The ID of the packaged component.
     * @returns PackagedComponentManifest Successful request and response.
     * @throws ApiError
     */
    public getPackagedComponentManifest(
        packageId: string,
    ): CancelablePromise<PackagedComponentManifest> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/PackagedComponentManifest/{packageId}',
            path: {
                'packageId': packageId,
            },
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves multiple PackagedComponentManifest objects by identifier
     * To learn more about `bulk`, refer to [Bulk GET operations](#section/Introduction/Bulk-GET-operations).
     * @param requestBody
     * @returns PackagedComponentManifestBulkResponse Successful request and response.
     * @throws ApiError
     */
    public bulkPackagedComponentManifest(
        requestBody?: PackagedComponentManifestBulkRequest,
    ): CancelablePromise<PackagedComponentManifestBulkResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/PackagedComponentManifest/bulk',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
