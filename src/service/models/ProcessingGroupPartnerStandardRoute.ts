/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProcessingGroupPartnerDocumentRoute } from './ProcessingGroupPartnerDocumentRoute';
export type ProcessingGroupPartnerStandardRoute = {
    DocumentTypeRoute?: Array<ProcessingGroupPartnerDocumentRoute>;
    processId?: string;
    standard?: ProcessingGroupPartnerStandardRoute.standard;
};
export namespace ProcessingGroupPartnerStandardRoute {
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

