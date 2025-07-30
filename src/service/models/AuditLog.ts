/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuditLogProperty } from './AuditLogProperty';
export type AuditLog = {
    AuditLogProperty?: Array<AuditLogProperty>;
    /**
     * The account in which the action occurred.
     */
    accountId?: string;
    /**
     * The action type.
     */
    action?: string;
    /**
     * The ID of the Runtime, Runtime cluster, or Runtime cloud on which the action occurred.
     */
    containerId?: string;
    /**
     * The date and time the action occurred.
     */
    date?: string;
    /**
     * The ID assigned to the Audit Log record.
     */
    documentId?: string;
    /**
     * The severity level of the action: DEBUG, ERROR, INFO, or WARNING.
     */
    level?: string;
    /**
     * A descriptive message. Not all types of management actions have a message in their audit log entries.
     */
    message?: string;
    /**
     * The action type qualifier.
     */
    modifier?: string;
    /**
     * Where the action occurred: API, INTERNAL, MOBILE, UI, or UNKNOWN
     */
    source?: string;
    /**
     * The type of object on which the action occurred.
     */
    type?: string;
    /**
     * The ID \(email address\) of the user who performed the action.
     */
    userId?: string;
};

