/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkId } from './BulkId';
export type ComponentDiffRequestBulkRequest = {
    request?: Array<BulkId>;
    /**
     * Read only. The type of component. See the section Component Types later in this topic for a complete list of component type values
     */
    type?: ComponentDiffRequestBulkRequest.type;
};
export namespace ComponentDiffRequestBulkRequest {
    /**
     * Read only. The type of component. See the section Component Types later in this topic for a complete list of component type values
     */
    export enum type {
        GET = 'GET',
        DELETE = 'DELETE',
        UPDATE = 'UPDATE',
        CREATE = 'CREATE',
    }
}

