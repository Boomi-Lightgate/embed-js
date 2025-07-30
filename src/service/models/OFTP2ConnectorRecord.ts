/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { customFields } from './customFields';
export type OFTP2ConnectorRecord = {
    /**
     * The ID of the account from which you ran this record.
     */
    account: string;
    /**
     * The type of action with which this record corresponds - Send, Get or Listen.
     */
    actionType: string;
    /**
     * The ID of the Runtime that processed this record.
     */
    atomId: string;
    /**
     * For the OFTP2 Client, the value is oftp Connector and for the OFTP2 Server, the value is oftpserver Connector.
     */
    connectorName: string;
    /**
     * The type of connector to which this record corresponds- oftp for OFTP2 Client or oftpserver for OFTP2 Server.
     */
    connectorType: string;
    /**
     * Custom fields based on the fields configured on the Setup page's **Document Tracking** tab. The names of the fields are dependent on your account setup.
     */
    customFields: customFields;
    /**
     * The processing date and time of this record. The format is yyyy-MM-dd'T'HH:mm:ss'Z', for example, 2013-08-08T15:32:00Z.
     */
    dateProcessed: string;
    /**
     * The numerical index of this record in the run.
     */
    documentIndex?: number;
    errorMessage: string;
    /**
     * The ID of the execution run.
     */
    executionId: string;
    /**
     * The ID of this record.
     */
    id: string;
    /**
     * The Initiator's Identification Code.
     */
    initiator_ssidcode?: string;
    /**
     * Only displays if the transmission failed. The reason numeric code for the failure.
     */
    nareas?: string;
    /**
     * Only displays if the transmission failed. The reason text for the failure.
     */
    nareast?: string;
    objecttype?: string;
    /**
     * The name of the operation component that processed this record.
     */
    operationName: string;
    /**
     * The Responder's Identification Code.
     */
    responder_ssidcode?: string;
    /**
     * Indicates which cipher suite was used to sign or encrypt the file. The cipher suite in this value should also be used when a signed EERP or NERP is requested.<br />-`00` - No security services<br />-`01` - 3DES_EDE_CBC_3KEY<br /> -`02` - AES_256_CBC
     */
    sfidciph?: string;
    /**
     * Indicates whether an algorithm was used to compress the file.<br />-`0` - No compression<br />-`1` - Compressed with an algorithm.
     */
    sfidcomp?: string;
    /**
     * The date when the virtual file was created. The format is yyyy-MM-dd, for example 2023-06-07.
     */
    sfiddate?: string;
    /**
     * The description of the virtual file.
     */
    sfiddesc?: string;
    /**
     * The destination Odette ID for the virtual file.
     */
    sfiddest?: string;
    /**
     * The dataset name of the virtual file being transferred.
     */
    sfiddsn?: string;
    /**
     * The enveloping format used in the file.<br />-`0` - No enveloped<br />-`1` - File is enveloped using CMS
     */
    sfidenv?: string;
    /**
     * The originator of the virtual file.
     */
    sfidorig?: string;
    /**
     * The size of the original file.
     */
    sfidosiz?: string;
    /**
     * Indicates whether the file has been signed or encrypted before transmission. The following values are possible:<br />-`00` - No security services<br />-`01` - Encrypted<br />-`02` - Signed<br />-`03` - Encrypted and signed
     */
    sfidsec?: string;
    /**
     * Whether the EERP returned for the file must be signed.<br />-`Y` - the EERP must be signed<br />-`N` - The EERP must not be signed
     */
    sfidsign?: string;
    /**
     * The time when the virtual file was created. The format is HH:mm:ss.SSSX, where X is the ticker, for example 10:06:46.2389.
     */
    sfidtime?: string;
    /**
     * The size, in bytes, of the document that corresponds to this record.
     */
    size?: number;
    /**
     * Whether the file transmission is pending an acknowledgment, acknowledged as a success or an error.
     */
    status?: string;
    /**
     * Whether the record is a success or error.
     */
    successful?: boolean;
    ticker?: string;
};

