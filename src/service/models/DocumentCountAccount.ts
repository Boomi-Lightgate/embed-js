/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type DocumentCountAccount = {
    /**
     * The ID of the account that processed the documents.
     */
    accountId?: string;
    /**
     * The ID of the Runtime that processed the documents.
     */
    atomId?: string;
    /**
     * The processing date of the documents. The time zone is UTC±00:00.
     */
    date?: string;
    /**
     * The count of processed documents.
     */
    value?: number;
};

