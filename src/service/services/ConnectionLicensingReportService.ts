/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConnectionLicensingDownload } from '../models/ConnectionLicensingDownload';
import type { ConnectionLicensingReport } from '../models/ConnectionLicensingReport';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ConnectionLicensingReportService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates a ConnectionLicensingReport object
     * Returns the Connection Licensing URL in the response to view or download the deployed connection details. To download connection licensing data for a given connector class:
     *
     * a. Send a POST and request body to `https://api.boomi.com/api/rest/v1/<accountId>/ConnectionLicensingReport`
     *
     * where accountId is the ID of the authenticating account for the request.
     *
     * Populate the request body with or without the available filters for the report that you want to download.
     *
     * b. Next, send a GET request using the URL returned in the POST response. The GET does not require a request body, and returns the deployed connection details.
     *
     * >**Note:** Do not pass any filters in the CREATE payload. This will not help get the Test & Production connections deployed details for all the connector classes. To get the Test and Production deployed connection details you have to pass ONLY the structure in the CREATE request, without any filters.
     *
     * - To apply multiple filters, add the Operator to the payload. Refer to the provided code samples for guidance.
     *
     * - The argument values for the *property* filters in the CREATE payload should be:
     *
     * - componentId - Must be a valid componentId value. If an invalid value is passed, the report or the GET response will be blank or will have zero records.
     *
     * - environmentId - Must be valid environmentId value. If an invalid value is passed, the report or the GET response will be blank or will have zero records.
     *
     * - containerId - Must be a valid atomId or moleculeId. If an invalid value is passed, the report or the GET response will be blank or will have zero records.
     *
     * - connectorClass - Must be valid connectorClass. Values must be either Standard, Small Business, Trading Partner, or Enterprise.
     * @param requestBody
     * @returns ConnectionLicensingDownload Successful request and response.
     * @throws ApiError
     */
    public createConnectionLicensingReport(
        requestBody?: ConnectionLicensingReport,
    ): CancelablePromise<ConnectionLicensingDownload> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ConnectionLicensingReport',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
