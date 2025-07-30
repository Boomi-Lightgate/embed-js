/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReleasePackagedComponents } from './ReleasePackagedComponents';
export type ReleaseIntegrationPack = {
    ReleasePackagedComponents?: ReleasePackagedComponents;
    /**
     * The ID of the integration pack.
     */
    id?: string;
    /**
     * The type of integration pack. Possible values:
     *
     * - SINGLE — single attachment
     * - MULTI — multiple attachment
     */
    installationType?: ReleaseIntegrationPack.installationType;
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
    releaseSchedule?: ReleaseIntegrationPack.releaseSchedule;
    /**
     * The complete endpoint URL used to make a second call to the ReleaseIntegrationPackStatus object.
     * It is provided for your convenience in the `releaseStatusUrl` field of the initial POST response.
     */
    releaseStatusUrl?: string;
    /**
     * A unique ID assigned by the system to the integration pack release request.
     */
    requestId?: string;
};
export namespace ReleaseIntegrationPack {
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
}

