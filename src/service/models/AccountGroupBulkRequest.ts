/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkId } from './BulkId';
export type AccountGroupBulkRequest = {
    request?: Array<BulkId>;
    type?: AccountGroupBulkRequest.type;
};
export namespace AccountGroupBulkRequest {
    export enum type {
        GET = 'GET',
        DELETE = 'DELETE',
        UPDATE = 'UPDATE',
        CREATE = 'CREATE',
    }
}

