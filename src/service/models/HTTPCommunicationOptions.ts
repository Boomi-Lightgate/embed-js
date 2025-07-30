/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HTTPGetOptions } from './HTTPGetOptions';
import type { HTTPListenOptions } from './HTTPListenOptions';
import type { HTTPSendOptions } from './HTTPSendOptions';
import type { HTTPSettings } from './HTTPSettings';
import type { SharedCommunicationChannel } from './SharedCommunicationChannel';
export type HTTPCommunicationOptions = {
    CommunicationSetting?: HTTPCommunicationOptions.CommunicationSetting;
    HTTPGetOptions?: HTTPGetOptions;
    HTTPListenOptions?: HTTPListenOptions;
    HTTPSendOptions?: HTTPSendOptions;
    HTTPSettings?: HTTPSettings;
    SharedCommunicationChannel?: SharedCommunicationChannel;
};
export namespace HTTPCommunicationOptions {
    export enum CommunicationSetting {
        DEFAULT = 'default',
        CUSTOM = 'custom',
        COMPONENT = 'component',
    }
}

