/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Deployment } from '../models/Deployment';
import type { DeploymentBulkRequest } from '../models/DeploymentBulkRequest';
import type { DeploymentBulkResponse } from '../models/DeploymentBulkResponse';
import type { DeploymentQueryConfig } from '../models/DeploymentQueryConfig';
import type { DeploymentQueryResponse } from '../models/DeploymentQueryResponse';
import type { ProcessEnvironmentAttachmentQueryConfig } from '../models/ProcessEnvironmentAttachmentQueryConfig';
import type { ProcessEnvironmentAttachmentQueryResponse } from '../models/ProcessEnvironmentAttachmentQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DeploymentService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates a Deployment object
     * The Deployment object is a deprecated API and should no longer be used. Boomi recommends that you take advantage of the API functionality provided by the [Packaged Component](https://help.boomi.com/docs/Atomsphere/Integration/AtomSphere%20API/r-atm-Packaged_Component_object_66fa92c8-948f-46c6-a521-3927ab431c84) and [Deployed Package objects](https://help.boomi.com/docs/Atomsphere/Integration/AtomSphere%20API/r-atm-Deployed_Package_object_897b5068-6daa-44e4-bf04-7e25385157a8) instead.
     * @param requestBody
     * @returns Deployment Successful request and response.
     * @throws ApiError
     */
    public createDeployment(
        requestBody?: Deployment,
    ): CancelablePromise<Deployment> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Deployment',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves an instance of a Deployment object
     * The Deployment object is a deprecated API and should no longer be used. Boomi recommends that you take advantage of the API functionality provided by the [Packaged Component](https://help.boomi.com/docs/Atomsphere/Integration/AtomSphere%20API/r-atm-Packaged_Component_object_66fa92c8-948f-46c6-a521-3927ab431c84) and [Deployed Package objects](https://help.boomi.com/docs/Atomsphere/Integration/AtomSphere%20API/r-atm-Deployed_Package_object_897b5068-6daa-44e4-bf04-7e25385157a8) instead.
     * @param id
     * @returns Deployment Successful request and response.
     * @throws ApiError
     */
    public getDeployment(
        id: string,
    ): CancelablePromise<Deployment> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Deployment/{id}',
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
     * Retrieves multiple Deployment objects by identifier
     * To learn more about `bulk`, refer to [Bulk GET operations](#section/Introduction/Bulk-GET-operations).
     * @param requestBody
     * @returns DeploymentBulkResponse Successful request and response.
     * @throws ApiError
     */
    public bulkDeployment(
        requestBody?: DeploymentBulkRequest,
    ): CancelablePromise<DeploymentBulkResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Deployment/bulk',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Queries for a Deployment object(s)
     * For general information about the structure of QUERY filters, their sample payloads, and how to handle the paged results, refer to [Query filters](#section/Introduction/Query-filters) and [Query paging](#section/Introduction/Query-paging).
     * @param requestBody  Possible properties include: environmentId, processId, componentId, componentType, current
     * @returns DeploymentQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryDeployment(
        requestBody?: DeploymentQueryConfig,
    ): CancelablePromise<DeploymentQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Deployment/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves additional results for a Deployment query
     * To learn about using `queryMore`, refer to [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns DeploymentQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMoreDeployment(
        requestBody: string,
    ): CancelablePromise<DeploymentQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Deployment/queryMore',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Queries for a ProcessEnvironmentAttachment object(s)
     * For general information about the structure of QUERY filters, their sample payloads, and how to handle the paged results, refer to [Query filters](#section/Introduction/Query-filters) and [Query paging](#section/Introduction/Query-paging).
     * @param requestBody  Possible properties include: environmentId, processId, componentType
     * @returns ProcessEnvironmentAttachmentQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryProcessEnvironmentAttachment(
        requestBody?: ProcessEnvironmentAttachmentQueryConfig,
    ): CancelablePromise<ProcessEnvironmentAttachmentQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ProcessEnvironmentAttachment/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves additional results for a ProcessEnvironmentAttachment query
     * To learn about using `queryMore`, refer to [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns ProcessEnvironmentAttachmentQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMoreProcessEnvironmentAttachment(
        requestBody: string,
    ): CancelablePromise<ProcessEnvironmentAttachmentQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ProcessEnvironmentAttachment/queryMore',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Deletes a ProcessEnvironmentAttachment object
     * Detaches a process from an environment where the attachment is specified by the conceptual Process Environment Attachment object ID.
     * @param id
     * @returns any Successful request and response.
     * @throws ApiError
     */
    public deleteProcessEnvironmentAttachment(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/ProcessEnvironmentAttachment/{id}',
            path: {
                'id': id,
            },
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
