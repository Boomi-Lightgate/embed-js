/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AccountGroupUserRole = {
    /**
     * The ID of the account group.
     */
    accountGroupId?: string;
    /**
     * The first name of the user.
     */
    firstName?: string;
    /**
     * The object’s conceptual ID, which is synthesized from the role, user, and account group IDs.
     */
    id?: string;
    /**
     * The last name of the user.
     */
    lastName?: string;
    /**
     * If true, which is the default, users receive an email notification when adding them to the account group.
     */
    notifyUser?: boolean;
    /**
     * The ID of the role.
     */
    roleId?: string;
    /**
     * The user ID.
     */
    userId?: string;
};

