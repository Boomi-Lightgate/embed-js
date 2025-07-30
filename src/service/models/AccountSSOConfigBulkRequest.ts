/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkId } from './BulkId';
export type AccountSSOConfigBulkRequest = {
    request?: Array<BulkId>;
    type?: AccountSSOConfigBulkRequest.type;
};
export namespace AccountSSOConfigBulkRequest {
    export enum type {
        GET = 'GET',
        DELETE = 'DELETE',
        UPDATE = 'UPDATE',
        CREATE = 'CREATE',
    }
}

