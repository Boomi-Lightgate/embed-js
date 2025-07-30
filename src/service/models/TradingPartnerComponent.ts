/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContactInfo } from './ContactInfo';
import type { PartnerCommunication } from './PartnerCommunication';
import type { PartnerDocumentTypes } from './PartnerDocumentTypes';
import type { PartnerInfo } from './PartnerInfo';
export type TradingPartnerComponent = {
    ContactInfo: ContactInfo;
    PartnerCommunication: PartnerCommunication;
    PartnerCommunicationTypes?: Array<string>;
    PartnerDocumentTypes: PartnerDocumentTypes;
    PartnerInfo: PartnerInfo;
    classification?: TradingPartnerComponent.classification;
    componentId?: string;
    componentName?: string;
    deleted?: boolean;
    description?: string;
    folderId?: number;
    folderName?: string;
    identifier?: string;
    organizationId?: string;
    standard?: TradingPartnerComponent.standard;
};
export namespace TradingPartnerComponent {
    export enum classification {
        TRADINGPARTNER = 'tradingpartner',
        MYCOMPANY = 'mycompany',
    }
    export enum standard {
        X12 = 'x12',
        EDIFACT = 'edifact',
        HL7 = 'hl7',
        CUSTOM = 'custom',
        ROSETTANET = 'rosettanet',
        TRADACOMS = 'tradacoms',
        ODETTE = 'odette',
    }
}

