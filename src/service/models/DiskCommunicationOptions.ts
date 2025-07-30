/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DiskGetOptions } from './DiskGetOptions';
import type { DiskSendOptions } from './DiskSendOptions';
import type { SharedCommunicationChannel } from './SharedCommunicationChannel';
export type DiskCommunicationOptions = {
    CommunicationSetting?: DiskCommunicationOptions.CommunicationSetting;
    DiskGetOptions?: DiskGetOptions;
    DiskSendOptions?: DiskSendOptions;
    SharedCommunicationChannel?: SharedCommunicationChannel;
};
export namespace DiskCommunicationOptions {
    export enum CommunicationSetting {
        DEFAULT = 'default',
        CUSTOM = 'custom',
        COMPONENT = 'component',
    }
}

