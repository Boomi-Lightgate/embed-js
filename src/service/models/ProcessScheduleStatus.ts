/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ProcessScheduleStatus = {
    /**
     * A unique ID assigned by the system to the Runtime.
     */
    atomId?: string;
    /**
     * If set to true, the schedules are in effect. Setting it to falsestops the schedules.
     */
    enabled?: boolean;
    /**
     * The object’s conceptual ID, which is synthesized from the process and Runtime IDs.
     */
    id?: string;
    /**
     * A unique ID assigned by the system to the process.
     */
    processId?: string;
};

