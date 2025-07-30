/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RuntimeReleaseSchedule } from '../models/RuntimeReleaseSchedule';
import type { RuntimeReleaseScheduleBulkRequest } from '../models/RuntimeReleaseScheduleBulkRequest';
import type { RuntimeReleaseScheduleBulkResponse } from '../models/RuntimeReleaseScheduleBulkResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class RuntimeReleaseScheduleService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates a RuntimeReleaseSchedule object
     * The CREATE operation sets a schedule for receiving updates with the scheduleType, dayOfWeek, hourOfDay, and timeZone fields.
     * @param requestBody
     * @returns RuntimeReleaseSchedule Successful request and response.
     * @throws ApiError
     */
    public createRuntimeReleaseSchedule(
        requestBody?: RuntimeReleaseSchedule,
    ): CancelablePromise<RuntimeReleaseSchedule> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/RuntimeReleaseSchedule',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves an instance of a RuntimeReleaseSchedule object
     * The GET operation returns the current schedule for receiving updates on a specified Runtime, Runtime cluster, or Runtime cloud.
     * @param id The ID of the container for which you want to set a schedule.
     * @returns RuntimeReleaseSchedule Successful request and response.
     * @throws ApiError
     */
    public getRuntimeReleaseSchedule(
        id: string,
    ): CancelablePromise<RuntimeReleaseSchedule> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/RuntimeReleaseSchedule/{id}',
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
     * Modifies or updates a RuntimeReleaseSchedule object
     * The UPDATE operation modifies a set schedule for receiving updates.
     * @param id The ID of the container for which you want to set a schedule.
     * @param requestBody
     * @returns RuntimeReleaseSchedule Successful request and response.
     * @throws ApiError
     */
    public updateRuntimeReleaseSchedule(
        id: string,
        requestBody?: RuntimeReleaseSchedule,
    ): CancelablePromise<RuntimeReleaseSchedule> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/RuntimeReleaseSchedule/{id}',
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
     * Deletes a RuntimeReleaseSchedule object
     * The DELETE operation sets the scheduleType to NEVER, meaning that the Runtime, Runtime cluster, or Runtime cloud receives updates only during the .
     * @param id The ID of the container for which you want to set a schedule.
     * @returns any Successful request and response.
     * @throws ApiError
     */
    public deleteRuntimeReleaseSchedule(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/RuntimeReleaseSchedule/{id}',
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
     * Retrieves multiple RuntimeReleaseSchedule objects by identifier.
     * @param requestBody
     * @returns RuntimeReleaseScheduleBulkResponse Successful request and response.
     * @throws ApiError
     */
    public bulkRuntimeReleaseSchedule(
        requestBody?: RuntimeReleaseScheduleBulkRequest,
    ): CancelablePromise<RuntimeReleaseScheduleBulkResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/RuntimeReleaseSchedule/bulk',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
