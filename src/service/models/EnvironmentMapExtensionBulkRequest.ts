/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkId } from './BulkId';
export type EnvironmentMapExtensionBulkRequest = {
    request?: Array<BulkId>;
    type?: EnvironmentMapExtensionBulkRequest.type;
};
export namespace EnvironmentMapExtensionBulkRequest {
    export enum type {
        GET = 'GET',
        DELETE = 'DELETE',
        UPDATE = 'UPDATE',
        CREATE = 'CREATE',
    }
}

