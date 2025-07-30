/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EnvironmentMapExtension } from '../models/EnvironmentMapExtension';
import type { EnvironmentMapExtensionBulkRequest } from '../models/EnvironmentMapExtensionBulkRequest';
import type { EnvironmentMapExtensionBulkResponse } from '../models/EnvironmentMapExtensionBulkResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class EnvironmentMapExtensionService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Retrieves an instance of an EnvironmentMapExtension object
     * Retrieves an extensible map by its Environment Map Extension object ID.
     *
     * >**Note:** Extending a source or destination profile by means of browsing an external account may require including credentials in the request. The GET operation uses the credentials from the original process for the browse connection. However, because credential reuse can be problematic when sharing processes in Integration Packs, use the EXECUTE operation instead.
     * @param id
     * @returns EnvironmentMapExtension Successful request and response.
     * @throws ApiError
     */
    public getEnvironmentMapExtension(
        id: string,
    ): CancelablePromise<EnvironmentMapExtension> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/EnvironmentMapExtension/{id}',
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
     * Retrieves multiple EnvironmentMapExtension objects by identifier
     * To learn more about `bulk`, refer to [Bulk GET operations](#section/Introduction/Bulk-GET-operations).
     * @param requestBody
     * @returns EnvironmentMapExtensionBulkResponse Successful request and response.
     * @throws ApiError
     */
    public bulkEnvironmentMapExtension(
        requestBody?: EnvironmentMapExtensionBulkRequest,
    ): CancelablePromise<EnvironmentMapExtensionBulkResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/EnvironmentMapExtension/bulk',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Executes an action on an EnvironmentMapExtension object
     * Use the EXECUTE operation when you want to customize XML profiles by reimporting them from endpoint applications. The EXECUTE operation returns the current Environment Map Extension configuration similar to the GET operation.
     *
     * It also accepts connection credentials and automatically connects to the external application to retrieve additional custom fields for that profile. You must have the Runtime Management privilege to perform the EXECUTE operation. If you have the Runtime Management Read Access privilege, you cannot post connection credentials.
     *
     * For information about using these operations to retrieve or update map functions, refer to [Environment Map Extension functions](/docs/APIs/PlatformAPI/Environment_Map_Extension_functions).
     *
     * Include the `SourceBrowse` and `DestinationBrowse` sections as appropriate to browse the respective profile and include the required BrowseFields for the given connector. If you need to call the EXECUTE action repeatedly for the same map, you can alternatively use the `sessionId` to avoid having to supply the connector fields in subsequent calls. Session caching lasts about 30 minutes.
     * @param id
     * @param requestBody
     * @returns EnvironmentMapExtension Successful request and response.
     * @throws ApiError
     */
    public executeEnvironmentMapExtension(
        id: string,
        requestBody?: EnvironmentMapExtension,
    ): CancelablePromise<EnvironmentMapExtension> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/EnvironmentMapExtension/execute/{id}',
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
