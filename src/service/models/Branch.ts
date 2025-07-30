/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Branch = {
    /**
     * The user who created the branch.
     */
    createdBy?: string;
    /**
     * The date and time when the branch was created.
     */
    createdDate?: string;
    /**
     * Whether the branch is deleted.
     */
    deleted?: boolean;
    deploymentId?: string;
    description?: string;
    /**
     * The ID of the branch.
     */
    id?: string;
    /**
     * The user who last modified the branch.
     */
    modifiedBy?: string;
    /**
     * The date and time when the branch was updated.
     */
    modifiedDate?: string;
    /**
     * The name of the branch.
     */
    name?: string;
    /**
     * The ID of the packaged component from which the branch is created.
     */
    packageId?: string;
    /**
     * The ID of the parent branch.
     */
    parentId?: string;
    /**
     * Whether the branch is ready to use.
     */
    ready?: boolean;
    /**
     * The branch status: CREATING, NORMAL (ready for use), or DELETING.
     */
    stage?: string;
};

