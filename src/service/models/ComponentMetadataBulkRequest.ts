/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkId } from './BulkId';
export type ComponentMetadataBulkRequest = {
    request?: Array<BulkId>;
    type?: ComponentMetadataBulkRequest.type;
};
export namespace ComponentMetadataBulkRequest {
    export enum type {
        GET = 'GET',
        DELETE = 'DELETE',
        UPDATE = 'UPDATE',
        CREATE = 'CREATE',
    }
}

