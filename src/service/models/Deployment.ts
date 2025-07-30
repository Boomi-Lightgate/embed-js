/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Deployment = {
    componentId: string;
    componentType: string;
    current?: boolean;
    deployedBy: string;
    deployedOn: string;
    digest: string;
    environmentId: string;
    id: string;
    listenerStatus?: Deployment.listenerStatus;
    message?: string;
    notes: string;
    processId: string;
    version?: number;
};
export namespace Deployment {
    export enum listenerStatus {
        RUNNING = 'RUNNING',
        PAUSED = 'PAUSED',
    }
}

