/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Document } from './Document';
/**
 * You must include either the `AllDocuments` field or the `SelectedDocuments` field in a request, but not both. Indicates that the Rerun Document operation reruns only those documents you specify in the `genericConnectorRecordId` value.
 */
export type SelectedDocuments = {
    Document?: Array<Document>;
};

