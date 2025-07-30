/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProcessingGroupDefaultRouting } from './ProcessingGroupDefaultRouting';
import type { ProcessingGroupDocumentBasedRouting } from './ProcessingGroupDocumentBasedRouting';
import type { ProcessingGroupPartnerBasedRouting } from './ProcessingGroupPartnerBasedRouting';
import type { ProcessingGroupTradingPartners } from './ProcessingGroupTradingPartners';
export type TradingPartnerProcessingGroup = {
    DefaultRouting?: ProcessingGroupDefaultRouting;
    DocumentRouting?: ProcessingGroupDocumentBasedRouting;
    PartnerRouting?: ProcessingGroupPartnerBasedRouting;
    TradingPartners?: ProcessingGroupTradingPartners;
    componentId?: string;
    componentName?: string;
    deleted?: boolean;
    description?: string;
    folderId?: number;
    folderName?: string;
};

