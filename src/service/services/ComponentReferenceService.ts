/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ComponentReference } from '../models/ComponentReference';
import type { ComponentReferenceBulkRequest } from '../models/ComponentReferenceBulkRequest';
import type { ComponentReferenceBulkResponse } from '../models/ComponentReferenceBulkResponse';
import type { ComponentReferenceQueryConfig } from '../models/ComponentReferenceQueryConfig';
import type { ComponentReferenceQueryResponse } from '../models/ComponentReferenceQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ComponentReferenceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Retrieves an instance of a ComponentReference object
     * Retrieves the component reference for a component ID.
     *
     * Send an HTTP GET to `https://api.boomi.com/api/rest/v1/{accountId}/ComponentReference/{componentId}`
     *
     * where `{accountId}` is the ID of the authenticating account for the request and `{componentId}` is the ID of the secondary component whose references you are attempting to GET.
     *
     * If you want to specify a branch, send an HTTP GET to `https://api.boomi.com/api/rest/v1/{accountId}/ComponentReference/{componentId}~{branchId}`
     *
     * where `{accountId}` is the ID of the authenticating account for the request and `{componentId}` is the ID of the secondary component whose references you are attempting to GET, and `{branchId}` is the branch on which you want to GET component references.
     * @param componentId The ID of the secondary component. The component ID is available in the **Revision History** dialog, which you can access from the **Build** page in the service.
     * @returns ComponentReference Successful request and response.
     * @throws ApiError
     */
    public getComponentReference(
        componentId: string,
    ): CancelablePromise<ComponentReference> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ComponentReference/{componentId}',
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
     * Retrieves multiple ComponentReference objects by identifier
     * To learn more about `bulk`, refer to [Bulk GET operations](#section/Introduction/Bulk-GET-operations).
     * @param requestBody
     * @returns ComponentReferenceBulkResponse Successful request and response.
     * @throws ApiError
     */
    public bulkComponentReference(
        requestBody?: ComponentReferenceBulkRequest,
    ): CancelablePromise<ComponentReferenceBulkResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ComponentReference/bulk',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Queries for a ComponentReference object(s)
     * For general information about the structure of QUERY filters, their sample payloads, and how to handle the paged results, refer to [Query filters](#section/Introduction/Query-filters) and [Query paging](#section/Introduction/Query-paging).
     *
     * - You can use the QUERY operation to return the latest version(s) of a primary component(s) that references a given secondary component ID, or all the secondary components that the given primary component ID references.
     *
     * >**Note:** When querying either primary or secondary component references, the API object returns the immediate reference (one level). It does not recursively trace through nested references like the **Show Where Used** feature does in the user interface.
     *
     * For example, take a process that references a Map component where it references two Profile components. If you query by `parentComponentId=<process>`, the API returns a result for the Map component but not the profiles. To get the profiles, you need to perform a second call to query references for the Map component.
     *
     * - You can filter the query operation in one of two ways:
     *
     * - To find all the secondary components referenced by a given primary component, you must provide both the parentComponentId and the parentVersion values. You can optionally use the type filter in your query.
     *
     * - To find all the primary components that reference a given secondary component, you must provide the componentId value. You can optionally include the type filter in your query.
     *
     * - To see more information about a component ID returned in the response, like the component's type or name, you can query that same ID using the [Component Metadata object](/api/platformapi#tag/ComponentMetadata).
     *
     * #### Understanding references to deleted components
     *
     * Filtering or querying by `componentId` only returns the component's current version. If you delete the current component revision, it does not return results.
     *
     * When filtering by `parentComponentId` or `parentVersion`, it saves references to other components for a given version of the primary component. If you delete the given primary component version, it does not return results. Note that it is possible to return a reference to a deleted secondary component if you do not remove the reference in the user interface (appears in red).
     * @param requestBody  Possible properties include: parentComponentId, parentVersion, componentId, type
     * @returns ComponentReferenceQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryComponentReference(
        requestBody?: ComponentReferenceQueryConfig,
    ): CancelablePromise<ComponentReferenceQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ComponentReference/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves additional results for a ComponentReference query
     * To learn about using `queryMore`, refer to [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns ComponentReferenceQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMoreComponentReference(
        requestBody: string,
    ): CancelablePromise<ComponentReferenceQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ComponentReference/queryMore',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
