/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkId } from './BulkId';
export type EnvironmentExtensionsBulkRequest = {
    request?: Array<BulkId>;
    type?: EnvironmentExtensionsBulkRequest.type;
};
export namespace EnvironmentExtensionsBulkRequest {
    export enum type {
        GET = 'GET',
        DELETE = 'DELETE',
        UPDATE = 'UPDATE',
        CREATE = 'CREATE',
    }
}

