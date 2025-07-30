/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AS2ReceiveOptions } from './AS2ReceiveOptions';
import type { AS2SendOptions } from './AS2SendOptions';
import type { AS2SendSettings } from './AS2SendSettings';
import type { SharedCommunicationChannel } from './SharedCommunicationChannel';
export type AS2CommunicationOptions = {
    AS2DefaultPartnerSettings?: AS2SendSettings;
    AS2ReceiveOptions?: AS2ReceiveOptions;
    AS2SendOptions?: AS2SendOptions;
    AS2SendSettings?: AS2SendSettings;
    CommunicationSetting?: AS2CommunicationOptions.CommunicationSetting;
    SharedCommunicationChannel?: SharedCommunicationChannel;
};
export namespace AS2CommunicationOptions {
    export enum CommunicationSetting {
        DEFAULT = 'default',
        CUSTOM = 'custom',
        COMPONENT = 'component',
    }
}

