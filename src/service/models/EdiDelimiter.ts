/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type EdiDelimiter = {
    delimiterSpecial?: string;
    delimiterValue?: EdiDelimiter.delimiterValue;
};
export namespace EdiDelimiter {
    export enum delimiterValue {
        STARDELIMITED = 'stardelimited',
        COMMADELIMITED = 'commadelimited',
        TABDELIMITED = 'tabdelimited',
        TICKDELIMITED = 'tickdelimited',
        BARDELIMITED = 'bardelimited',
        PLUSDELIMITED = 'plusdelimited',
        COLONDELIMITED = 'colondelimited',
        CARATDELIMITED = 'caratdelimited',
        AMPERSANDDELIMITED = 'ampersanddelimited',
        BYTECHARACTER = 'bytecharacter',
        OTHERCHARACTER = 'othercharacter',
    }
}

