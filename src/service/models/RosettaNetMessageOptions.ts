/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type RosettaNetMessageOptions = {
    attachmentCache?: string;
    compressed?: boolean;
    contentTransferEncoding?: RosettaNetMessageOptions.contentTransferEncoding;
    encryptServiceHeader?: boolean;
    encrypted?: boolean;
    encryptionAlgorithm?: RosettaNetMessageOptions.encryptionAlgorithm;
    signatureDigestAlgorithm?: RosettaNetMessageOptions.signatureDigestAlgorithm;
    signed?: boolean;
};
export namespace RosettaNetMessageOptions {
    export enum contentTransferEncoding {
        BINARY = 'binary',
        BASE64 = 'base64',
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
    export enum signatureDigestAlgorithm {
        SHA1 = 'SHA1',
        SHA224 = 'SHA224',
        SHA256 = 'SHA256',
        SHA384 = 'SHA384',
        SHA512 = 'SHA512',
    }
}

