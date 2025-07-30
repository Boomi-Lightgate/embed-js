/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Schedule } from './Schedule';
export type ScheduleRetry = {
    Schedule?: Array<Schedule>;
    /**
     * (Retry schedules only) The maximum number of retries. The minimum valid value is 1; the maximum is 5.
     */
    maxRetry?: number;
};

