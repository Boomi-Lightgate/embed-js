/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkId } from './BulkId';
export type SharedServerInformationBulkRequest = {
    request?: Array<BulkId>;
    type?: SharedServerInformationBulkRequest.type;
};
export namespace SharedServerInformationBulkRequest {
    export enum type {
        GET = 'GET',
        DELETE = 'DELETE',
        UPDATE = 'UPDATE',
        CREATE = 'CREATE',
    }
}

