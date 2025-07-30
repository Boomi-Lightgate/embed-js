/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AtomDiskSpaceDirectory } from './AtomDiskSpaceDirectory';
export type AtomDiskSpace = {
    DiskSpaceDirectory?: Array<AtomDiskSpaceDirectory>;
    /**
     * The total amount of disk space available for consumption by this attachment.
     */
    quotaLimit?: string;
    /**
     * The total number of bytes available for consumption by this attachment.
     */
    rawQuotaLimit?: number;
    /**
     * The disk space in bytes that is already consumed by the given attachment.
     */
    rawTotalSize?: number;
    /**
     * The size of disk space already consumed by the given attachment.
     */
    totalSize?: string;
};

