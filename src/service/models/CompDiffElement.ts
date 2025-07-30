/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompDiffAttribute } from './CompDiffAttribute';
export type CompDiffElement = {
    CompDiffAttribute?: Array<CompDiffAttribute>;
    ignored?: boolean;
    /**
     * The tag name of the element that you want to target for the comparative diff results.
     */
    name?: string;
    ordered?: boolean;
    /**
     * The parent element for the element that you want to configure for the comparative diff results.
     */
    parent?: string;
};

