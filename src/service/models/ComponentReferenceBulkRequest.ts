/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkId } from './BulkId';
export type ComponentReferenceBulkRequest = {
    request?: Array<BulkId>;
    type?: ComponentReferenceBulkRequest.type;
};
export namespace ComponentReferenceBulkRequest {
    export enum type {
        GET = 'GET',
        DELETE = 'DELETE',
        UPDATE = 'UPDATE',
        CREATE = 'CREATE',
    }
}

