/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OrganizationContactInfo } from './OrganizationContactInfo';
export type OrganizationComponent = {
    OrganizationContactInfo: OrganizationContactInfo;
    /**
     * A unique ID assigned by the system to the component.
     */
    componentId?: string;
    /**
     * A user-defined name for the component.
     */
    componentName?: string;
    /**
     * Indicates if the component is deleted. A value of `true` indicates a deleted status, whereas `false` indicates an active status.
     */
    deleted?: boolean;
    /**
     * Description of the component.
     *
     * >**Note:** Although this field is in the object, operations do not support the field. For example, the system ignores the field if it is present in a QUERY, CREATE, or UPDATE request.
     */
    description?: string;
    /**
     * The ID of the folder in which the component currently resides.
     */
    folderId?: number;
    /**
     * The folder location of the component within Component Explorer.
     */
    folderName?: string;
};

