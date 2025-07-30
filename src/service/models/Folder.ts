/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PermittedRoles } from './PermittedRoles';
export type Folder = {
    PermittedRoles?: PermittedRoles;
    /**
     * Read only. Indicates if the component is deleted. A true value indicates a deleted status, whereas a false value indicates an active status.
     */
    deleted?: boolean;
    /**
     * Read only. The full path of the folder location in which the component most currently resides within the Component Explorer hierarchy.
     */
    fullPath?: string;
    /**
     * Required. Read only. The -generated, unique identifier of the folder.
     */
    id?: string;
    /**
     * Required. The user-defined name given to the folder.
     */
    name?: string;
    /**
     * Required. The -generated, unique identifier of the parent folder.
     */
    parentId?: string;
    parentName?: string;
};

