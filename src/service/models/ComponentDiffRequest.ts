/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompDiffConfig } from './CompDiffConfig';
export type ComponentDiffRequest = {
    CompDiffConfig?: CompDiffConfig;
    /**
     * The ID of the component for which you want to compare versions.
     */
    componentId: string;
    /**
     * The source version of the component.
     */
    sourceVersion: number;
    /**
     * The target version which you want to compare to the source version.
     */
    targetVersion: number;
};

