/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkId } from './BulkId';
export type PublisherIntegrationPackBulkRequest = {
    request?: Array<BulkId>;
    type?: PublisherIntegrationPackBulkRequest.type;
};
export namespace PublisherIntegrationPackBulkRequest {
    export enum type {
        GET = 'GET',
        DELETE = 'DELETE',
        UPDATE = 'UPDATE',
        CREATE = 'CREATE',
    }
}

