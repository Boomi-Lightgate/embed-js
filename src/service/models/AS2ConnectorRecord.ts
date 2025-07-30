/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { customFields } from './customFields';
export type AS2ConnectorRecord = {
    /**
     * The ID of the account this record was run in.
     */
    account: string;
    /**
     * The acknowledgment status — Acknowledged, Acknowledged/Errors, or Not Acknowledged.
     */
    ackStatus?: string;
    /**
     * The type of action with which this record corresponds — Listen or Send.
     */
    actionType: string;
    /**
     * The arbitrary identifier that indicates the sender of the message.
     */
    as2FromId?: string;
    /**
     * The arbitrary identifier that indicates the recipient of the message.
     */
    as2ToId?: string;
    /**
     * The ID of the Runtime that processed this record.
     */
    atomId: string;
    /**
     * For an AS2 Client \(Send\) operation, the value is the name of the AS2 Client connection component through which the document that corresponds to this record was sent. The value is as2sharedserver Connector for an AS2 Shared Server \(Listen\) operation, Trading Partner for an X12 trading partner Send operation, or Start for an X12 trading partner Listen operation.
     */
    connectorName: string;
    /**
     * The type of connector to which this record corresponds — as2 for AS2 Client \(Send\), as2sharedserver for AS2 Shared Server \(Listen\), or x12 for Trading Partner Send or Listen using the X12 standard.
     */
    connectorType: string;
    /**
     * The length of the message in bytes.
     */
    contentLength?: string;
    customFields: customFields;
    /**
     * The processing date and time of this record.
     */
    dateProcessed: string;
    /**
     * The numerical index of this record in the run.
     */
    documentIndex?: number;
    /**
     * The error message associated with this record if applicable.
     */
    errorMessage: string;
    /**
     * The ID of the run.
     */
    executionId: string;
    /**
     * The file name of the document that corresponds to this record.
     */
    filename?: string;
    /**
     * The ID of this record.
     */
    id: string;
    /**
     * The content of the Message Delivery Notification \(MDN\) message — *processed*, *processed/error*, *processed/error:* *authentication-failed*, *processed/error: decompression-failed*, or *processed/error: decryption-failed*. In a Listen action by the AS2 shared server, an MDN message generates automatically. For a Send action, generating an MDN message is an option for the processing AS2 Client operation.
     */
    mdnMessage?: string;
    /**
     * The arbitrary identifier for the message.
     */
    messageId?: string;
    /**
     * The MIME type of the message — *text/plain*, *application/binary*, *application/edifact*, *application/octet-stream*, *application/edi-x12*, or *application/xml*
     */
    mimetype?: string;
    /**
     * The name of the operation component that processed this record. The component is an AS2 Client operation in the case of a Send action or an AS2 Shared Server operation in the case of a Listen action.
     */
    operationName: string;
    /**
     * The size, in bytes, of the document that corresponds to this record.
     */
    size?: number;
    /**
     * The arbitrary subject name for the message.
     */
    subject?: string;
    /**
     * Whether the record is a success or error.
     */
    successful?: boolean;
};

