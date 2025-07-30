/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type DiskSendOptions = {
    createDirectory?: boolean;
    sendDirectory: string;
    useDefaultSendOptions?: boolean;
    writeOption?: DiskSendOptions.writeOption;
};
export namespace DiskSendOptions {
    export enum writeOption {
        UNIQUE = 'unique',
        OVER = 'over',
        APPEND = 'append',
        ABORT = 'abort',
    }
}

