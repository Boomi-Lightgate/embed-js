/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ExecutionCountAccount = {
    /**
     * The ID of the account under which the runs occurred.
     */
    accountId?: string;
    /**
     * The ID of the Runtime on which the runs occurred.
     */
    atomId?: string;
    /**
     * The date on which the runs occurred. The time zone is UTC±00:00.
     */
    date?: string;
    /**
     * The count of failed runs.
     */
    failures?: number;
    /**
     * The count of successful runs.
     */
    successes?: number;
};

