/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { customFields } from './customFields';
export type X12ConnectorRecord = {
    /**
     * The ID of the account in which this record ran.
     */
    account: string;
    /**
     * The acknowledgment report.
     */
    ackReport?: string;
    /**
     * The acknowledgment status — either Accepted, Accepted with Errors, Partially Accepted, or Rejected.
     */
    ackStatus?: string;
    /**
     * The type of action with which this record corresponds — Send for an outbound interchange, Get for an inbound interchange using the Disk, FTP, or SFTP communication method, or Listen for an inbound interchange using the AS2 or HTTP communication method.
     */
    actionType: string;
    /**
     * The Responsible Agency Code.
     */
    agencyCode?: string;
    /**
     * For inbound interchanges, the Application Receiver’s Code, which identifies the receiver.
     */
    appReceiverID?: string;
    /**
     * For outbound interchanges, the Application Sender’s Code, which identifies the sender.
     */
    appSenderID?: string;
    /**
     * The ID of the Runtime that processed this record.
     */
    atomId: string;
    /**
     * The value is Trading Partner for an X12 trading partner Send operation, or Start for an X12 trading partner Listen operation.
     */
    connectorName: string;
    /**
     * x12 is the connector type for any record.
     */
    connectorType: string;
    /**
     * Custom fields based on the those configured on the **Document Tracking** tab of the **Setup** page. The names of the fields depend on your account setup.
     */
    customFields: customFields;
    /**
     * The processing date and time for this record. The format is *yyyy-MM-dd'T'HH:mm:ss'Z'*, for example, 2016-01-31T15:32:00Z.
     */
    dateProcessed: string;
    /**
     * The numerical index of this record in the run.
     */
    documentIndex?: number;
    /**
     * Any error message associated with this record.
     */
    errorMessage: string;
    /**
     * The ID of the run.
     */
    executionId: string;
    /**
     * The identifier for the type of message in the functional group.
     */
    functionalID?: string;
    /**
     * The group control number.
     */
    gsControl?: string;
    /**
     * The preparation date of the interchange.
     */
    gsDate?: string;
    /**
     * The preparation time of the interchange.
     */
    gsTime?: string;
    /**
     * The Version, Release, and Industry identifier code.
     */
    gsVersion?: string;
    /**
     * The ID of this record.
     */
    id: string;
    /**
     * The interchange acknowledgment report, which contains descriptions of interchange segment validation errors.
     */
    isaAckReport?: string;
    /**
     * The interchange acknowledgment status — either Accepted, Accepted with Errors, Partially Accepted, or Rejected
     */
    isaAckStatus?: string;
    /**
     * The number that uniquely identifies the interchange.
     */
    isaControl?: string;
    /**
     * The name of the operation component that processed the record.
     */
    operationName: string;
    /**
     * The outbound validation report. This report contains descriptions of errors present in the outbound interchange. If you did not select the outbound validation option in the sending trading partner, the value is N/A. The platform omits this field for an inbound interchange.
     */
    outboundValidationReport?: string;
    /**
     * The outbound validation status — is either Success, Error-Interchange, Error-Transaction Set, or N/A. For an outbound interchange for which you did not select the outbound validation option in the sending trading partner, the value is N/A. The platform omits this field for an inbound interchange.
     */
    outboundValidationStatus?: string;
    /**
     * For inbound interchanges, the Interchange Receiver ID, which identifies the receiver.
     */
    receiverID?: string;
    /**
     * For inbound interchanges, the Interchange ID Qualifier, which categorizes the Receiver ID.
     */
    receiverIDQualifier?: string;
    /**
     * For outbound interchanges, the Interchange Sender ID, which identifies the sender.
     */
    senderID?: string;
    /**
     * For outbound interchanges, the Interchange ID Qualifier, which categorizes the Sender ID.
     */
    senderIDQualifier?: string;
    /**
     * The size, in bytes, of the document that corresponds to this record.
     */
    size?: number;
    /**
     * The transaction set control number.
     */
    stControl?: string;
    /**
     * The Interchange Control standard.
     */
    standard?: string;
    /**
     * Displays the same information as in the **Standard** column of the user interface.
     */
    standardID?: string;
    /**
     * Whether the record is a success or error.
     */
    successful?: boolean;
    /**
     * Specifies whether the interchange is for testing or production.
     */
    testIndicator?: string;
    /**
     * The identifier code for the transaction set.
     */
    transactionSet?: string;
};

