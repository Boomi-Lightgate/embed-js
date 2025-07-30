/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ProcessLog = {
    /**
     * The ID of the process run.
     */
    executionId?: string;
    /**
     * The process execution log level with ALL being the default.
     *
     * If you do not specify the log level, you receive all types of logs. The log level is case sensitive; you must use all uppercase letters.
     */
    logLevel?: ProcessLog.logLevel;
};
export namespace ProcessLog {
    /**
     * The process execution log level with ALL being the default.
     *
     * If you do not specify the log level, you receive all types of logs. The log level is case sensitive; you must use all uppercase letters.
     */
    export enum logLevel {
        SEVERE = 'SEVERE',
        WARNING = 'WARNING',
        INFO = 'INFO',
        CONFIG = 'CONFIG',
        FINE = 'FINE',
        FINER = 'FINER',
        FINEST = 'FINEST',
        ALL = 'ALL',
    }
}

