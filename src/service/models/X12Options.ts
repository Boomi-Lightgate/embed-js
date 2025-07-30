/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EdiDelimiter } from './EdiDelimiter';
import type { EdiSegmentTerminator } from './EdiSegmentTerminator';
export type X12Options = {
    acknowledgementoption?: X12Options.acknowledgementoption;
    elementDelimiter: EdiDelimiter;
    envelopeoption?: X12Options.envelopeoption;
    filteracknowledgements?: boolean;
    outboundInterchangeValidation?: boolean;
    outboundValidationOption?: X12Options.outboundValidationOption;
    rejectDuplicateInterchange?: boolean;
    segmentTerminator: EdiSegmentTerminator;
};
export namespace X12Options {
    export enum acknowledgementoption {
        DONOTACKITEM = 'donotackitem',
        ACKFUNCITEM = 'ackfuncitem',
        ACKTRANITEM = 'acktranitem',
    }
    export enum envelopeoption {
        GROUPALL = 'groupall',
        GROUPFG = 'groupfg',
        GROUPST = 'groupst',
    }
    export enum outboundValidationOption {
        FILTER_ERROR = 'filterError',
        FAIL_ALL = 'failAll',
    }
}

