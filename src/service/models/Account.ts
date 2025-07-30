/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Licensing } from './Licensing';
import type { Molecule } from './Molecule';
export type Account = {
    /**
     * The ID of the account.
     */
    accountId?: string;
    /**
     * The creation date of the account.
     */
    dateCreated?: string;
    /**
     * The scheduled expiration date of the account.
     */
    expirationDate?: string;
    /**
     * Indicates the number of connections used and purchased in each of the connector type and production/test classifications. The classifications include standard, smallBusiness, enterprise, and tradingPartner.
     */
    licensing?: Licensing;
    molecule?: Molecule;
    /**
     * The name of the account.
     */
    name?: string;
    /**
     * Indicates the state of an account if one or more additional deployments are made after all available connection licenses have been used for any of the connector class.
     */
    overDeployed?: boolean;
    /**
     * The status of the account. The allowed values are active or deleted.
     */
    status?: Account.status;
    /**
     * Identifies whether this account has the Boomi Suggest feature enabled.
     */
    suggestionsEnabled?: boolean;
    /**
     * Identifies whether this account allows support user access.
     */
    supportAccess?: boolean;
    /**
     * The level of support for this account. The allowed values are standard *or premier.
     */
    supportLevel?: Account.supportLevel;
    widgetAccount?: boolean;
};
export namespace Account {
    /**
     * The status of the account. The allowed values are active or deleted.
     */
    export enum status {
        TRIAL = 'trial',
        ACTIVE = 'active',
        SUSPENDED = 'suspended',
        DELETED = 'deleted',
        UNLIMITED = 'unlimited',
    }
    /**
     * The level of support for this account. The allowed values are standard *or premier.
     */
    export enum supportLevel {
        STANDARD = 'standard',
        PREMIER = 'premier',
    }
}

