/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Event = {
    /**
     * The ID of the account in which this event occurred.
     */
    accountId: string;
    /**
     * The ID of the Runtime on which the event occurred.
     */
    atomId: string;
    /**
     * The name of the Runtime on which the event occurred.
     */
    atomName: string;
    /**
     * The classification \(PROD or TEST\) associated with the environment in which the process ran, or to which the Runtime is attached. The classification PROD is returned in the QUERY result if you do not enable environments in the account.
     */
    classification: string;
    /**
     * The end date and time of the run \(for applicable events\).
     */
    endTime: string;
    /**
     * The name of the environment in which the process ran, or to which the Runtime is attached. If you do not enable environments in the account, the QUERY does not return this field in the QUERY result.
     */
    environment: string;
    /**
     * he error message \(for applicable events\).
     */
    error: string;
    /**
     * The number of documents in an error status for the run \(for applicable events\).
     */
    errorDocumentCount?: number;
    /**
     * DOCUMENT, if the error applied to one or more documents, or PROCESS, if the error occurred at the process level \(for applicable events\).
     */
    errorType: string;
    /**
     * The label of the step in which the error occurred \(for applicable events\).
     */
    erroredStepLabel: string;
    /**
     * The type of the step in which the error occurred — for example, Start, Connector \(for applicable events\).
     */
    erroredStepType: string;
    /**
     * The date and time the event occurred.
     */
    eventDate: string;
    /**
     * The ID of the event.
     */
    eventId: string;
    /**
     * The notification level of the event \(INFO, WARNING, ERROR\).
     */
    eventLevel: string;
    /**
     * The type of the event \(atom.status, process.execution, process.missedSchedule, user.notification\).
     */
    eventType: string;
    /**
     * The run ID of the process \(for applicable events\).
     */
    executionId: string;
    /**
     * The number of inbound documents for the run \(for applicable events\).
     */
    inboundDocumentCount?: number;
    /**
     * The number of outbound documents for the run \(for applicable events\).
     */
    outboundDocumentCount?: number;
    /**
     * The ID of the sub-process ONLY when using the ‘Notify’ shape with the 'Generate Platform Event' option and when the process is executed in the 'General' and 'Bridge' modes.
     */
    processId: string;
    /**
     * The name of the process \(for applicable events\).
     */
    processName: string;
    /**
     * The date and time the event recorded.
     */
    recordDate: string;
    /**
     * The start date and time of the run \(for applicable events\).
     */
    startTime: string;
    /**
     * User-specified message for an event of type user.notification. For other types of events, the event status — for example, COMPLETE, ERROR.
     */
    status: string;
    /**
     * For an event of type user.notification, the title of the originating step.
     */
    title: string;
    /**
     * The ID of the parent process.
     */
    topLevelProcessId: string;
    updateDate: string;
};

