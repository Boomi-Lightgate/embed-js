/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FieldSummary } from './FieldSummary';
export type AtomConnectionFieldExtensionSummary = {
    /**
     * The ID of the Runtime.
     */
    atomId?: string;
    /**
     * The ID of the connection.
     */
    connectionId?: string;
    /**
     * If the process is in a multi-install integration pack, this is the ID of the multi-install integration pack, which is the same as the ID of the process.
     */
    extensionGroupId?: string;
    /**
     * The extensions template for the OAuth 2.0 accessToken field is a superset of the standard connection field template. There is one additional field: oauth2AuthorizationUrl. The oauth2AuthorizationUrl value is the URL for manually generating the access token.
     */
    field: FieldSummary;
    /**
     * The ID of the object. This is a conceptual ID synthesized from the IDs of the<br /> -   process<br />-   connection<br /> -   multi-install integration pack \(extensionGroupId\), if applicable<br />-   Atom
     */
    id?: string;
    /**
     * The ID of the process.
     */
    processId?: string;
};

