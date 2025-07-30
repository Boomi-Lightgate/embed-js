/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ExecutionSummaryRecord = {
    /**
     * The account under which the processes ran.
     */
    accountID?: string;
    /**
     * The component ID of the Runtime on which the processes ran.
     */
    atomID?: string;
    /**
     * The name of the Runtime on which the runs occurred.
     */
    atomName?: string;
    /**
     * The aggregate elapsed processing time, in milliseconds, of the runs that occurred.
     */
    elapsedTime?: number;
    /**
     * A composite value enabling computation of the standard deviation of elapsed run time for the processes that occurred using the [parallel algorithm](http://en.wikipedia.org/wiki/Algorithms_for_calculating_variance#Parallel_algorithm).
     */
    elapsedVarSum?: number;
    /**
     * The number of runs that occurred.
     */
    executionCount?: number;
    /**
     * The aggregate number of processed inbound documents for the runs that occurred.
     */
    inboundDocCount?: number;
    /**
     * The aggregate size, in bytes, of the processed inbound documents for the runs that occurred.
     */
    inboundDocSize?: number;
    /**
     * The aggregate elapsed wait time, in milliseconds, before the start of processing for the runs that occurred.
     */
    launchElapsedTime?: number;
    /**
     * The API Service component that kicks off the run.<br /> **Note:** The Runtime must have the **API Type** set to **Advanced** on the **Shared Web Server** tab of **Runtime Management** to specify launcherId.
     */
    launcherID?: string;
    /**
     * The time, in milliseconds, it took for the most time-consuming run that occurred.
     */
    maxElapsedTime?: number;
    /**
     * The aggregate number of processed outbound documents for the runs that occurred.
     */
    outboundDocCount?: number;
    /**
     * The aggregate size, in bytes, of the processed outbound documents for the runs that occurred.
     */
    outboundDocSize?: number;
    /**
     * The component ID of the processes that ran.
     */
    processID?: string;
    /**
     * The name of the process that was run.
     */
    processName?: string;
    /**
     * The web service user that authenticated to make the run request. <br />**Note:** For Runtimes with an Authentication Type of External Provider, the reportKey is the API Key. Otherwise, it is the specified user name.
     */
    reportKey?: string;
    /**
     * The aggregate number of resulting documents for the runs that occurred.
     */
    returnDocCount?: number;
    /**
     * The aggregate size, in bytes, of resulting documents for the runs that occurred.
     */
    returnDocSize?: number;
    /**
     * The status of the runs. Allowed values include COMPLETE, COMPLETE\_WARN, ERROR.
     */
    status?: string;
    /**
     * The start time of the represented time block.
     */
    timeBlock?: string;
};

