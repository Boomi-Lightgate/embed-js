/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ThroughputAccount = {
    /**
     * The account ID from which you process the data.
     */
    accountId?: string;
    /**
     * The Runtime ID from which you process the data.
     */
    atomId?: string;
    /**
     * The processing date of the data. The time zone is UTC±00:00.
     */
    date?: string;
    /**
     * The calculated throughput size, in bytes.
     */
    value?: number;
};

