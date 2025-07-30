/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkId } from './BulkId';
export type IntegrationPackBulkRequest = {
    request?: Array<BulkId>;
    type?: IntegrationPackBulkRequest.type;
};
export namespace IntegrationPackBulkRequest {
    export enum type {
        GET = 'GET',
        DELETE = 'DELETE',
        UPDATE = 'UPDATE',
        CREATE = 'CREATE',
    }
}

