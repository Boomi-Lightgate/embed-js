/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Component } from '../models/Component';
import type { ComponentBulkRequest } from '../models/ComponentBulkRequest';
import type { ComponentBulkResponse } from '../models/ComponentBulkResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ComponentService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates a Component object
     * - Cannot create components for types not eligible for your account. For example, if your account does not have the B2B/EDI feature, you will not be able to create Trading Partner components.
     * - Request will not be processed in case if the payload has invalid attributes and tags under the <object> section.
     * - To create or update a component, you must supply a valid component XML format for the given type. The component XML can be rather complex with many optional fields and nested configuration. For this reason we strongly recommend approaching it by first creating the desired component structure/skeleton as you would normally in the Build page UI, then exporting the XML using the Component object GET. This will provide an accurate example or template of the XML you will need to create. You can replace values or continue that pattern as you need for your use case.
     * - Include the `branchId` in the request body to specify a branch on which you want to create the component.
     * @param requestBody
     * @returns Component Successful request and response.
     * @throws ApiError
     */
    public createComponent(
        requestBody?: Component,
    ): CancelablePromise<Component> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Component',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves an instance of a Component object
     * - When using the GET operation by componentId, it returns the latest component if you do not provide the version.
     * - When you provide the version in the format of `<componentId>` ~ `<version>`, it returns the specific version of the component.
     * - The GET operation only accepts mediaType `application/xml` for the API response.
     * - The limit is 5 requests for the BULK GET operation. All other API objects have a limit of 100 BULK GET requests.
     * - If you want information for a component on a specific branch, include the branchId in the GET request:   `https://api.boomi.com/api/rest/v1/{accountId}/Component/{componentId}~{branchId}`
     * @param componentId The ID of the component. The component ID is available on the Revision History dialog, which you can access from the Build page in the service. This must be omitted for the CREATE operation but it is required for the UPDATE operation.
     * @returns Component Successful request and response.
     * @throws ApiError
     */
    public getComponent(
        componentId: string,
    ): CancelablePromise<Component> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Component/{componentId}',
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
     * Modifies or updates a Component object
     * - Full updates only. No partial updates. If part of the object’s configuration is omitted, the component will be updated without that configuration.
     * - The only exception is for encrypted fields such as passwords. Omitting an encrypted field from the update request will NOT impact the saved value.
     * - Requests without material changes to configuration will be rejected to prevent unnecessary revisions.
     * - Request will not be processed in case if the payload has invalid attributes and tags under the `<object>` section.
     * - For the saved process property components, modifications to the data type are not permitted.
     * - Include the `branchId` in the request body to specify the branch on which you want to update the component.
     * @param componentId The ID of the component. The component ID is available on the Revision History dialog, which you can access from the Build page in the service. This must be omitted for the CREATE operation but it is required for the UPDATE operation.
     * @param requestBody
     * @returns Component Successful request and response.
     * @throws ApiError
     */
    public updateComponent(
        componentId: string,
        requestBody?: Component,
    ): CancelablePromise<Component> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Component/{componentId}',
            path: {
                'componentId': componentId,
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
     * Retrieves multiple Component objects by identifier
     * To learn more about `bulk`, refer to [Bulk GET operations](#section/Introduction/Bulk-GET-operations).
     * @param requestBody
     * @returns ComponentBulkResponse Successful request and response.
     * @throws ApiError
     */
    public bulkComponent(
        requestBody?: ComponentBulkRequest,
    ): CancelablePromise<ComponentBulkResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Component/bulk',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
