/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Component } from './Component';
export type ComponentBulkResponse = {
    response?: Array<{
        Result: Component;
        index?: number;
        id?: string;
        statusCode?: number;
        errorMessage?: string;
    }>;
};

