/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkId } from './BulkId';
export type IntegrationPackInstanceBulkRequest = {
    request?: Array<BulkId>;
    type?: IntegrationPackInstanceBulkRequest.type;
};
export namespace IntegrationPackInstanceBulkRequest {
    export enum type {
        GET = 'GET',
        DELETE = 'DELETE',
        UPDATE = 'UPDATE',
        CREATE = 'CREATE',
    }
}

