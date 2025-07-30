/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Schedule = {
    /**
     * 1 is the first day of the month and 31 is the last day of the month.
     */
    daysOfMonth?: string;
    /**
     * 1 is Sunday and 7 is Saturday.
     */
    daysOfWeek?: string;
    /**
     * Uses a 24-hour clock. 0 is midnight and 12 is noon.
     */
    hours?: string;
    /**
     * 0 is the first minute of the hour — for example, 1:00 A.M.59 is the last minute of the hour — for example, 1:59 A.M.
     */
    minutes?: string;
    /**
     * 1 is January and 12 is December. In most cases this is set to an asterisk [*].
     */
    months?: string;
    /**
     * The standard year format. In most cases this is set to an asterisk [*].
     */
    years?: string;
};

