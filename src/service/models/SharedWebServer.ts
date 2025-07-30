/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SharedWebServerCloudTennantGeneral } from './SharedWebServerCloudTennantGeneral';
import type { SharedWebServerCors } from './SharedWebServerCors';
import type { SharedWebServerGeneral } from './SharedWebServerGeneral';
import type { SharedWebServerUserManagement } from './SharedWebServerUserManagement';
export type SharedWebServer = {
    atomId: string;
    cloudTennantGeneral: SharedWebServerCloudTennantGeneral;
    corsConfiguration: SharedWebServerCors;
    generalSettings: SharedWebServerGeneral;
    shouldRestartPlugin?: boolean;
    userManagement: SharedWebServerUserManagement;
};

