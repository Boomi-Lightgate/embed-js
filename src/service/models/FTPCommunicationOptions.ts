/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FTPGetOptions } from './FTPGetOptions';
import type { FTPSendOptions } from './FTPSendOptions';
import type { FTPSettings } from './FTPSettings';
import type { SharedCommunicationChannel } from './SharedCommunicationChannel';
export type FTPCommunicationOptions = {
    CommunicationSetting?: FTPCommunicationOptions.CommunicationSetting;
    FTPGetOptions?: FTPGetOptions;
    FTPSendOptions?: FTPSendOptions;
    FTPSettings?: FTPSettings;
    SharedCommunicationChannel?: SharedCommunicationChannel;
};
export namespace FTPCommunicationOptions {
    export enum CommunicationSetting {
        DEFAULT = 'default',
        CUSTOM = 'custom',
        COMPONENT = 'component',
    }
}

