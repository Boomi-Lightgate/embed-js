/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkId } from './BulkId';
export type GenericConnectorRecordBulkRequest = {
    request?: Array<BulkId>;
    type?: GenericConnectorRecordBulkRequest.type;
};
export namespace GenericConnectorRecordBulkRequest {
    export enum type {
        GET = 'GET',
        DELETE = 'DELETE',
        UPDATE = 'UPDATE',
        CREATE = 'CREATE',
    }
}

