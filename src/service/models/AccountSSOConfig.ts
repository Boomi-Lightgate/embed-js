/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AccountSSOConfig = {
    /**
     * The account ID.
     */
    accountId?: string;
    assertionEncryption?: boolean;
    /**
     * PPT - \(Default\) Password Protected Transport, requires a username and password for authentication<br />UNSPECIFIED - Accepts any type of authentication
     */
    authnContext?: string;
    /**
     * EXACT - The resulting authentication context in the authentication statement must be the exact match to at least one of the specified authentication contexts.<br />MINUMUM - The resulting authentication context in the authentication statement must be at least as strong \(as deemed by the responder\) as one of the specified authentication contexts.
     */
    authnContextComparison?: string;
    /**
     * Metadata for the public certificate of the identity provider.
     */
    certInfo?: string;
    /**
     * Base64-encoded certificate bytes for the identity provider.
     */
    certificate?: Array<string>;
    /**
     * *true* — Enables single sign-on for the account. <br />   *false* — Disables single sign-on for the account.
     */
    enabled?: boolean;
    /**
     * *true* — The federation ID is in the NameID element of the Subject element in the SAML Response document.<br /> *false*— The federation ID is in the FEDERATION\_ID Attribute element in the SAML Response document.
     */
    fedIdFromNameId?: boolean;
    /**
     * The URL of the identity provider's single sign-on service.
     */
    idpUrl?: string;
    /**
     * *TRANSIENT* — Indicates that the content of the element is a non-constant and temporary value that should not assume any standard meaning; the identifier confirms a user is granted access without revealing the user's actual name or identity<br />*UNSPECIFIED* — Indicates that identity provider can interpret the NameID attribute; the identifier confirms a user is granted access and can reveal the user's real name or identity depending on how it is defined by identity provider.<br />**Important:** Entering any value other than TRANSIENT or UNSPECIFIED for the nameIdPolicy results in an exception.<br />As a service provider, does not interpret the NameID value; a user is identified by comparing the *NameID* value with the *Federation ID* value.
     */
    nameIdPolicy?: string;
    /**
     * After signing out of the, the URL that redirects the user.
     */
    signoutRedirectUrl?: string;
};

