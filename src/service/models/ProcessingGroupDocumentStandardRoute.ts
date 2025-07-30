/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProcessingGroupDocumentTypeRoute } from './ProcessingGroupDocumentTypeRoute';
export type ProcessingGroupDocumentStandardRoute = {
    DocumentTypeRoute?: Array<ProcessingGroupDocumentTypeRoute>;
    processId?: string;
    standard?: ProcessingGroupDocumentStandardRoute.standard;
};
export namespace ProcessingGroupDocumentStandardRoute {
    export enum standard {
        X12 = 'x12',
        EDIFACT = 'edifact',
        HL7 = 'hl7',
        CUSTOM = 'custom',
        ROSETTANET = 'rosettanet',
        TRADACOMS = 'tradacoms',
        ODETTE = 'odette',
    }
}

