/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AtomAS2Artifacts } from '../models/AtomAS2Artifacts';
import type { LogDownload } from '../models/LogDownload';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AtomAs2ArtifactsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates an AtomAS2Artifacts object
     * You can use the Download AS2 Artifacts Log operation to request and download AS2 artifacts logs.
     * @param requestBody
     * @returns LogDownload Successful request and response.
     * @throws ApiError
     */
    public createAtomAs2Artifacts(
        requestBody?: AtomAS2Artifacts,
    ): CancelablePromise<LogDownload> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/AtomAS2Artifacts',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Missing or incorrect authentication credentials.
                To know the action to be taken for this and the other error responses (410, 503, etc), refer to [API Errors](#section/Introduction/API-errors)`,
            },
        });
    }
}
