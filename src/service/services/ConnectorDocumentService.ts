/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConnectorDocument } from '../models/ConnectorDocument';
import type { ConnectorDocumentDownload } from '../models/ConnectorDocumentDownload';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ConnectorDocumentService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates a ConnectorDocument object
     * The Connector Document operation allows you to download the raw, document data for a specific Generic Connector Record. This action submits the download request and the call returns a URL used to download the actual document data.
     * @param requestBody
     * @returns ConnectorDocumentDownload Successful request and response.
     * @throws ApiError
     */
    public createConnectorDocument(
        requestBody?: ConnectorDocument,
    ): CancelablePromise<ConnectorDocumentDownload> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ConnectorDocument',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
