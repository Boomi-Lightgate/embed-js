/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OFTPConnectionSettings } from './OFTPConnectionSettings';
import type { OFTPGetOptions } from './OFTPGetOptions';
import type { OFTPListenOptions } from './OFTPListenOptions';
import type { OFTPSendOptions } from './OFTPSendOptions';
import type { SharedCommunicationChannel } from './SharedCommunicationChannel';
export type OFTPCommunicationOptions = {
    CommunicationSetting?: OFTPCommunicationOptions.CommunicationSetting;
    OFTPConnectionSettings?: OFTPConnectionSettings;
    OFTPGetOptions?: OFTPGetOptions;
    OFTPSendOptions?: OFTPSendOptions;
    OFTPServerListenOptions?: OFTPListenOptions;
    SharedCommunicationChannel?: SharedCommunicationChannel;
};
export namespace OFTPCommunicationOptions {
    export enum CommunicationSetting {
        DEFAULT = 'default',
        CUSTOM = 'custom',
        COMPONENT = 'component',
    }
}

