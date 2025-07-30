/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkId } from './BulkId';
export type SharedWebServerBulkRequest = {
    request?: Array<BulkId>;
    type?: SharedWebServerBulkRequest.type;
};
export namespace SharedWebServerBulkRequest {
    export enum type {
        GET = 'GET',
        DELETE = 'DELETE',
        UPDATE = 'UPDATE',
        CREATE = 'CREATE',
    }
}

