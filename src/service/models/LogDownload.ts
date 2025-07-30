/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type LogDownload = {
    /**
     * The status code as one of the following:
     * - 202 — status message: Beginning download.
     * - 504 — status message: Runtime is unavailable.
     */
    statusCode?: string;
    /**
     * The status message.
     */
    message?: string;
    /**
     * (statusCode 202 only) The URL for the download.
     */
    url?: string;
};

