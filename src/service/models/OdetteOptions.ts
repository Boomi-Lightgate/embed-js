/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EdiDelimiter } from './EdiDelimiter';
import type { EdiSegmentTerminator } from './EdiSegmentTerminator';
export type OdetteOptions = {
    acknowledgementoption?: OdetteOptions.acknowledgementoption;
    compositeDelimiter: EdiDelimiter;
    elementDelimiter: EdiDelimiter;
    envelopeoption?: OdetteOptions.envelopeoption;
    filteracknowledgements?: boolean;
    includeUNA?: boolean;
    outboundInterchangeValidation?: boolean;
    outboundValidationOption?: OdetteOptions.outboundValidationOption;
    rejectDuplicateUNB?: boolean;
    segmentTerminator: EdiSegmentTerminator;
};
export namespace OdetteOptions {
    export enum acknowledgementoption {
        DONOTACKITEM = 'donotackitem',
        ACKITEM = 'ackitem',
    }
    export enum envelopeoption {
        GROUPALL = 'groupall',
        GROUPMESSAGE = 'groupmessage',
    }
    export enum outboundValidationOption {
        FILTER_ERROR = 'filterError',
        FAIL_ALL = 'failAll',
    }
}

