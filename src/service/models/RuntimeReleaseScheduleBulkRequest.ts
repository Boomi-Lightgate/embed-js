/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkId } from './BulkId';
export type RuntimeReleaseScheduleBulkRequest = {
    request?: Array<BulkId>;
    type?: RuntimeReleaseScheduleBulkRequest.type;
};
export namespace RuntimeReleaseScheduleBulkRequest {
    export enum type {
        GET = 'GET',
        DELETE = 'DELETE',
        UPDATE = 'UPDATE',
        CREATE = 'CREATE',
    }
}

