/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MapExtensionsInput } from './MapExtensionsInput';
/**
 * Lists the function's input and outputs according to their user-given names and keys. You must list inputs and outputs sequentially in order according to their key values. When creating or updating functions, it requires all input and output values in the request regardless if they are to be mapped or populated with a default value.
 *
 * The maximum number of inputs or outputs is 100.
 */
export type MapExtensionsInputs = {
    Input?: Array<MapExtensionsInput>;
};

