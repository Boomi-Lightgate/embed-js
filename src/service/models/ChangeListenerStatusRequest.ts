/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ChangeListenerStatusRequest = {
    /**
     * The action to be performed.
     */
    action?: ChangeListenerStatusRequest.action;
    /**
     * The ID of the Runtime, Runtime cluster, or Runtime cloud to which you deploy the listener or listeners.
     */
    containerId?: string;
    /**
     * The ID of a single listener process whose status you want to change. To change the status of all listeners, omit this parameter.
     *
     * >**Note:** You can obtain the ID for a listener process by using a QUERY operation on the Process object.
     */
    listenerId?: string;
};
export namespace ChangeListenerStatusRequest {
    /**
     * The action to be performed.
     */
    export enum action {
        RESTART = 'restart',
        RESTART_ALL = 'restart_all',
        PAUSE = 'pause',
        PAUSE_ALL = 'pause_all',
        RESUME = 'resume',
        RESUME_ALL = 'resume_all',
    }
}

