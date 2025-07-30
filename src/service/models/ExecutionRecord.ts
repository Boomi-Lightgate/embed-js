/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ExecutionRecord = {
    /**
     * The ID of the account in which you ran this execution.
     */
    account: string;
    /**
     * The ID of the Runtime the on which the process ran.
     */
    atomId: string;
    /**
     * The name of the Runtime on which the process ran.
     */
    atomName: string;
    /**
     * The number of milliseconds it took to run the process.
     */
    executionDuration?: number;
    /**
     * The ID of the execution.
     */
    executionId: string;
    /**
     * The start date and time this run.
     */
    executionTime: string;
    /**
     * Indicates how initiation of the process run occurred. Possible values are:<br />-   *exec*\_*listener* \(run initiated by a listener request\)<br />- *exec*\_*manual* \(manual run\)<br />- *exec*\_*sched* \(scheduled run\)<br />- *retry*\_*manual* \(manual retry\)<br />- *retry*\_*sched* \(scheduled retry\)<br />- *sub*\_*process* \(subprocess call\)<br />- *test*\_*manual* \(test mode run\)
     */
    executionType: ExecutionRecord.executionType;
    /**
     * The number of processed inbound documents.
     */
    inboundDocumentCount?: number;
    /**
     * The aggregate size in bytes of the processed inbound documents.
     */
    inboundDocumentSize?: number;
    /**
     * The number of processed inbound documents with errors.
     */
    inboundErrorDocumentCount?: number;
    /**
     * The API Service component that kicks off the run.<br /><br /> **Note:** The Runtime must have the **API Type** set to **Advanced** on the **Shared Web Server** tab of **Runtime Management** to specify the launcherID.
     */
    launcherID: string;
    /**
     * Any error message returned from the run.
     */
    message: string;
    /**
     * The ID of the Molecule node in which the run occurred for a process run in a Runtime cluster or Runtime cloud. For a run occurring in a Runtime, this field is omitted.
     */
    nodeId: string;
    /**
     * The original execution ID, if this execution is a retry.
     */
    originalExecutionId: string;
    /**
     * The number of processed outbound documents.
     */
    outboundDocumentCount?: number;
    /**
     * The aggregate size in bytes of the processed outbound documents.
     */
    outboundDocumentSize?: number;
    /**
     * The ID of the run of the parent process, if this run and the parent process’ run were both subprocesses.
     */
    parentExecutionId: string;
    /**
     * The ID of the run process.
     */
    processId: string;
    /**
     * The name of the run process.
     */
    processName: string;
    /**
     * The end time when the process execution completes.
     */
    recordedDate: string;
    /**
     * The web service user that authenticated to make the run request.<br /><br />**Note:** For Runtimes with an Authentication Type of External Provider, the reportKey is the API Key. Otherwise, it is the specified user name.
     */
    reportKey: string;
    /**
     * The status of the run. Possible values are:<br />- *ABORTED*<br />- *COMPLETE*<br />- *COMPLETE*\_*WARN*<br />- *DISCARDED*<br />- *ERROR*<br />- *INPROCESS*<br />- *STARTED*
     */
    status: string;
    /**
     * The ID of the run of the top-level process, if this run is a subprocess.
     */
    topLevelExecutionId: string;
};
export namespace ExecutionRecord {
    /**
     * Indicates how initiation of the process run occurred. Possible values are:<br />-   *exec*\_*listener* \(run initiated by a listener request\)<br />- *exec*\_*manual* \(manual run\)<br />- *exec*\_*sched* \(scheduled run\)<br />- *retry*\_*manual* \(manual retry\)<br />- *retry*\_*sched* \(scheduled retry\)<br />- *sub*\_*process* \(subprocess call\)<br />- *test*\_*manual* \(test mode run\)
     */
    export enum executionType {
        EXEC_MANUAL = 'exec_manual',
        EXEC_SCHED = 'exec_sched',
        EXEC_LISTENER = 'exec_listener',
        EXEC_LISTENER_BRIDGE = 'exec_listener_bridge',
        EXEC_REMOTE = 'exec_remote',
        RETRY_MANUAL = 'retry_manual',
        RETRY_SCHED = 'retry_sched',
        FIBER = 'fiber',
        SUB_PROCESS = 'sub_process',
        TEST_MANUAL = 'test_manual',
        TEST_SUB_PROCESS = 'test_sub_process',
        UNKNOWN = 'unknown',
    }
}

