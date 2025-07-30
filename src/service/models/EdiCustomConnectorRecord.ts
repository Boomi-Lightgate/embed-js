/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { customFields } from './customFields';
export type EdiCustomConnectorRecord = {
    /**
     * The ID of the account that ran this record.
     */
    account: string;
    /**
     * The type of action with which this record corresponds — *Send* for an outbound interchange, *Get* for an inbound interchange using the Disk, FTP, or SFTP communication method, or *Listen* for an inbound interchange using the AS2 or HTTP communication method.
     */
    actionType: string;
    /**
     * The ID of the Runtime that processed this record.
     */
    atomId: string;
    /**
     * The value is *Trading Partner* for a Custom trading partner Send operation, or *Start* for a Custom trading partner Listen operation.
     */
    connectorName: string;
    /**
     * *edicustom* is the connector type for any record.
     */
    connectorType: string;
    /**
     * Custom fields based on the fields configured on the **Document Tracking** tab of the **Setup** page. The names of the fields are dependent upon your account setup.
     */
    customFields: customFields;
    /**
     * The processing date and time of this record. Format is yyyy-MM-dd'T'HH:mm:ss'Z' \(for example, 2019-09-14T15:32:00Z\).
     */
    dateProcessed: string;
    /**
     * The numerical index of this record in the execution.
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
     * The name of the sending trading partner component.
     */
    fromTradingPartner?: string;
    /**
     * The ID of this record.
     */
    id: string;
    /**
     * The name of the operation component that processed the record.
     */
    operationName: string;
    /**
     * The size, in bytes, of the document that corresponds to this record.
     */
    size?: number;
    /**
     * Whether the record is a success or error.
     */
    successful?: boolean;
    /**
     * The name of the receiving trading partner component.
     */
    toTradingPartner?: string;
};

