/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkId } from './BulkId';
export type ProcessScheduleStatusBulkRequest = {
    request?: Array<BulkId>;
    type?: ProcessScheduleStatusBulkRequest.type;
};
export namespace ProcessScheduleStatusBulkRequest {
    export enum type {
        GET = 'GET',
        DELETE = 'DELETE',
        UPDATE = 'UPDATE',
        CREATE = 'CREATE',
    }
}

