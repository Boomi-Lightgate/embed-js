/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Connector } from '../models/Connector';
import type { ConnectorBulkRequest } from '../models/ConnectorBulkRequest';
import type { ConnectorBulkResponse } from '../models/ConnectorBulkResponse';
import type { ConnectorQueryConfig } from '../models/ConnectorQueryConfig';
import type { ConnectorQueryResponse } from '../models/ConnectorQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ConnectorService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Retrieves an instance of a Connector object
     * You can only perform the GET operation by `type` and not by `name`.
     *
     * Send an HTTP GET where `accountId` is the ID of the authenticating account for the request and `connectorType` is the name of the connector subtype you are attempting to GET.
     *
     * For example, sending an HTTP GET to `https://api.boomi.com/api/rest/v1/accountId/Connector/database` returns `Database` type connectors available on the account.
     * @param connectorType The internal and unique identifier for connector type, such as `http`, `ftp`, `greatplains`. The [Component Metadata object](/api/platformapi#tag/ComponentMetadata) refers to this field as *subType*.
     * @returns Connector Successful request and response.
     * @throws ApiError
     */
    public getConnector(
        connectorType: string,
    ): CancelablePromise<Connector> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/Connector/{connectorType}',
            path: {
                'connectorType': connectorType,
            },
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves multiple Connector objects by identifier
     * To learn more about `bulk`, refer to [Bulk GET operations](#section/Introduction/Bulk-GET-operations).
     * @param requestBody
     * @returns ConnectorBulkResponse Successful request and response.
     * @throws ApiError
     */
    public bulkConnector(
        requestBody?: ConnectorBulkRequest,
    ): CancelablePromise<ConnectorBulkResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Connector/bulk',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Queries for a Connector object(s)
     * For general information about the structure of QUERY filters, their sample payloads, and how to handle the paged results, refer to [Query filters](#section/Introduction/Query-filters) and [Query paging](#section/Introduction/Query-paging).
     * @param requestBody  Possible properties include: type, name
     * @returns ConnectorQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryConnector(
        requestBody?: ConnectorQueryConfig,
    ): CancelablePromise<ConnectorQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Connector/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves additional results for a Connector query
     * To learn about using `queryMore`, refer to [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns ConnectorQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMoreConnector(
        requestBody: string,
    ): CancelablePromise<ConnectorQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/Connector/queryMore',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
