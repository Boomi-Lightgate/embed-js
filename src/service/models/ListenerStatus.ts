/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ListenerStatus = {
    /**
     * The internal and unique identifier for connector type, which resembles the connector type names presented on the **Build** tab of the user interface.
     */
    connectorType?: string;
    /**
     * The Component ID for the listener process.
     */
    listenerId: string;
    /**
     * The status of the listener as `listening`, `paused`, or `errored`.
     */
    status: string;
};

