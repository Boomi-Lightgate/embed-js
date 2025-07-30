/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeployedExpiredCertificateQueryConfig } from '../models/DeployedExpiredCertificateQueryConfig';
import type { DeployedExpiredCertificateQueryResponse } from '../models/DeployedExpiredCertificateQueryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DeployedExpiredCertificateService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Queries for a DeployedExpiredCertificate object(s)
     * If a QUERY omits an explicit timespan filter — that is, the query does not use `expirationBoundary` in an expression — it applies a default timespan filter using the value of 30 and the LESS_THAN operator. This filter specifies expired certificates and certificates expiring within 30 days.
     *
     * For general information about the structure of QUERY filters, their sample payloads, and how to handle the paged results, refer to [Query filters](#section/Introduction/Query-filters) and [Query paging](#section/Introduction/Query-paging).
     * @param requestBody  Possible properties include: containerId, containerName, environmentId, environmentName, expirationBoundary
     * @returns DeployedExpiredCertificateQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryDeployedExpiredCertificate(
        requestBody?: DeployedExpiredCertificateQueryConfig,
    ): CancelablePromise<DeployedExpiredCertificateQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/DeployedExpiredCertificate/query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
    /**
     * Retrieves additional results for a DeployedExpiredCertificate query
     * To learn about using `queryMore`, refer to [Query paging](#section/Introduction/Query-paging).
     * @param requestBody
     * @returns DeployedExpiredCertificateQueryResponse Successful request and response.
     * @throws ApiError
     */
    public queryMoreDeployedExpiredCertificate(
        requestBody: string,
    ): CancelablePromise<DeployedExpiredCertificateQueryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/DeployedExpiredCertificate/queryMore',
            body: requestBody,
            mediaType: 'text/plain',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
