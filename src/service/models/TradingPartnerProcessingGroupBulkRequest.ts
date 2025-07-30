/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkId } from './BulkId';
export type TradingPartnerProcessingGroupBulkRequest = {
    request?: Array<BulkId>;
    type?: TradingPartnerProcessingGroupBulkRequest.type;
};
export namespace TradingPartnerProcessingGroupBulkRequest {
    export enum type {
        GET = 'GET',
        DELETE = 'DELETE',
        UPDATE = 'UPDATE',
        CREATE = 'CREATE',
    }
}

