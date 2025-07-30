/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PackagedComponent } from '../models/PackagedComponent';
import type { PackagedComponentBulkRequest } from '../models/PackagedComponentBulkRequest';
import type { PackagedComponentBulkResponse } from '../models/PackagedComponentBulkResponse';
import type { PackagedComponentQueryConfig } from '../models/PackagedComponentQueryConfig';
import type { PackagedComponentQueryResponse } from '../models/PackagedComponentQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PackagedComponentService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates a PackagedComponent object
     * - You can use the CREATE operation to perform two different actions. For example, you can create a new packaged component from a specific component ID, or you can restore a deleted packaged component. Both actions use the same object endpoint. However, the information required in the request body differs.
     * -  **To create a new packaged component**, you must include a component ID in the request body. You create a packaged component for the specified componentId. Optionally, you can specify a packageVersion value and notes about the package version.
     * >**Note:** You cannot add package versions and notes after creating the packaged component. However, if not specified, automatically assigns a numerical version number to your new packaged component.
     * -  **To restore or recover a deleted packaged component**, you must specify the packageId, componentId, and packageVersion. You can query the Packaged Component object for a list of deleted packaged components.
     * - Specify a `branchName` to create a packaged component on a particular branch. If `branchName` is not provided, the default working branch is used.
     * @param requestBody
     * @returns PackagedComponent Successful request and response.
     * @throws ApiError
     */
    public createPackagedComponent(
        requestBody?: PackagedComponent,
    ): CancelablePromise<PackagedComponent> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/PackagedComponent',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves an instance of a PackagedComponent object
     * Retrieves the packaged component with the specified ID.
     * @param id
     * @returns PackagedComponent Successful request and response.
     * @throws ApiError
     */
    public getPackagedComponent(
        id: string,
    ): CancelablePromise<PackagedComponent> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/PackagedComponent/{id}',
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
     * Deletes a PackagedComponent object
     * - The DELETE operation deletes a specific packaged component version. The id that you provide in the endpoint represents a Packaged Component ID. You can retrieve the Packaged Component ID (packageId) using the GET and QUERY operations, or by viewing the **Packaged Component History** dialog for a specific version in the Integration user interface.
     * >**Note:** You can restore deleted packaged components using the CREATE operation. See the section **Using the CREATE operation** for more details.
     *
     * - You cannot delete a packaged component if it is already in use. If currently deployed, a packaged component is considered in use if it is used in the **Process Library** or as part of an integration pack.
     * @param id
     * @returns any Successful request and response.
     * @throws ApiError
     */
    public deletePackagedComponent(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/PackagedComponent/{id}',
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
     * Retrieves multiple PackagedComponent objects by identifier
     * To learn more about `bulk`, refer to [Bulk GET operations](#section/Introduction/Bulk-GET-operations).
     * @param requestBody
     * @returns PackagedComponentBulkResponse Successful request and response.
     * @throws ApiError
     */
    public bulkPackagedComponent(
        requestBody?: PackagedComponentBulkRequest,
    ): CancelablePromise<PackagedComponentBulkResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/PackagedComponent/bulk',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Queries for a PackagedComponent object(s)
     * For general information about the structure of QUERY filters, their sample payloads, and how to handle the paged results, refer to [Query filters](#section/Introduction/Query-filters) and [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns PackagedComponentQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryPackagedComponent(
        requestBody?: PackagedComponentQueryConfig,
    ): CancelablePromise<PackagedComponentQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/PackagedComponent/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves additional results for a PackagedComponent query
     * To learn about using `queryMore`, refer to [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns PackagedComponentQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMorePackagedComponent(
        requestBody: string,
    ): CancelablePromise<PackagedComponentQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/PackagedComponent/queryMore',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
