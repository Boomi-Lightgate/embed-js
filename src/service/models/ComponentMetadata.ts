/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ComponentMetadata = {
    /**
     * If specified, the branch on which you want to manage the component.
     */
    branchId?: string;
    branchName?: string;
    /**
     * Required. Read only. The ID of the component. The component ID is available on the Revision History dialog, which you can access from the Build page in the service.
     */
    componentId?: string;
    /**
     * Read only. If you copied the component, this field is the ID of the original component from where you copied the component.
     */
    copiedFromComponentId?: string;
    /**
     * Read only. If you copied the component, this field is the revision number of the original component you copied.
     */
    copiedFromComponentVersion?: number;
    /**
     * Read only. User name of the user who created the component.
     */
    createdBy?: string;
    /**
     * Read only. Date and time.
     */
    createdDate?: string;
    /**
     * Read only. Indicates if the value specified in the version field is the most current and latest revision number created for the component on the **Build** tab. A value of True indicates that the revision number is the most current revision number on the **Build** tab, whereas False indicates that the version field value is not the most current revision number.
     */
    currentVersion?: boolean;
    /**
     * Read only. Indicates if the component is deleted. A value of True indicates a deleted status, whereas False indicates an active status.
     */
    deleted?: boolean;
    /**
     * The ID of the folder where the component currently resides.
     */
    folderId?: string;
    /**
     * Read only. The folder location of the component within Component Explorer.
     */
    folderName?: string;
    /**
     * Read only. User name of the user who last modified the component.
     */
    modifiedBy?: string;
    /**
     * Read only. Date and time.
     */
    modifiedDate?: string;
    /**
     * Read only.
     */
    name?: string;
    /**
     * Read only. Used by connector-related components \(connections and operations\) to identify the connector type. Subtype values are the internal connector ID, not the user-facing name.See [Connector object](/api/platformapi#tag/Connector).
     */
    subType?: string;
    /**
     * Read only. The type of component. See the section **Component Types** later in this topic for a complete list of component type values
     */
    type?: ComponentMetadata.type;
    /**
     * Read only.
     */
    version?: number;
};
export namespace ComponentMetadata {
    /**
     * Read only. The type of component. See the section **Component Types** later in this topic for a complete list of component type values
     */
    export enum type {
        CERTIFICATE = 'certificate',
        CONNECTOR_ACTION = 'connector-action',
        CONNECTOR_SETTINGS = 'connector-settings',
        CROSSREF = 'crossref',
        DOCUMENTCACHE = 'documentcache',
        TRANSFORM_MAP = 'transform.map',
        TRANSFORM_FUNCTION = 'transform.function',
        CERTIFICATE_PGP = 'certificate.pgp',
        PROCESS = 'process',
        PROCESSPROPERTY = 'processproperty',
        PROFILE_DB = 'profile.db',
        PROFILE_EDI = 'profile.edi',
        PROFILE_FLATFILE = 'profile.flatfile',
        PROFILE_XML = 'profile.xml',
        PROFILE_JSON = 'profile.json',
        QUEUE = 'queue',
        TRADINGPARTNER = 'tradingpartner',
        TPGROUP = 'tpgroup',
        TPORGANIZATION = 'tporganization',
        TPCOMMOPTIONS = 'tpcommoptions',
        WEBSERVICE = 'webservice',
        WEBSERVICE_EXTERNAL = 'webservice.external',
        PROCESSROUTE = 'processroute',
        CUSTOMLIBRARY = 'customlibrary',
        EDISTANDARD = 'edistandard',
        FLOWSERVICE = 'flowservice',
        SCRIPT_PROCESSING = 'script.processing',
        SCRIPT_MAPPING = 'script.mapping',
        XSLT = 'xslt',
    }
}

