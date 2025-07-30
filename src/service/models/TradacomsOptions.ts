/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EdiDelimiter } from './EdiDelimiter';
import type { EdiSegmentTerminator } from './EdiSegmentTerminator';
export type TradacomsOptions = {
    compositeDelimiter?: EdiDelimiter;
    elementDelimiter?: EdiDelimiter;
    filterAcknowledgements?: boolean;
    segmentTerminator?: EdiSegmentTerminator;
    useReconciliationMessage?: boolean;
};

