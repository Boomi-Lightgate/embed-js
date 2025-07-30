/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Schedule } from './Schedule';
import type { ScheduleRetry } from './ScheduleRetry';
export type ProcessSchedules = {
    Retry?: ScheduleRetry;
    Schedule?: Array<Schedule>;
    /**
     * A unique ID assigned by the system to the Runtime.
     */
    atomId?: string;
    /**
     * The object’s conceptual ID, which is synthesized from the process and Runtime IDs.
     */
    id?: string;
    /**
     * A unique ID assigned by the system to the process. Must not be a listener process.
     */
    processId?: string;
};

