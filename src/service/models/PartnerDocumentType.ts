/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type PartnerDocumentType = {
    expectAckForOutbound?: boolean;
    invalidDocumentRouting?: PartnerDocumentType.invalidDocumentRouting;
    name?: string;
    profileId?: string;
    qualifierValidation?: boolean;
    typeId?: string;
    use999Ack?: boolean;
    useTA1Ack?: boolean;
    validateOutboundTransactionSets?: boolean;
};
export namespace PartnerDocumentType {
    export enum invalidDocumentRouting {
        DOCUMENTS_PATH = 'documentsPath',
        ERRORS_PATH = 'errorsPath',
    }
}

