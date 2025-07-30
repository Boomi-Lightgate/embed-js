/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Resource = {
    /**
     * Resource object type details.
     */
    objectType?: Resource.objectType;
    /**
     * Account group resource ID.
     */
    resourceId: string;
    /**
     * Account group resource name.
     */
    resourceName: string;
};
export namespace Resource {
    /**
     * Resource object type details.
     */
    export enum objectType {
        CLOUD = 'Cloud',
        CONNECTOR = 'Connector',
        DATA_HUB_MODEL = 'Data Hub Model',
        INTEGRATION_PACK = 'Integration Pack',
        PUBLISHED_PROCESS = 'Published Process',
        ROLE = 'Role',
    }
}

