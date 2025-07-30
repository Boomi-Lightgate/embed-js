/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EdiDelimiter } from './EdiDelimiter';
import type { EdiSegmentTerminator } from './EdiSegmentTerminator';
export type EdifactOptions = {
    acknowledgementoption?: EdifactOptions.acknowledgementoption;
    compositeDelimiter: EdiDelimiter;
    elementDelimiter: EdiDelimiter;
    envelopeoption?: EdifactOptions.envelopeoption;
    filteracknowledgements?: boolean;
    includeUNA?: boolean;
    outboundInterchangeValidation?: boolean;
    outboundValidationOption?: EdifactOptions.outboundValidationOption;
    rejectDuplicateUNB?: boolean;
    segmentTerminator: EdiSegmentTerminator;
};
export namespace EdifactOptions {
    export enum acknowledgementoption {
        DONOTACKITEM = 'donotackitem',
        ACKITEM = 'ackitem',
    }
    export enum envelopeoption {
        GROUPALL = 'groupall',
        GROUPFG = 'groupfg',
        GROUPMESSAGE = 'groupmessage',
    }
    export enum outboundValidationOption {
        FILTER_ERROR = 'filterError',
        FAIL_ALL = 'failAll',
    }
}

