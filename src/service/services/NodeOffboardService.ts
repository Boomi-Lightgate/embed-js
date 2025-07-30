/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NodeOffboard } from '../models/NodeOffboard';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class NodeOffboardService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates a NodeOffboard object
     * Employs a POST method to delete a node. After you successfully perform the POST operation, the nodes status immediately changes to `Deleting` on the Cluster Status panel of the interface.
     * @param requestBody
     * @returns NodeOffboard Successful request and response.
     * @throws ApiError
     */
    public createNodeOffboard(
        requestBody?: NodeOffboard,
    ): CancelablePromise<NodeOffboard> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/NodeOffboard',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
