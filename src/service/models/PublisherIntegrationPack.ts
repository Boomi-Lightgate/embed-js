/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PublisherPackagedComponents } from './PublisherPackagedComponents';
export type PublisherIntegrationPack = {
    Description: string;
    PublisherPackagedComponents?: PublisherPackagedComponents;
    /**
     * A unique ID assigned by the system to the integration pack.
     */
    id?: string;
    /**
     * The type of integration pack. Possible values:
     *
     * - SINGLE — single attachment
     * - MULTI — multiple attachment
     */
    installationType?: PublisherIntegrationPack.installationType;
    /**
     * The name of the integration pack.
     */
    name?: string;
    /**
     * Specifies the type of operation (ADD or DELETE) to perform when updating the packaged component to the integration pack. This field is mandatory for the Update operation and is not available for other operations
     */
    operationType?: PublisherIntegrationPack.operationType;
};
export namespace PublisherIntegrationPack {
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
     * Specifies the type of operation (ADD or DELETE) to perform when updating the packaged component to the integration pack. This field is mandatory for the Update operation and is not available for other operations
     */
    export enum operationType {
        ADD = 'ADD',
        DELETE = 'DELETE',
    }
}

