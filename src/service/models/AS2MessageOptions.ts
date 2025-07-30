/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AS2MessageOptions = {
    attachmentCache?: string;
    attachmentOption?: AS2MessageOptions.attachmentOption;
    compressed?: boolean;
    dataContentType?: AS2MessageOptions.dataContentType;
    encrypted?: boolean;
    encryptionAlgorithm?: AS2MessageOptions.encryptionAlgorithm;
    maxDocumentCount?: number;
    multipleAttachments?: boolean;
    signed?: boolean;
    signingDigestAlg?: AS2MessageOptions.signingDigestAlg;
    subject: string;
};
export namespace AS2MessageOptions {
    export enum attachmentOption {
        BATCH = 'BATCH',
        DOCUMENT_CACHE = 'DOCUMENT_CACHE',
    }
    export enum dataContentType {
        TEXTPLAIN = 'textplain',
        BINARY = 'binary',
        EDIFACT = 'edifact',
        EDIX12 = 'edix12',
        APPLICATIONXML = 'applicationxml',
        TEXTXML = 'textxml',
    }
    export enum encryptionAlgorithm {
        NA = 'na',
        TRIPLEDES = 'tripledes',
        DES = 'des',
        RC2_128 = 'rc2-128',
        RC2_64 = 'rc2-64',
        RC2_40 = 'rc2-40',
        AES_128 = 'aes-128',
        AES_192 = 'aes-192',
        AES_256 = 'aes-256',
    }
    export enum signingDigestAlg {
        SHA1 = 'SHA1',
        SHA224 = 'SHA224',
        SHA256 = 'SHA256',
        SHA384 = 'SHA384',
        SHA512 = 'SHA512',
    }
}

