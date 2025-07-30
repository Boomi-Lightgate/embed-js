/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MapExtensionsFunctionMapping } from './MapExtensionsFunctionMapping';
/**
 * Defines the mapping of inputs and outputs for the user-defined function and each function step. It uses the following attributes:
 *
 * 1. fromFunction - represents the function ID from which you are mapping.
 * 2. fromKey - represents the function's output key from which you are mapping.
 * 3. toFunction - represents the function ID to which you are mapping.
 * 4. toKey - represents the function's input key to which you are mapping.
 */
export type MapExtensionsFunctionMappings = {
    Mapping?: Array<MapExtensionsFunctionMapping>;
};

