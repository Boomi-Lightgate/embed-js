/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TradingPartnerProcessingGroup } from './TradingPartnerProcessingGroup';
export type TradingPartnerProcessingGroupBulkResponse = {
    response?: Array<{
        Result: TradingPartnerProcessingGroup;
        index?: number;
        id?: string;
        statusCode?: number;
        errorMessage?: string;
    }>;
};

