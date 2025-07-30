/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MapExtensionsConfiguration } from './MapExtensionsConfiguration';
import type { MapExtensionsInputs } from './MapExtensionsInputs';
import type { MapExtensionsOutputs } from './MapExtensionsOutputs';
export type MapExtensionsFunctionStep = {
    Configuration: MapExtensionsConfiguration;
    Inputs: MapExtensionsInputs;
    Outputs: MapExtensionsOutputs;
    cacheType?: MapExtensionsFunctionStep.cacheType;
    id?: string;
    position?: number;
    type?: MapExtensionsFunctionStep.type;
};
export namespace MapExtensionsFunctionStep {
    export enum cacheType {
        NONE = 'None',
        BY_DOCUMENT = 'ByDocument',
        BY_MAP = 'ByMap',
    }
    export enum type {
        COUNT = 'Count',
        CURRENT_DATE = 'CurrentDate',
        DATE_FORMAT = 'DateFormat',
        LEFT_TRIM = 'LeftTrim',
        LINE_ITEM_INCREMENT = 'LineItemIncrement',
        MATH_ABS = 'MathABS',
        MATH_ADD = 'MathAdd',
        MATH_CEIL = 'MathCeil',
        MATH_DIVIDE = 'MathDivide',
        MATH_FLOOR = 'MathFloor',
        MATH_MULTIPLY = 'MathMultiply',
        MATH_SET_PRECISION = 'MathSetPrecision',
        MATH_SUBTRACT = 'MathSubtract',
        NUMBER_FORMAT = 'NumberFormat',
        PROPERTY_GET = 'PropertyGet',
        PROPERTY_SET = 'PropertySet',
        RIGHT_TRIM = 'RightTrim',
        RUNNING_TOTAL = 'RunningTotal',
        STRING_APPEND = 'StringAppend',
        STRING_PREPEND = 'StringPrepend',
        STRING_REMOVE = 'StringRemove',
        STRING_REPLACE = 'StringReplace',
        STRING_TO_LOWER = 'StringToLower',
        STRING_TO_UPPER = 'StringToUpper',
        SUM = 'Sum',
        TRIM_WHITESPACE = 'TrimWhitespace',
        STRING_CONCAT = 'StringConcat',
        STRING_SPLIT = 'StringSplit',
        SEQUENTIAL_VALUE = 'SequentialValue',
        SIMPLE_LOOKUP = 'SimpleLookup',
        DOCUMENT_PROPERTY_GET = 'DocumentPropertyGet',
        DOCUMENT_PROPERTY_SET = 'DocumentPropertySet',
        CROSS_REF_LOOKUP = 'CrossRefLookup',
        DOCUMENT_CACHE_LOOKUP = 'DocumentCacheLookup',
        CUSTOM_SCRIPTING = 'CustomScripting',
        USER_DEFINED = 'UserDefined',
        JAPANESE_CHARACTER_CONVERSION = 'JapaneseCharacterConversion',
    }
}

