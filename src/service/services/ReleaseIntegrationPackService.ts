/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReleaseIntegrationPack } from '../models/ReleaseIntegrationPack';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ReleaseIntegrationPackService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates a ReleaseIntegrationPack object
     * Creates an immediate or scheduled release for a publisher integration pack.
     *
     * To schedule the publisher integration pack for release, you must specify the release schedule (immediate or scheduled).
     * The `releaseOnDate` field is required if you schedule the release for a future date.
     * @param requestBody
     * @returns ReleaseIntegrationPack Successful request and response.
     * @throws ApiError
     */
    public createReleaseIntegrationPack(
        requestBody?: ReleaseIntegrationPack,
    ): CancelablePromise<ReleaseIntegrationPack> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ReleaseIntegrationPack',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Modifies or updates a ReleaseIntegrationPack object
     * Modifies the scheduled release of a publisher integration pack.
     *
     * > **Note:** The Update operation is only performed when there is an existing scheduled release request for the integration pack.
     * @param id
     * @param requestBody
     * @returns ReleaseIntegrationPack Successful request and response.
     * @throws ApiError
     */
    public updateReleaseIntegrationPack(
        id: string,
        requestBody?: ReleaseIntegrationPack,
    ): CancelablePromise<ReleaseIntegrationPack> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ReleaseIntegrationPack/{id}',
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
