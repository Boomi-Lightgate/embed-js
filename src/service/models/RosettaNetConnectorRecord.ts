/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { customFields } from './customFields';
export type RosettaNetConnectorRecord = {
    /**
     * The Partner Interface Process \(PIP\) code.
     */
    PIPCode?: string;
    /**
     * The unique version number of the PIP document.
     */
    PIPVersion?: string;
    /**
     * The ID of the account in which you ran the record.
     */
    account: string;
    /**
     * The acknowledgment report.
     */
    ackReport?: string;
    /**
     * The acknowledgment status — either Acknowledged, Error - No Acknowledgement Returned, Exception, or Not Expected.
     */
    ackStatus?: string;
    /**
     * The unique identifier for the action instance.
     */
    actionInstanceIdentifier?: string;
    /**
     * The type of action with which this record corresponds — Send for an outbound interchange, Get for an inbound interchange using the Disk, FTP, or SFTP communication method, or Listen for an inbound interchange using the AS2 or HTTP communication method.
     */
    actionType: string;
    /**
     * The ID of the Runtime that processed this record.
     */
    atomId: string;
    /**
     * The number of times you attempted the transaction — for example, 1 for the first attempt. For a RosettaNet 2.0 interchange, the value is N/A.
     */
    attemptCount?: string;
    /**
     * The code identifying the business activity within the PIP.
     */
    businessActivityIdentifier?: string;
    /**
     * The value is Trading Partner** for a RosettaNet trading partner Send operation, or Start for a RosettaNet trading partner Listen operation.
     */
    connectorName: string;
    /**
     * *rosettanet* is the connector type for any record.
     */
    connectorType: string;
    /**
     * Custom fields based on the fields configured on the **Document Tracking** tab of the **Setup** page. The names of the fields are dependent upon your account setup.
     */
    customFields: customFields;
    /**
     * The processing date and time of this record. The format is *yyyy-MM-dd'T'HH:mm:ss'Z'*, — for example, 2016-01-31T15:32:00Z.
     */
    dateProcessed: string;
    /**
     * The date and time of the message delivery.
     */
    dateTime?: string;
    /**
     * The numerical index of this record in the run.
     */
    documentIndex?: number;
    /**
     * Any error message associated with this record. This field is omitted for a successful interchange.
     */
    errorMessage: string;
    /**
     * The ID of the run.
     */
    executionId: string;
    /**
     * The version of the RosettaNet Implementation Framework — *1.1* or *2.0* — that specifies the structure of the document represented by this record.
     */
    frameworkVersion?: string;
    /**
     * The code identifying the sending trading partner’s business service network component.
     */
    fromGlobalBusinessServiceCode?: string;
    /**
     * The code identifying the role the sending trading partner plays in the PIP.
     */
    fromGlobalPartnerRoleClassificationCode?: string;
    /**
     * The business action.
     */
    globalBusinessActionCode?: string;
    /**
     * Specifies whether the record represents a Request, Response, or neither; in the latter case the value is N/A. For a RosettaNet 2.0 interchange the value is N/A.
     */
    globalDocumentFunctionCode?: string;
    /**
     * The name of the PIP specification document. For a RosettaNet 2.0 interchange, the value is *N/A*.
     */
    globalProcessCode?: string;
    /**
     * Indicates whether the record is a Production or Test mode interchange.
     */
    globalUsageCode?: string;
    /**
     * The ID of this record.
     */
    id: string;
    /**
     * If the document is a response, the business action of the corresponding request.
     */
    inResponseToGlobalBusinessActionCode?: string;
    /**
     * If the document is a response, the action instance identifier of the corresponding request.
     */
    inResponseToInstanceIdentifier?: string;
    /**
     * Yes indicates transporting the document from the next hub securely. No suggests the document does not need transporting from the next hub uniquely. For a RosettaNet 1.1 interchange, the value is N/A.
     */
    isSecureTransportRequired?: string;
    /**
     * The unique identifier for the known initiating trading partner. The value is sourced by the document property Known Initiating Partner Global Business Identifier in the process. If this document property is not set in the process, the field’s value is the same as the senderID.
     */
    knownInitiatingPartnerID?: string;
    /**
     * The name of the operation component that processed the record.
     */
    operationName: string;
    /**
     * The outbound validation report. This report contains descriptions of errors present in the outbound message. If you did not select the outbound validation option in the sending trading partner, the value is N/A. Inbound messages omit this field.
     */
    outboundValidationReport?: string;
    /**
     * The outbound validation status — is either Success, Error-Message, or N/A. For an outbound message for which you do not select the outbound validation option in the sending trading partner, the value is N/A. Inbound messages omit this field.
     */
    outboundValidationStatus?: string;
    /**
     * The unique identifier for the process instance. For a RosettaNet 2.0 interchange, the value is N/A.
     */
    processInstanceIdentifier?: string;
    /**
     * The unique identifier for the receiving trading partner.
     */
    receiverID?: string;
    /**
     * The unique identifier for the sending trading partner.
     */
    senderID?: string;
    /**
     * The size, in bytes, of the document that corresponds to this record.
     */
    size?: number;
    /**
     * Whether the record is a success or error.
     */
    successful?: boolean;
    /**
     * The length of the time-out period, in the format *CCYYMMDDThhmmss.sss*, for acknowledging acceptance of a message. For a RosettaNet 2.0 interchange, the value is N/A.
     */
    timeToAcknowledgeAcceptance?: string;
    /**
     * The length of the time-out period, in the format *CCYYMMDDThhmmss.sss*, for acknowledging receipt of a message. For a RosettaNet 2.0 interchange, the value is N/A.
     */
    timeToAcknowledgeReceipt?: string;
    /**
     * The maximum length of the time period, in the format *CCYYMMDDThhmmss.sss*, that an initiating business activity waits for a responding activity to process a document. For a RosettaNet 2.0 interchange, the value is N/A.
     */
    timeToPerform?: string;
    /**
     * The code identifying the receiving trading partner’s business service network component.
     */
    toGlobalBusinessServiceCode?: string;
    /**
     * The code identifying the role the receiving trading partner plays in the PIP.
     */
    toGlobalPartnerRoleClassificationCode?: string;
    /**
     * The unique identifier for the transaction instance.
     */
    transactionInstanceIdentifier?: string;
};

