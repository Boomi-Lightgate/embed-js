/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SFTPSendOptions = {
    ftpAction?: SFTPSendOptions.ftpAction;
    moveToDirectory: string;
    moveToForceOverride?: boolean;
    remoteDirectory: string;
    useDefaultSendOptions?: boolean;
};
export namespace SFTPSendOptions {
    export enum ftpAction {
        ACTIONPUTRENAME = 'actionputrename',
        ACTIONPUTAPPEND = 'actionputappend',
        ACTIONPUTERROR = 'actionputerror',
        ACTIONPUTOVERWRITE = 'actionputoverwrite',
    }
}

