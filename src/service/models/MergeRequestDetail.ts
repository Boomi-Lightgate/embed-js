/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type MergeRequestDetail = {
    changeType?: MergeRequestDetail.changeType;
    componentGuid?: string;
    conflict?: boolean;
    createdBy?: string;
    createdDate?: string;
    destinationRevision?: number;
    lockedOnDestinationBranch?: boolean;
    mergeRevision?: number;
    modifiedBy?: string;
    modifiedDate?: string;
    resolution?: MergeRequestDetail.resolution;
    sourceRevision?: number;
    stage?: MergeRequestDetail.stage;
};
export namespace MergeRequestDetail {
    export enum changeType {
        ADDED = 'ADDED',
        MODIFIED = 'MODIFIED',
        DELETED = 'DELETED',
    }
    export enum resolution {
        OVERRIDE = 'OVERRIDE',
        KEEP_DESTINATION = 'KEEP_DESTINATION',
    }
    export enum stage {
        DRAFTED = 'DRAFTED',
        REVIEWED = 'REVIEWED',
        CONFLICT_RESOLVED = 'CONFLICT_RESOLVED',
        MERGED = 'MERGED',
        REVERTED = 'REVERTED',
    }
}

