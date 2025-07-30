/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SharedServerInformation } from '../models/SharedServerInformation';
import type { SharedServerInformationBulkRequest } from '../models/SharedServerInformationBulkRequest';
import type { SharedServerInformationBulkResponse } from '../models/SharedServerInformationBulkResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SharedServerInformationService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Retrieves an instance of a SharedServerInformation object
     * Retrieve Shared Server Information records for a specific single Runtime ID.
     *
     * You can retrieve Shared Server Information records only by an ordinary GET operation specifying a single Runtime ID or a bulk GET operation with a maximum of 100 Runtime IDs. This option is because the object ID for the Shared Server Information is not available currently (except by requesting the information from services). Therefore, this operation does not return the Shared Server Information object auth field.
     * @param id The ID of the Runtime that is hosting the shared web server.
     * @returns SharedServerInformation Successful request and response.
     * @throws ApiError
     */
    public getSharedServerInformation(
        id: string,
    ): CancelablePromise<SharedServerInformation> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/SharedServerInformation/{id}',
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
     * Modifies or updates a SharedServerInformation object
     * Updates a Shared Server Information object based on the supplied Runtime ID.
     *
     * - The UPDATE operation updates a Shared Server Information object based on the supplied Runtime ID. To clear a field, set the attribute corresponding to that field to an empty string.
     *
     * You must have the Runtime Management privilege to perform the UPDATE operation. If you have the Runtime Management Read Access privilege, you cannot update shared server information.
     *
     * It is not possible to set authToken through this operation. This operation generates a token if it requires authentication, but a token does not currently exist. The new authToken appears in the response.
     * - If you specify sslCertificateId, the certificate must be accessible by the account making the request.
     * -If you do not configure the Authentication Type and Ports, using the Shared Server Information object to update only the API Type of a Runtime fails. If you are the owner of a Runtime, Runtime cluster, or Runtime cloud, you must update the API Type, Authentication Type, and HTTP Port or HTTPS Port through the Shared Server Information object for the API to succeed. Runtime cloud attachments cannot update the HTTP Port or HTTPS Port.
     * - If you configure the Authentication Type and Ports, you can use the Shared Server Information object to update only the API Type of a Runtime.
     * - This API does not support the configuration of multiple authentication types on a Runtime.
     * @param id The ID of the Runtime that is hosting the shared web server.
     * @param requestBody
     * @returns SharedServerInformation Successful request and response.
     * @throws ApiError
     */
    public updateSharedServerInformation(
        id: string,
        requestBody?: SharedServerInformation,
    ): CancelablePromise<SharedServerInformation> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/SharedServerInformation/{id}',
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
     * Retrieves multiple SharedServerInformation objects by identifier
     * To learn more about `bulk`, refer to [Bulk GET operations](#section/Introduction/Bulk-GET-operations).
     * @param requestBody
     * @returns SharedServerInformationBulkResponse Successful request and response.
     * @throws ApiError
     */
    public bulkSharedServerInformation(
        requestBody?: SharedServerInformationBulkRequest,
    ): CancelablePromise<SharedServerInformationBulkResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/SharedServerInformation/bulk',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
