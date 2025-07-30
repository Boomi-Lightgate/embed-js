/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkId } from './BulkId';
export type AccountCloudAttachmentQuotaBulkRequest = {
    request?: Array<BulkId>;
    type?: AccountCloudAttachmentQuotaBulkRequest.type;
};
export namespace AccountCloudAttachmentQuotaBulkRequest {
    export enum type {
        GET = 'GET',
        DELETE = 'DELETE',
        UPDATE = 'UPDATE',
        CREATE = 'CREATE',
    }
}

