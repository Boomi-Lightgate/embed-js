/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReleasePackagedComponents } from './ReleasePackagedComponents';
export type ReleaseIntegrationPackStatus = {
    ReleasePackagedComponents?: ReleasePackagedComponents;
    /**
     * The type of integration pack. Possible values:
     *
     * - SINGLE — single attachment
     * - MULTI — multiple attachment
     */
    installationType?: ReleaseIntegrationPackStatus.installationType;
    /**
     * A unique ID assigned by the system to the integration pack.
     */
    integrationPackId?: string;
    /**
     * The name of the integration pack.
     */
    name?: string;
    /**
     * Date for future release of integration pack.
     * Date Format: yyyy-MM-dd
     */
    releaseOnDate?: string;
    /**
     * Specify the type of release schedule for the integration pack. Possible values:
     * - IMMEDIATELY — for immediate release
     * - RELEASE_ON_SPECIFIED_DATE — for future release
     */
    releaseSchedule?: ReleaseIntegrationPackStatus.releaseSchedule;
    /**
     * The type of release Status. Possible values:
     *
     * - INPROGRESS — for currently releasing integration pack
     * - SUCCESS — for successfully released integration pack
     * - SCHEDULED — for future release integration pack
     * - ERROR — for any error resulting in the release
     */
    releaseStatus?: ReleaseIntegrationPackStatus.releaseStatus;
    /**
     * A unique ID assigned by the system to the integration pack release request.
     */
    requestId?: string;
    responseStatusCode: number;
};
export namespace ReleaseIntegrationPackStatus {
    /**
     * The type of integration pack. Possible values:
     *
     * - SINGLE — single attachment
     * - MULTI — multiple attachment
     */
    export enum installationType {
        SINGLE = 'SINGLE',
        MULTI = 'MULTI',
    }
    /**
     * Specify the type of release schedule for the integration pack. Possible values:
     * - IMMEDIATELY — for immediate release
     * - RELEASE_ON_SPECIFIED_DATE — for future release
     */
    export enum releaseSchedule {
        IMMEDIATELY = 'IMMEDIATELY',
        RELEASE_ON_SPECIFIED_DATE = 'RELEASE_ON_SPECIFIED_DATE',
    }
    /**
     * The type of release Status. Possible values:
     *
     * - INPROGRESS — for currently releasing integration pack
     * - SUCCESS — for successfully released integration pack
     * - SCHEDULED — for future release integration pack
     * - ERROR — for any error resulting in the release
     */
    export enum releaseStatus {
        IN_PROGRESS = 'IN_PROGRESS',
        SUCCESS = 'SUCCESS',
        SCHEDULED = 'SCHEDULED',
        ERROR = 'ERROR',
    }
}

