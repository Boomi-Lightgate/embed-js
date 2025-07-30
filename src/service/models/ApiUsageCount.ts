/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ApiUsageCount = {
    /**
     * The environment classification.
     */
    classification?: ApiUsageCount.classification;
    /**
     * The count of unsuccessful process runs, where the status is error or aborted.
     */
    errorCount?: number;
    /**
     * The start time of the day, in UTC.
     *
     * Date with the format yyyy-MM-dd'T'HH:mm:ss'Z' — for example, 2017-09-01T00:00:00Z.To specify a time block, use the BETWEEN operator with two arguments, one representing the start time and the other representing the end time.
     *
     * Boomi recommends specifying a time block in all queries, particularly for heavy users of Low Latency processes, as a means of preventing the return of excessively large amounts of data.
     */
    processDate?: string;
    /**
     * The count of successful process runs, where a successful run is one with a status of complete.
     */
    successCount?: number;
};
export namespace ApiUsageCount {
    /**
     * The environment classification.
     */
    export enum classification {
        PROD = 'PROD',
        TEST = 'TEST',
    }
}

