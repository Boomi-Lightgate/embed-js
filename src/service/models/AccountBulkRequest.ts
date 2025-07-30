/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkId } from './BulkId';
export type AccountBulkRequest = {
    request?: Array<BulkId>;
    type?: AccountBulkRequest.type;
};
export namespace AccountBulkRequest {
    export enum type {
        GET = 'GET',
        DELETE = 'DELETE',
        UPDATE = 'UPDATE',
        CREATE = 'CREATE',
    }
}

