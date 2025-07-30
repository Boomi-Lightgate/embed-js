/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ComponentDiffRequest } from '../models/ComponentDiffRequest';
import type { ComponentDiffRequestBulkRequest } from '../models/ComponentDiffRequestBulkRequest';
import type { ComponentDiffRequestBulkResponse } from '../models/ComponentDiffRequestBulkResponse';
import type { ComponentDiffResponseCreate } from '../models/ComponentDiffResponseCreate';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ComponentDiffRequestService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates a ComponentDiffRequest object
     * Contains a diff visualization option to help understand the differences between component versions. For more information, refer to the Postman article [Visualize request responses using Postman Visualizer](https://learning.postman.com/docs/sending-requests/response-data/visualizer/).
     * @param requestBody
     * @returns ComponentDiffResponseCreate Successful request and response.
     * @throws ApiError
     */
    public createComponentDiffRequest(
        requestBody?: ComponentDiffRequest,
    ): CancelablePromise<ComponentDiffResponseCreate> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ComponentDiffRequest',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves an instance of a ComponentDiffRequest object
     * If you use Postman to make API calls, the GET response contains a diff visualization option to help understand the differences between component versions. For more information, refer to the Postman article [Visualize request responses using Postman Visualizer](https://learning.postman.com/docs/sending-requests/response-data/visualizer/). The Postman visualization feature currently supports only JSON responses.
     * @param componentId The ID of the component for which you want to compare versions.
     * @returns ComponentDiffRequest Successful request and response.
     * @throws ApiError
     */
    public getComponentDiffRequest(
        componentId: string,
    ): CancelablePromise<ComponentDiffRequest> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ComponentDiffRequest/{componentId}',
            path: {
                'componentId': componentId,
            },
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves multiple ComponentDiffRequest objects
     * To learn more about `bulk`, refer to [Bulk GET operations](#section/Introduction/Bulk-GET-operations).
     * @param requestBody
     * @returns ComponentDiffRequestBulkResponse Successful request and response.
     * @throws ApiError
     */
    public bulkComponentDiffRequest(
        requestBody?: ComponentDiffRequestBulkRequest,
    ): CancelablePromise<ComponentDiffRequestBulkResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ComponentDiffRequest/bulk',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
