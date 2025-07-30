/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { customFields } from './customFields';
export type ODETTEConnectorRecord = {
    account: string;
    ackReport?: string;
    ackRequested?: string;
    ackStatus?: string;
    actionType: string;
    atomId: string;
    connectorName: string;
    connectorType: string;
    controllingAgency?: string;
    customFields: customFields;
    dateProcessed: string;
    documentIndex?: number;
    errorMessage: string;
    executionId: string;
    id: string;
    interchangeControlReference?: string;
    interchangeDate?: string;
    interchangeTime?: string;
    messageReferenceNumber?: string;
    messageType?: string;
    operationName: string;
    outboundValidationReport?: string;
    outboundValidationStatus?: string;
    receiverID?: string;
    release?: string;
    senderID?: string;
    size?: number;
    successful?: boolean;
    version?: string;
};

