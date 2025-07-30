/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type RosettaNetOptions = {
    filterSignals?: boolean;
    outboundDocumentValidation?: boolean;
    rejectDuplicateTransactions?: boolean;
    version?: RosettaNetOptions.version;
};
export namespace RosettaNetOptions {
    export enum version {
        V11 = 'v11',
        V20 = 'v20',
    }
}

