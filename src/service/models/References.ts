/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type References = {
    /**
     * The ID of the secondary component. The component ID is available in the Revision History dialog, which you can access from the Build page in the service.
     */
    componentId?: string;
    /**
     * The ID of the primary component that the secondary components reference. You can use this attribute specifically in the QUERY operation. The component ID is available in the Revision History dialog, which you can access from the Build page in the service.
     */
    parentComponentId?: string;
    /**
     * The revision number of the primary component. This attribute is used specifically in the QUERY operation. A component's version number is available in the Revision History dialog, which you can access from the Build page in the service.
     */
    parentVersion?: number;
    /**
     * The type of reference component.
     * - A value of DEPENDENT indicates that the component is included automatically in a process at packaging and deployment time.
     * - A value of INDEPENDENT indicates the component is standalone, and you must package and deploy it individually and manually, though you might use it in a process configuration.
     *
     * For more information on component reference types, see the topic [Component References](https://help.boomi.com/docs/Atomsphere/Integration/Process%20building/int-Component_references_8d7cf9db-2716-4301-b8d8-46eb9f055999).
     */
    type?: References.type;
    /**
     * If specified, the ID of the branch on which you want to query.
     */
    branchId?: string;
};
export namespace References {
    /**
     * The type of reference component.
     * - A value of DEPENDENT indicates that the component is included automatically in a process at packaging and deployment time.
     * - A value of INDEPENDENT indicates the component is standalone, and you must package and deploy it individually and manually, though you might use it in a process configuration.
     *
     * For more information on component reference types, see the topic [Component References](https://help.boomi.com/docs/Atomsphere/Integration/Process%20building/int-Component_references_8d7cf9db-2716-4301-b8d8-46eb9f055999).
     */
    export enum type {
        DEPENDENT = 'DEPENDENT',
        INDEPENDENT = 'INDEPENDENT',
    }
}

