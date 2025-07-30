/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkId } from './BulkId';
export type AtomConnectorVersionsBulkRequest = {
    request?: Array<BulkId>;
    type?: AtomConnectorVersionsBulkRequest.type;
};
export namespace AtomConnectorVersionsBulkRequest {
    export enum type {
        GET = 'GET',
        DELETE = 'DELETE',
        UPDATE = 'UPDATE',
        CREATE = 'CREATE',
    }
}

