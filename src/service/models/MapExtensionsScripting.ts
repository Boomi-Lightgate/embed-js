/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ScriptingInputs } from './ScriptingInputs';
import type { ScriptingOutputs } from './ScriptingOutputs';
export type MapExtensionsScripting = {
    Inputs: ScriptingInputs;
    Outputs: ScriptingOutputs;
    Script: string;
    language?: MapExtensionsScripting.language;
};
export namespace MapExtensionsScripting {
    export enum language {
        GROOVY = 'GROOVY',
        GROOVY2 = 'GROOVY2',
        JAVASCRIPT = 'Javascript',
    }
}

