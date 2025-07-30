/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountCloudAttachmentQuota } from './AccountCloudAttachmentQuota';
export type AccountCloudAttachmentQuotaBulkResponse = {
    response?: Array<{
        Result: AccountCloudAttachmentQuota;
        index?: number;
        id?: string;
        statusCode?: number;
        errorMessage?: string;
    }>;
};

