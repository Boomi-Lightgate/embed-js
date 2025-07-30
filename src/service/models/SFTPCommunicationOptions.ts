/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SFTPGetOptions } from './SFTPGetOptions';
import type { SFTPSendOptions } from './SFTPSendOptions';
import type { SFTPSettings } from './SFTPSettings';
import type { SharedCommunicationChannel } from './SharedCommunicationChannel';
export type SFTPCommunicationOptions = {
    CommunicationSetting?: SFTPCommunicationOptions.CommunicationSetting;
    SFTPGetOptions?: SFTPGetOptions;
    SFTPSendOptions?: SFTPSendOptions;
    SFTPSettings?: SFTPSettings;
    SharedCommunicationChannel?: SharedCommunicationChannel;
};
export namespace SFTPCommunicationOptions {
    export enum CommunicationSetting {
        DEFAULT = 'default',
        CUSTOM = 'custom',
        COMPONENT = 'component',
    }
}

