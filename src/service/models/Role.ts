/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Privileges } from './Privileges';
export type Role = {
    /**
     * Description of the role
     */
    Description?: string;
    /**
     * One or more privileges assigned to the role.
     */
    Privileges?: Privileges;
    /**
     * The account ID under which the role exists.
     */
    accountId?: string;
    /**
     * The ID of the role.
     */
    id?: string;
    /**
     * The name of the role.
     */
    name?: string;
    /**
     * The ID of the role from which this role inherits privileges.
     */
    parentId?: string;
};

