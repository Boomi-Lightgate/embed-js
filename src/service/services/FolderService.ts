/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Folder } from '../models/Folder';
import type { FolderBulkRequest } from '../models/FolderBulkRequest';
import type { FolderBulkResponse } from '../models/FolderBulkResponse';
import type { FolderQueryConfig } from '../models/FolderQueryConfig';
import type { FolderQueryResponse } from '../models/FolderQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class FolderService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates a Folder object
     * - When using the CREATE operation, you can create a new folder within the parent folder.
     *
     * - When creating a new folder, a name is required but PermittedRoles are optional. Unless it includes a list of UserRoles, in which case the GUID is required for the UserRole.
     *
     * - `parentId` must be a valid, non-deleted folder. If omitted or blank, it defaults to the root folder.
     *
     * - To Restore a folder you need to use the CREATE operation call, using a valid GUID for a deleted item. This will also restore any deleted components within that folder.
     * @param requestBody
     * @returns Folder Successful request and response.
     * @throws ApiError
     */
    public createFolder(
        requestBody?: Folder,
    ): CancelablePromise<Folder> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Folder',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves an instance of a Folder object
     * Retrieves the folder with the particular ID.
     * @param id Required. Read only. The Boomi-generated, unique identifier of the folder.
     * @returns Folder Successful request and response.
     * @throws ApiError
     */
    public getFolder(
        id: string,
    ): CancelablePromise<Folder> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Folder/{id}',
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
     * Modifies or updates a Folder object
     * You can update by changing the name of the folder and following the same considerations for the CREATE parameters.
     * @param id Required. Read only. The Boomi-generated, unique identifier of the folder.
     * @param requestBody
     * @returns Folder Successful request and response.
     * @throws ApiError
     */
    public updateFolder(
        id: string,
        requestBody?: Folder,
    ): CancelablePromise<Folder> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Folder/{id}',
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
     * Deletes a Folder object
     * - Deleting a folder will delete the folder and its contents including all components and sub-folders.
     * - The root folder cannot be deleted.
     * - Folders containing actively deployed processes or other deployable components cannot be deleted.
     * >**Note:** You can restore a deleted folder by requesting a CREATE operation and specifying the ID of the deleted folder.
     * @param id Required. Read only. The Boomi-generated, unique identifier of the folder.
     * @returns any Successful request and response.
     * @throws ApiError
     */
    public deleteFolder(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/Folder/{id}',
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
     * Retrieves multiple Folder objects by identifier
     * To learn more about `bulk`, refer to [Bulk GET operations](#section/Introduction/Bulk-GET-operations).
     * @param requestBody
     * @returns FolderBulkResponse Successful request and response.
     * @throws ApiError
     */
    public bulkFolder(
        requestBody?: FolderBulkRequest,
    ): CancelablePromise<FolderBulkResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Folder/bulk',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Queries for a Folder object(s)
     * For general information about the structure of QUERY filters, their sample payloads, and how to handle the paged results, refer to [Query filters](#section/Introduction/Query-filters) and [Query paging](#section/Introduction/Query-paging).
     *
     * - You can perform the QUERY operation for the Folder object by id, name, fullPath and deleted.
     *
     * - The QUERY MORE operation is also available for the Folder object.
     *
     * - You can perform an empty QUERY to return all folders.
     *
     * - If no filter is specified, both non-deleted and deleted records are returned.
     * @param requestBody  Possible properties include: accountId, id, name, fullPath, deleted, parentId, parentName, permittedRoles
     * @returns FolderQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryFolder(
        requestBody?: FolderQueryConfig,
    ): CancelablePromise<FolderQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Folder/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves additional results for a Folder query
     * To learn about using `queryMore`, refer to [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns FolderQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMoreFolder(
        requestBody: string,
    ): CancelablePromise<FolderQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Folder/queryMore',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
