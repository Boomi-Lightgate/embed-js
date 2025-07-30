/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { customFields } from './customFields';
export type HL7ConnectorRecord = {
    /**
     * The Accept Acknowledgment Report.
     */
    acceptAckReport?: string;
    /**
     * The Accept Acknowledgment status — either *Commit Accept*, *Commit Error*, or *Commit Reject*.
     */
    acceptAckStatus?: string;
    /**
     * The ID of the account in which you ran this record.
     */
    account: string;
    /**
     * The acknowledgment report.
     */
    ackReport?: string;
    /**
     * The acknowledgment status — either *Application Accept*, *Application Error*, or *Application Reject*.
     */
    ackStatus?: string;
    /**
     * The type of action with which this record corresponds — *Send* for an outbound interchange or *Listen* for an inbound interchange.
     */
    actionType: string;
    /**
     * The processing ID of the Runtime for this record.
     */
    atomId: string;
    /**
     * The value is *Trading Partner* for an HL7 trading partner Send operation, or *Start* for an HL7 trading partner Listen operation.
     */
    connectorName: string;
    /**
     * *hl7* is the connector type for any record.
     */
    connectorType: string;
    /**
     * Custom fields based on the fields configured on the Document Tracking tab of the Setup page. The names of the fields are dependent upon your account setup.
     */
    customFields: customFields;
    /**
     * The processing date and time of this record. The format is yyyy-MM-dd'T'HH:mm:ss'Z', for example 2019-09-14T15:32:00Z.
     */
    dateProcessed: string;
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
     * The ID of this record.
     */
    id: string;
    /**
     * If the message satisfies the requirements of the referenced profile’s segment and element configuration, including mandatory fields, data types, and minimum and maximum lengths, the value is true. Otherwise, the value is false.
     */
    isValidMessage?: string;
    /**
     * The unique identifier for the message.
     */
    messageControlId?: string;
    /**
     * The code identifying the type of message.
     */
    messageType?: string;
    /**
     * The name of the operation component processing the record.
     */
    operationName: string;
    /**
     * The outbound validation report. This report contains descriptions of errors present in the outbound interchange. If the outbound validation option is not selected in the sending trading partner, the value is N/A. The API omits this field or an inbound interchange.
     */
    outboundValidationReport?: string;
    /**
     * The outbound validation status — is either Success, Error-Interchange, Error-Message, or N/A. For an outbound interchange for which you do not select the outbound validation option in the sending trading partner, the value is N/A. This field is omitted for an inbound interchange.
     */
    outboundValidationStatus?: string;
    /**
     * The ID of the receiving application among all other applications within the network enterprise.
     */
    receiverApplicationId?: string;
    /**
     * Additional detail regarding the receiving application.
     */
    receiverFacilityId?: string;
    /**
     * The ID of the sending application among all other applications within the network enterprise.
     */
    senderApplicationId?: string;
    /**
     * Additional detail regarding the sending application.
     */
    senderFacilityId?: string;
    /**
     * The size, in bytes, of the document that corresponds to this record.
     */
    size?: number;
    /**
     * Whether the record is a success or error.
     */
    successful?: boolean;
    /**
     * The applicable HL7 version.
     */
    version?: string;
};

