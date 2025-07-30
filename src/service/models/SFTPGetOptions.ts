/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SFTPGetOptions = {
    fileToMove: string;
    ftpAction?: SFTPGetOptions.ftpAction;
    maxFileCount: number;
    moveToDirectory: string;
    moveToForceOverride?: boolean;
    remoteDirectory: string;
    useDefaultGetOptions?: boolean;
};
export namespace SFTPGetOptions {
    export enum ftpAction {
        ACTIONGET = 'actionget',
        ACTIONGETDELETE = 'actiongetdelete',
        ACTIONGETMOVE = 'actiongetmove',
    }
}

