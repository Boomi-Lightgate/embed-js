/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkId } from './BulkId';
export type ProcessSchedulesBulkRequest = {
    request?: Array<BulkId>;
    type?: ProcessSchedulesBulkRequest.type;
};
export namespace ProcessSchedulesBulkRequest {
    export enum type {
        GET = 'GET',
        DELETE = 'DELETE',
        UPDATE = 'UPDATE',
        CREATE = 'CREATE',
    }
}

