/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EdiDelimiter } from './EdiDelimiter';
import type { EdiSegmentTerminator } from './EdiSegmentTerminator';
export type HL7Options = {
    acceptackoption?: HL7Options.acceptackoption;
    appackoption?: HL7Options.appackoption;
    batchoption?: HL7Options.batchoption;
    compositeDelimiter: EdiDelimiter;
    elementDelimiter: EdiDelimiter;
    filteracknowledgements?: boolean;
    outboundInterchangeValidation?: boolean;
    outboundValidationOption?: HL7Options.outboundValidationOption;
    rejectDuplicates?: boolean;
    segmentTerminator: EdiSegmentTerminator;
    subCompositeDelimiter: EdiDelimiter;
};
export namespace HL7Options {
    export enum acceptackoption {
        AL = 'AL',
        NE = 'NE',
        ER = 'ER',
        SU = 'SU',
        NOT_DEFINED = 'NOT_DEFINED',
    }
    export enum appackoption {
        AL = 'AL',
        NE = 'NE',
        ER = 'ER',
        SU = 'SU',
        NOT_DEFINED = 'NOT_DEFINED',
    }
    export enum batchoption {
        NONE = 'none',
        BATCH = 'batch',
    }
    export enum outboundValidationOption {
        FILTER_ERROR = 'filterError',
        FAIL_ALL = 'failAll',
    }
}

