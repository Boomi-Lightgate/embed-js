/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type EdiSegmentTerminator = {
    segmentTerminatorSpecial?: string;
    segmentTerminatorValue?: EdiSegmentTerminator.segmentTerminatorValue;
};
export namespace EdiSegmentTerminator {
    export enum segmentTerminatorValue {
        NEWLINE = 'newline',
        SINGLEQUOTE = 'singlequote',
        TILDE = 'tilde',
        CARRIAGERETURN = 'carriagereturn',
        BYTECHARACTER = 'bytecharacter',
        OTHERCHARACTER = 'othercharacter',
    }
}

