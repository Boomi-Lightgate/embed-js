/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Environment = {
    /**
     * \(Optional\) For accounts with Unlimited environment support, the type of environment.The choices are PROD \(Production\) and TEST. The environment classification determines the type of license used when deploying a process to the environment. The default classification is PROD.<br />You can assign the value TEST only if the requesting account has Test Connection Licensing enabled.<br />You can set the classification only when you add an environment. You cannot change the classification later.<br />Environments added prior to the January 2014 release have their classification set to PROD.
     *
     * >**Note:** The classification field is invalid for requests from accounts with Basic environment support because all environments are production environments.
     */
    classification?: Environment.classification;
    /**
     * A unique ID assigned by the system to the environment.
     */
    id?: string;
    /**
     * A user-defined name for the environment.
     */
    name?: string;
    parentAccount?: string;
    parentEnvironment?: string;
};
export namespace Environment {
    /**
     * \(Optional\) For accounts with Unlimited environment support, the type of environment.The choices are PROD \(Production\) and TEST. The environment classification determines the type of license used when deploying a process to the environment. The default classification is PROD.<br />You can assign the value TEST only if the requesting account has Test Connection Licensing enabled.<br />You can set the classification only when you add an environment. You cannot change the classification later.<br />Environments added prior to the January 2014 release have their classification set to PROD.
     *
     * >**Note:** The classification field is invalid for requests from accounts with Basic environment support because all environments are production environments.
     */
    export enum classification {
        PROD = 'PROD',
        TEST = 'TEST',
    }
}

