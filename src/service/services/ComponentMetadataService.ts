/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ComponentMetadata } from '../models/ComponentMetadata';
import type { ComponentMetadataBulkRequest } from '../models/ComponentMetadataBulkRequest';
import type { ComponentMetadataBulkResponse } from '../models/ComponentMetadataBulkResponse';
import type { ComponentMetadataQueryConfig } from '../models/ComponentMetadataQueryConfig';
import type { ComponentMetadataQueryResponse } from '../models/ComponentMetadataQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ComponentMetadataService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates a ComponentMetadata object
     * The ability to create a new component is not supported at this time. Although, you can create a deleted component, but you cannot create a new component. You will receive an error if you do not specify the deleted component ID in the create request.
     * @param requestBody
     * @returns ComponentMetadata Successful request and response.
     * @throws ApiError
     */
    public createComponentMetadata(
        requestBody?: ComponentMetadata,
    ): CancelablePromise<ComponentMetadata> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ComponentMetadata',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves an instance of a ComponentMetadata object
     * Returns the latest component revision if you do not provide the version. Providing the version in the format of `<componentId>` ~ `<version>`, returns the specific version of the component.
     * @param id Required. Read only. The ID of the component. The component ID is available on the Revision History dialog, which you can access from the Build page in the service.
     * @returns ComponentMetadata Successful request and response.
     * @throws ApiError
     */
    public getComponentMetadata(
        id: string,
    ): CancelablePromise<ComponentMetadata> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ComponentMetadata/{id}',
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
     * Modifies or updates a ComponentMetadata object
     * Only `name` and `folderId` may be updated. They are optional and will only be modified if included in the UPDATE request. `folderId` must be a valid, non-deleted folder. If `folderId` is included in the request but with a blank value, it defaults to the root folder.
     * @param id Required. Read only. The ID of the component. The component ID is available on the Revision History dialog, which you can access from the Build page in the service.
     * @param requestBody
     * @returns ComponentMetadata Successful request and response.
     * @throws ApiError
     */
    public updateComponentMetadata(
        id: string,
        requestBody?: ComponentMetadata,
    ): CancelablePromise<ComponentMetadata> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ComponentMetadata/{id}',
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
    /**
     * Deletes a ComponentMetadata object
     * Lets you delete required components. Note that deleting a component does NOT delete dependent components.
     * @param id Required. Read only. The ID of the component. The component ID is available on the Revision History dialog, which you can access from the Build page in the service.
     * @returns any Successful request and response.
     * @throws ApiError
     */
    public deleteComponentMetadata(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/ComponentMetadata/{id}',
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
     * Retrieves multiple ComponentMetadata objects by identifier
     * To learn more about `bulk`, refer to [Bulk GET operations](#section/Introduction/Bulk-GET-operations).
     * @param requestBody
     * @returns ComponentMetadataBulkResponse Successful request and response.
     * @throws ApiError
     */
    public bulkComponentMetadata(
        requestBody?: ComponentMetadataBulkRequest,
    ): CancelablePromise<ComponentMetadataBulkResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ComponentMetadata/bulk',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Queries for a ComponentMetadata object(s)
     * - By default, QUERY results include previous revisions including deleted versions. Use query filters to exclude previous and deleted versions if desired. For more examples of querying components, see Component Metadata API example requests mentioned above in the API description.
     * - The `version` field must be accompanied by the `componentId` field. You can query all other fields.
     * - The `copiedFromComponentId` field must accompany the `copiedFromComponentVersion` field.
     *
     * For general information about the structure of QUERY filters, their sample payloads, and how to handle the paged results, refer to [Query filters](#section/Introduction/Query-filters) and [Query paging](#section/Introduction/Query-paging).
     * @param requestBody  Possible properties include: accountId, componentId, version, name, type, subType, createdDate, createdBy, modifiedDate, modifiedBy, deleted, currentVersion, folderName, folderId, copiedFromComponentId, copiedFromComponentVersion, branchName, branchId
     * @returns ComponentMetadataQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryComponentMetadata(
        requestBody?: ComponentMetadataQueryConfig,
    ): CancelablePromise<ComponentMetadataQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ComponentMetadata/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves additional results for a ComponentMetadata query
     * To learn about using `queryMore`, refer to [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns ComponentMetadataQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMoreComponentMetadata(
        requestBody: string,
    ): CancelablePromise<ComponentMetadataQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ComponentMetadata/queryMore',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
