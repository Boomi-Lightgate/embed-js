/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkId } from './BulkId';
export type AccountGroupIntegrationPackBulkRequest = {
    request?: Array<BulkId>;
    type?: AccountGroupIntegrationPackBulkRequest.type;
};
export namespace AccountGroupIntegrationPackBulkRequest {
    export enum type {
        GET = 'GET',
        DELETE = 'DELETE',
        UPDATE = 'UPDATE',
        CREATE = 'CREATE',
    }
}

