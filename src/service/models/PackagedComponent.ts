/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type PackagedComponent = {
    /**
     * The name of the branch on which you want to create a packaged component.
     */
    branchName: string;
    /**
     * The ID of the component.The **component ID** is available on the **Revision History** dialog, which you can access from the **Build** page in the user interface.
     */
    componentId: string;
    /**
     * The type of component: <br />-   certificate<br />-   customlibrary<br />-   flowservice<br />-   process<br />-   processroute<br />-   tpgroup<br />-   webservice
     */
    componentType: string;
    /**
     * When you save the component configuration change on the **Build** tab, this is the assigned Revision History number. You can find the component version in the **Revision History** dialog, which you can access from the **Build** page in the service.
     */
    componentVersion?: number;
    /**
     * The user ID of the person who created the packaged component.
     */
    createdBy: string;
    /**
     * The creation date and time of the packaged component.
     */
    createdDate: string;
    deleted?: boolean;
    fullyPubliclyConsumable?: boolean;
    /**
     * Notes that describe the packaged component.
     */
    notes: string;
    /**
     * The ID of the packaged component.
     */
    packageId: string;
    /**
     * The user-defined version of the packaged component. Generates a value automatically based on the component's revision number if you do not specify a packaged component version.
     */
    packageVersion: string;
    /**
     * \(For processes and API Service components only\) Identifies whether you can share the packaged component in the **Process Library** or as part of an integration pack.
     *
     * >**Note:** You cannot share processes that contain **Process Route** components in the **Process Library** or as part of an integration pack.
     */
    shareable?: boolean;
};

