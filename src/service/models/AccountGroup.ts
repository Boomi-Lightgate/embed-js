/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Resources } from './Resources';
export type AccountGroup = {
    Resources?: Resources;
    /**
     * The ID of the primary account under which the account group exists.
     */
    accountId?: string;
    /**
     * The severity level of email alerts sent to member users in the account group.
     */
    autoSubscribeAlertLevel?: AccountGroup.autoSubscribeAlertLevel;
    /**
     * true — The account group is All Accounts, which the system creates automatically.<br /> false — The account group is not All Accounts.
     */
    defaultGroup?: boolean;
    /**
     * The ID of the account group.
     */
    id?: string;
    /**
     * The name of the account group as displayed on the **Account Information** tab of the **Setup** page.
     */
    name?: string;
};
export namespace AccountGroup {
    /**
     * The severity level of email alerts sent to member users in the account group.
     */
    export enum autoSubscribeAlertLevel {
        NONE = 'none',
        INFO = 'info',
        WARNING = 'warning',
        ERROR = 'error',
    }
}

