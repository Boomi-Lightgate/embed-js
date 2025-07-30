/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkId } from './BulkId';
export type PackagedComponentManifestBulkRequest = {
    request?: Array<BulkId>;
    type?: PackagedComponentManifestBulkRequest.type;
};
export namespace PackagedComponentManifestBulkRequest {
    export enum type {
        GET = 'GET',
        DELETE = 'DELETE',
        UPDATE = 'UPDATE',
        CREATE = 'CREATE',
    }
}

