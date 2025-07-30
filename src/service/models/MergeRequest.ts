/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MergeRequestDetails } from './MergeRequestDetails';
export type MergeRequest = {
    MergeRequestDetails: MergeRequestDetails;
    /**
     * The user who created the merge request.
     */
    createdBy?: string;
    /**
     * The date and time the merge request was created.
     */
    createdDate?: string;
    /**
     * The ID of the destination branch.
     */
    destinationBranchId?: string;
    destinationBranchName?: string;
    id?: string;
    inactiveDate?: string;
    lockNonce?: number;
    lockedBy?: string;
    lockedDate?: string;
    mergeRequestAction?: MergeRequest.mergeRequestAction;
    /**
     * The user who last modified the merge request.
     */
    modifiedBy?: string;
    /**
     * The date and time the merge request was last modified.
     */
    modifiedDate?: string;
    note?: string;
    /**
     * The previous stage of the merge.
     */
    previousStage?: MergeRequest.previousStage;
    /**
     * The branch which should take priority in an override merge.
     */
    priorityBranch?: MergeRequest.priorityBranch;
    /**
     * The ID of the source branch.
     */
    sourceBranchId?: string;
    sourceBranchName?: string;
    /**
     * The current stage of the merge.
     */
    stage?: MergeRequest.stage;
    /**
     * The merge strategy.
     */
    strategy?: MergeRequest.strategy;
};
export namespace MergeRequest {
    export enum mergeRequestAction {
        UPDATE = 'UPDATE',
        MERGE = 'MERGE',
        RETRY_DRAFTING = 'RETRY_DRAFTING',
        REVERT = 'REVERT',
    }
    /**
     * The previous stage of the merge.
     */
    export enum previousStage {
        NOT_EXIST = 'NOT_EXIST',
        DRAFTING = 'DRAFTING',
        FAILED_TO_DRAFT = 'FAILED_TO_DRAFT',
        FAILED_TO_REDRAFT = 'FAILED_TO_REDRAFT',
        DRAFTED = 'DRAFTED',
        REVIEWING = 'REVIEWING',
        MERGING = 'MERGING',
        MERGED = 'MERGED',
        FAILED_TO_MERGE = 'FAILED_TO_MERGE',
        DELETED = 'DELETED',
        REDRAFTING = 'REDRAFTING',
        REVERTED = 'REVERTED',
    }
    /**
     * The branch which should take priority in an override merge.
     */
    export enum priorityBranch {
        SOURCE = 'SOURCE',
        DESTINATION = 'DESTINATION',
    }
    /**
     * The current stage of the merge.
     */
    export enum stage {
        NOT_EXIST = 'NOT_EXIST',
        DRAFTING = 'DRAFTING',
        FAILED_TO_DRAFT = 'FAILED_TO_DRAFT',
        FAILED_TO_REDRAFT = 'FAILED_TO_REDRAFT',
        DRAFTED = 'DRAFTED',
        REVIEWING = 'REVIEWING',
        MERGING = 'MERGING',
        MERGED = 'MERGED',
        FAILED_TO_MERGE = 'FAILED_TO_MERGE',
        DELETED = 'DELETED',
        REDRAFTING = 'REDRAFTING',
        REVERTED = 'REVERTED',
    }
    /**
     * The merge strategy.
     */
    export enum strategy {
        OVERRIDE = 'OVERRIDE',
        CONFLICT_RESOLVE = 'CONFLICT_RESOLVE',
        SUBSET = 'SUBSET',
    }
}

