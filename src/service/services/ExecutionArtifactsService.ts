/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExecutionArtifacts } from '../models/ExecutionArtifacts';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ExecutionArtifactsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates an ExecutionArtifacts object
     * Allows you to retrieve a link for downloading detailed information about a given process run.
     * - You must have the Runtime Management privilege to perform the CREATE operation. If you have the Runtime Management Read Access privilege, you cannot download execution artifacts.
     * - Additionally, as the Cloud owner, you must select the **Enable Download of Execution Artifacts and Worker Logs** property for your account. This property permits you to download process execution data, and you can access it from the Cloud Attachment Quota tab of Manage > Cloud Management.
     * - After providing the endpoint and a request body containing the execution ID, the CREATE response returns a download URL that you can open (or copy and paste) in your web browser, which initiates the file download to your local drive.
     * To retrieve the download link for file containing a process execution artifacts,
     * 1. First create a CREATE (or POST) request to `https://api.boomi.com/api/rest/v1/<accountId>/ExecutionArtifacts` where `accountId` is the ID of the account authenticating the request.
     * 2. Populate the request body with the `executionId`, which is the identifier of the given run process.
     * 3. Send the request and either open or copy and paste the URL from the response into your web browser.
     * @param requestBody
     * @returns ExecutionArtifacts Successful request and response.
     * @throws ApiError
     */
    public createExecutionArtifacts(
        requestBody?: ExecutionArtifacts,
    ): CancelablePromise<ExecutionArtifacts> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ExecutionArtifacts',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
