/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type FTPGetOptions = {
    fileToMove: string;
    ftpAction?: FTPGetOptions.ftpAction;
    maxFileCount: number;
    remoteDirectory: string;
    transferType?: FTPGetOptions.transferType;
    useDefaultGetOptions?: boolean;
};
export namespace FTPGetOptions {
    export enum ftpAction {
        ACTIONGET = 'actionget',
        ACTIONGETDELETE = 'actiongetdelete',
        ACTIONGETMOVE = 'actiongetmove',
    }
    export enum transferType {
        ASCII = 'ascii',
        BINARY = 'binary',
    }
}

