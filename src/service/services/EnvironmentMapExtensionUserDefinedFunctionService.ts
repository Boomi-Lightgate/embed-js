/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EnvironmentMapExtensionUserDefinedFunction } from '../models/EnvironmentMapExtensionUserDefinedFunction';
import type { EnvironmentMapExtensionUserDefinedFunctionBulkRequest } from '../models/EnvironmentMapExtensionUserDefinedFunctionBulkRequest';
import type { EnvironmentMapExtensionUserDefinedFunctionBulkResponse } from '../models/EnvironmentMapExtensionUserDefinedFunctionBulkResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class EnvironmentMapExtensionUserDefinedFunctionService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates an EnvironmentMapExtensionUserDefinedFunction object
     * The CREATE operation creates a new extensible user-defined function. User-defined functions created using the Environment Map Extension User Defined Function object exists only at the environment extension level and are tied to a single map extension only.
     *
     * When creating a new user-defined function, you define individual function steps that make up the greater user-defined function. Then, in the `<Mappings>` section of the request, you determine how to map or link each step to and from the function's input and output.
     *
     * >**Caution:** Creating new functions requires all existing input and output values in the request regardless if they are mapped or populated with a default value. Otherwise, it overrides and removes those variables from the function.
     * @param requestBody
     * @returns EnvironmentMapExtensionUserDefinedFunction Successful request and response.
     * @throws ApiError
     */
    public createEnvironmentMapExtensionUserDefinedFunction(
        requestBody?: EnvironmentMapExtensionUserDefinedFunction,
    ): CancelablePromise<EnvironmentMapExtensionUserDefinedFunction> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/EnvironmentMapExtensionUserDefinedFunction',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves an instance of an EnvironmentMapExtensionUserDefinedFunction object
     * Retrieves an extensible user-defined function associated with a given environment map extension function ID.
     * @param id Represents the unique, system-generated ID of the extended user-defined function.
     * @returns EnvironmentMapExtensionUserDefinedFunction Successful request and response.
     * @throws ApiError
     */
    public getEnvironmentMapExtensionUserDefinedFunction(
        id: string,
    ): CancelablePromise<EnvironmentMapExtensionUserDefinedFunction> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/EnvironmentMapExtensionUserDefinedFunction/{id}',
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
     * Modifies or updates an EnvironmentMapExtensionUserDefinedFunction object
     * Updates the extended configuration for a single user-defined function.
     *
     * >**Caution:** Updating functions require all existing input and output values in the request regardless if they are mapped or populated with a default value. Otherwise, it overrides and removes those variables from the function.
     * @param id Represents the unique, system-generated ID of the extended user-defined function.
     * @param requestBody
     * @returns EnvironmentMapExtensionUserDefinedFunction Successful request and response.
     * @throws ApiError
     */
    public updateEnvironmentMapExtensionUserDefinedFunction(
        id: string,
        requestBody?: EnvironmentMapExtensionUserDefinedFunction,
    ): CancelablePromise<EnvironmentMapExtensionUserDefinedFunction> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/EnvironmentMapExtensionUserDefinedFunction/{id}',
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
     * Deletes an EnvironmentMapExtensionUserDefinedFunction object
     * Deletes the specified user-defined function. Deleted user-defined functions return a status of true and are no longer available for use in an API call or on the user interface.
     *
     * ### Restoring a deleted user-defined function
     *
     * Reinstate a deleted user-defined function by providing the function's id in a CREATE operation. You cannot make changes to a function during restoration (in other words, you cannot edit its values in a RESTORE request). By restoring a deleted function, it becomes available for use in an API call and in the user interface. After a successful RESTORE operation, the function returns a deleted status of false.
     * @param id Represents the unique, system-generated ID of the extended user-defined function.
     * @returns any Successful request and response.
     * @throws ApiError
     */
    public deleteEnvironmentMapExtensionUserDefinedFunction(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/EnvironmentMapExtensionUserDefinedFunction/{id}',
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
     * Retrieves multiple EnvironmentMapExtensionUserDefinedFunction objects by identifier
     * To learn more about `bulk`, refer to [Bulk GET operations](#section/Introduction/Bulk-GET-operations).
     * @param requestBody
     * @returns EnvironmentMapExtensionUserDefinedFunctionBulkResponse Successful request and response.
     * @throws ApiError
     */
    public bulkEnvironmentMapExtensionUserDefinedFunction(
        requestBody?: EnvironmentMapExtensionUserDefinedFunctionBulkRequest,
    ): CancelablePromise<EnvironmentMapExtensionUserDefinedFunctionBulkResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/EnvironmentMapExtensionUserDefinedFunction/bulk',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
