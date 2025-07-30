/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConnectorFields } from './ConnectorFields';
import type { TrackedFields } from './TrackedFields';
export type GenericConnectorRecord = {
    account?: string;
    /**
     * The type of action the connector performs, for example, GET, SEND, LISTEN, and so on.
     */
    actionType?: string;
    /**
     * The ID of the Runtime in which the process ran. In the case of a Runtime cloud, use the ID of the Cloud attachment and not that of the Cloud itself.
     */
    atomId?: string;
    /**
     * When sending documents into or out of the Connection component, use this ID.
     */
    connectionId?: string;
    /**
     * When sending documents into or out of the Connection component, use this user-defined name.
     */
    connectionName?: string;
    /**
     * Displays all connector-related fields from the connector included in this document.
     */
    connectorFields: ConnectorFields;
    /**
     * The internal and unique identifier for the connector type the document was sent into or out of, such as `http`, `ftp`, or `greatplains`.
     */
    connectorType?: string;
    /**
     * The processing date and time of the document.
     */
    dateProcessed?: string;
    /**
     * Index of the document within the context of its execution connector \(starting from 0\).
     */
    documentIndex?: number;
    /**
     * Displays the corresponding error message for an unsuccessful document.
     */
    errorMessage: string;
    /**
     * The ID of the [Execution Connector object](/api/platformapi#tag/ExecutionConnector). This ID identifies the execution connector of which this document is a part.
     */
    executionConnectorId?: string;
    /**
     * The ID of the process run.
     */
    executionId?: string;
    /**
     * The ID of the GenericConnectorRecord. You obtain this ID from querying the GenericConnectorRecord object
     */
    id?: string;
    /**
     * Index of the document in the context of the overall run \(starting from 1\).
     */
    incrementalDocumentIndex?: number;
    /**
     * When sending documents into or out of the Operation component, use this ID.
     */
    operationId?: string;
    /**
     * When sending documents into or out of the Operation component, use this user-defined name.
     */
    operationName?: string;
    /**
     * If the value is true, this indicates that you can rerun the document using the Rerun Document operation. If the value is false, this indicates that you cannot rerun the document using the Rerun Document operation.
     */
    retryable?: boolean;
    /**
     * The size of the document in kilobytes.
     */
    size?: number;
    /**
     * If the value is true, this indicates the configuration of the Connector or Trading Partner as a **Start** shape in the process run. If the value is false, this indicates that you did not configure the Connector or Trading Partner as a **Start** shape in the process run.
     */
    startShape?: boolean;
    /**
     * Indicates whether the document successfully or unsuccessfully ran.
     */
    status?: GenericConnectorRecord.status;
    /**
     * Displays all the custom tracked fields from this document. To get a list of the available tracked fields, refer to [CustomTrackedField object](#tag/CustomTrackedField).
     */
    trackedFields: TrackedFields;
};
export namespace GenericConnectorRecord {
    /**
     * Indicates whether the document successfully or unsuccessfully ran.
     */
    export enum status {
        SUCCESS = 'SUCCESS',
        ERROR = 'ERROR',
    }
}

