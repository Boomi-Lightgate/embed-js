/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkId } from './BulkId';
export type DeployedPackageBulkRequest = {
    request?: Array<BulkId>;
    type?: DeployedPackageBulkRequest.type;
};
export namespace DeployedPackageBulkRequest {
    export enum type {
        GET = 'GET',
        DELETE = 'DELETE',
        UPDATE = 'UPDATE',
        CREATE = 'CREATE',
    }
}

