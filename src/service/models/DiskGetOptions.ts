/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type DiskGetOptions = {
    deleteAfterRead?: boolean;
    fileFilter: string;
    filterMatchType?: DiskGetOptions.filterMatchType;
    getDirectory: string;
    maxFileCount?: number;
    useDefaultGetOptions?: boolean;
};
export namespace DiskGetOptions {
    export enum filterMatchType {
        WILDCARD = 'wildcard',
        REGEX = 'regex',
    }
}

