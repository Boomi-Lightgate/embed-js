/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type PublisherPackagedComponent = {
    /**
     * ID of the primary component in the packaged component.
     */
    componentId?: string;
    /**
     * Name of the primary component in the packaged component.
     */
    componentName?: string;
    /**
     * Component type of the primary component in the packaged component.
     */
    componentType?: string;
    /**
     * Packaged component version of the component that is currently released in this integration pack.
     */
    currentVersion?: string;
    /**
     * If true, the packaged component will be removed from the integration pack in the next release.
     */
    deleted?: boolean;
    /**
     * Latest packaged component version of the component that is available to be added to this integration pack.
     */
    latestVersion?: string;
    /**
     * Packaged component version of the component that will be included in the next release of this integration pack.
     */
    pendingVersion?: string;
};

