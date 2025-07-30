/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompDiffElement } from './CompDiffElement';
export type CompDiffConfig = {
    CompDiffElement?: Array<CompDiffElement>;
    /**
     * The type of component that you want to compare.
     */
    componentType?: CompDiffConfig.componentType;
};
export namespace CompDiffConfig {
    /**
     * The type of component that you want to compare.
     */
    export enum componentType {
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

