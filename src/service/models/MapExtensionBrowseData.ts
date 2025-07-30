/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BrowseField } from './BrowseField';
/**
 * Fields defining the credentials for connecting to the external service for the purpose of reimporting the source of destination profile to retrieve custom fields. You use these fields in the Environment Map Extension object's EXECUTE action.
 */
export type MapExtensionBrowseData = {
    BrowseField?: Array<BrowseField>;
    connectionId?: string;
};

