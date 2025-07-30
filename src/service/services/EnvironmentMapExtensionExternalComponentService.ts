/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EnvironmentMapExtensionExternalComponentQueryConfig } from '../models/EnvironmentMapExtensionExternalComponentQueryConfig';
import type { EnvironmentMapExtensionExternalComponentQueryResponse } from '../models/EnvironmentMapExtensionExternalComponentQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class EnvironmentMapExtensionExternalComponentService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Queries for an EnvironmentMapExtensionExternalComponent object(s)
     * For general information about the structure of QUERY filters, their sample payloads, and how to handle the paged results, refer to [Query filters](#section/Introduction/Query-filters) and [Query paging](#section/Introduction/Query-paging).
     * @param requestBody  Possible properties include: ACCOUNT_ID, ENVIRONMENT_MAP_EXTENSION_ID, PACKAGED_COMPONENT_UID, COMPONENT_ID, COMPONENT_VERSION, COMPONENT_NAME, COMPONENT_TYPE
     * @returns EnvironmentMapExtensionExternalComponentQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryEnvironmentMapExtensionExternalComponent(
        requestBody?: EnvironmentMapExtensionExternalComponentQueryConfig,
    ): CancelablePromise<EnvironmentMapExtensionExternalComponentQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/EnvironmentMapExtensionExternalComponent/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves additional results for an EnvironmentMapExtensionExternalComponent query
     * To learn about using `queryMore`, refer to [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns EnvironmentMapExtensionExternalComponentQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMoreEnvironmentMapExtensionExternalComponent(
        requestBody: string,
    ): CancelablePromise<EnvironmentMapExtensionExternalComponentQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/EnvironmentMapExtensionExternalComponent/queryMore',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
