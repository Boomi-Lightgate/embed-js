/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Atom } from './Atom';
export type AtomBulkResponse = {
    response?: Array<{
        Result: Atom;
        index?: number;
        id?: string;
        statusCode?: number;
        errorMessage?: string;
    }>;
};

