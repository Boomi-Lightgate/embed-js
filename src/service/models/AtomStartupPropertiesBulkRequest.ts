/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkId } from './BulkId';
export type AtomStartupPropertiesBulkRequest = {
    request?: Array<BulkId>;
    type?: AtomStartupPropertiesBulkRequest.type;
};
export namespace AtomStartupPropertiesBulkRequest {
    export enum type {
        GET = 'GET',
        DELETE = 'DELETE',
        UPDATE = 'UPDATE',
        CREATE = 'CREATE',
    }
}

