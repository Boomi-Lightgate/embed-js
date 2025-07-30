/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkId } from './BulkId';
export type TradingPartnerComponentBulkRequest = {
    request?: Array<BulkId>;
    type?: TradingPartnerComponentBulkRequest.type;
};
export namespace TradingPartnerComponentBulkRequest {
    export enum type {
        GET = 'GET',
        DELETE = 'DELETE',
        UPDATE = 'UPDATE',
        CREATE = 'CREATE',
    }
}

