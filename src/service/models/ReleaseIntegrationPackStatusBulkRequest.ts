/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkId } from './BulkId';
export type ReleaseIntegrationPackStatusBulkRequest = {
    request?: Array<BulkId>;
    type?: ReleaseIntegrationPackStatusBulkRequest.type;
};
export namespace ReleaseIntegrationPackStatusBulkRequest {
    export enum type {
        GET = 'GET',
        DELETE = 'DELETE',
        UPDATE = 'UPDATE',
        CREATE = 'CREATE',
    }
}

