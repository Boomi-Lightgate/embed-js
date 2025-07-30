/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkId } from './BulkId';
export type OrganizationComponentBulkRequest = {
    request?: Array<BulkId>;
    type?: OrganizationComponentBulkRequest.type;
};
export namespace OrganizationComponentBulkRequest {
    export enum type {
        GET = 'GET',
        DELETE = 'DELETE',
        UPDATE = 'UPDATE',
        CREATE = 'CREATE',
    }
}

