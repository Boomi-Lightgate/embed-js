/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type FTPSendOptions = {
    ftpAction?: FTPSendOptions.ftpAction;
    moveToDirectory: string;
    remoteDirectory: string;
    transferType?: FTPSendOptions.transferType;
    useDefaultSendOptions?: boolean;
};
export namespace FTPSendOptions {
    export enum ftpAction {
        ACTIONPUTRENAME = 'actionputrename',
        ACTIONPUTAPPEND = 'actionputappend',
        ACTIONPUTERROR = 'actionputerror',
        ACTIONPUTOVERWRITE = 'actionputoverwrite',
    }
    export enum transferType {
        ASCII = 'ascii',
        BINARY = 'binary',
    }
}

