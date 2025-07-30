/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Connections } from './Connections';
import type { CrossReferences } from './CrossReferences';
import type { Operations } from './Operations';
import type { OverrideProcessProperties } from './OverrideProcessProperties';
import type { PGPCertificates } from './PGPCertificates';
import type { Properties } from './Properties';
import type { SharedCommunications } from './SharedCommunications';
import type { TradingPartners } from './TradingPartners';
export type EnvironmentExtensions = {
    PGPCertificates: PGPCertificates;
    connections: Connections;
    crossReferences: CrossReferences;
    /**
     * The ID of the environment.
     */
    environmentId?: string;
    /**
     * The synthesized ID of the process belonging to a multi-install integration pack to which the extension values apply, if applicable. For more information, see the section in the Working with Environment Extensions subtopic about multi-install integration packs.
     */
    extensionGroupId?: string;
    /**
     * The ID of the object. This can be either of the following:<br /> 1. The value of environmentId.<br /> 2. A conceptual ID synthesized from the environment ID \(environmentId\) and the ID of the multi-install integration pack to which the extension values apply \(extensionGroupId\).
     */
    id?: string;
    operations: Operations;
    /**
     * Supplied only in an UPDATE operation. <br />-   If set to true, indicates that the request includes only a subset of environment extension values to update. <br /> -   If set to false, indicates that the request includes the full set of environment extension values to update. Values not included in the request are reset to use their default values.
     */
    partial?: boolean;
    processProperties: OverrideProcessProperties;
    properties: Properties;
    sharedCommunications: SharedCommunications;
    tradingPartners: TradingPartners;
};

