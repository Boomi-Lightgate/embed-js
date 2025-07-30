/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkId } from './BulkId';
export type SharedCommunicationChannelComponentBulkRequest = {
    request?: Array<BulkId>;
    type?: SharedCommunicationChannelComponentBulkRequest.type;
};
export namespace SharedCommunicationChannelComponentBulkRequest {
    export enum type {
        GET = 'GET',
        DELETE = 'DELETE',
        UPDATE = 'UPDATE',
        CREATE = 'CREATE',
    }
}

