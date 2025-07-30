/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeployedPackage } from '../models/DeployedPackage';
import type { DeployedPackageBulkRequest } from '../models/DeployedPackageBulkRequest';
import type { DeployedPackageBulkResponse } from '../models/DeployedPackageBulkResponse';
import type { DeployedPackageQueryConfig } from '../models/DeployedPackageQueryConfig';
import type { DeployedPackageQueryResponse } from '../models/DeployedPackageQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DeployedPackageService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates a DeployedPackage object
     * You can use the CREATE operation in two ways:
     * - With `environmentId` and `packageId`, CREATE deploys the specified packaged component to the identified environment.
     * - With `environmentId` and `componentId`, CREATE packages with the specified component and deploys the package to the specified environment.
     * >**Note:** By default, deployment of listener processes are in a running state. To deploy a packaged listener process in a paused state, include the `listenerStatus` field with a value of `PAUSED`.
     * @param requestBody
     * @returns DeployedPackage Successful request and response.
     * @throws ApiError
     */
    public createDeployedPackage(
        requestBody?: DeployedPackage,
    ): CancelablePromise<DeployedPackage> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/DeployedPackage',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves an instance of a DeployedPackage object
     * Returns a single Deployed Package object based on the deployment ID.
     * @param id The Deployed Package object you are attempting to DELETE.
     * @returns DeployedPackage Successful request and response.
     * @throws ApiError
     */
    public getDeployedPackage(
        id: string,
    ): CancelablePromise<DeployedPackage> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/DeployedPackage/{id}',
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
     * Deletes a DeployedPackage object
     * Removes the packaged component from the environment each with a specific IDs.
     * @param id
     * @returns any Successful request and response.
     * @throws ApiError
     */
    public deleteDeployedPackage(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/DeployedPackage/{id}',
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
     * Retrieves multiple DeployedPackage objects by identifier
     * To learn more about `bulk`, refer to [Bulk GET operations](#section/Introduction/Bulk-GET-operations).
     * @param requestBody
     * @returns DeployedPackageBulkResponse Successful request and response.
     * @throws ApiError
     */
    public bulkDeployedPackage(
        requestBody?: DeployedPackageBulkRequest,
    ): CancelablePromise<DeployedPackageBulkResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/DeployedPackage/bulk',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Queries for a DeployedPackage object(s)
     * For general information about the structure of QUERY filters, their sample payloads, and how to handle the paged results, refer to [Query filters](#section/Introduction/Query-filters) and [Query paging](#section/Introduction/Query-paging).
     * @param requestBody  Possible properties include: uid, notes, current, packageNotes, active, componentId, componentVersion, componentName, componentType, deployedBy, deployedDate, deploymentId, environmentId, environmentName, packageId, packageVersion, version, accountId, branch
     * @returns DeployedPackageQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryDeployedPackage(
        requestBody?: DeployedPackageQueryConfig,
    ): CancelablePromise<DeployedPackageQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/DeployedPackage/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves additional results for a DeployedPackage query
     * To learn about using `queryMore`, refer to [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns DeployedPackageQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMoreDeployedPackage(
        requestBody: string,
    ): CancelablePromise<DeployedPackageQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/DeployedPackage/queryMore',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
