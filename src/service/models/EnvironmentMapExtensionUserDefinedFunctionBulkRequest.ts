/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkId } from './BulkId';
export type EnvironmentMapExtensionUserDefinedFunctionBulkRequest = {
    request?: Array<BulkId>;
    type?: EnvironmentMapExtensionUserDefinedFunctionBulkRequest.type;
};
export namespace EnvironmentMapExtensionUserDefinedFunctionBulkRequest {
    export enum type {
        GET = 'GET',
        DELETE = 'DELETE',
        UPDATE = 'UPDATE',
        CREATE = 'CREATE',
    }
}

