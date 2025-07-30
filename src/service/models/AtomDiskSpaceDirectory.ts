/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AtomDiskSpaceDirectory = {
    /**
     * A specific directory within the attachment’s directory for which this size pertains.
     */
    file?: string;
    /**
     * The disk space in bytes that is already consumed within the directory.
     */
    rawSize?: number;
    /**
     * The size of disk space consumed within this directory.
     */
    size?: string;
};

