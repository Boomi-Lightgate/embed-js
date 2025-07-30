import logger from '../logger.service';
import {
  MapExtensionsFunction,
  MapExtensionsScripting,
  ScriptingParameter,
} from  '../service';;
import { PositionedFunction } from '../components/integration/FieldMappingCanvas'; // adjust path as needed
import { log } from 'console';

/**
 * Converts an array of PositionedFunction (local UI model) into
 * Boomi MapExtensionsFunction format.
 * Returns both the converted functions and a map of old to new IDs.
 */
export function toMapExtensionsFunctions(
  positioned: PositionedFunction[]
): {
  functions: MapExtensionsFunction[];
  idMap: Record<string, string>;
} {
  const idMap: Record<string, string> = {};

  const functions: MapExtensionsFunction[] = positioned.map((fn) => {
    const finalId = fn.newId || fn.id;

    if (fn.id !== finalId) {
      idMap[fn.id] = finalId;
    }

    return {
      id: finalId,
      type: MapExtensionsFunction.type.CUSTOM_SCRIPTING,
      cacheType: MapExtensionsFunction.cacheType.NONE,
      Inputs: {
        Input: (fn.inputs || []).map((input) => ({
          key: input.key,
          name: input.name,
        })),
      },
      Outputs: {
        Output: (fn.outputs || []).map((output) => ({
          key: output.key,
          name: output.name,
        })),
      },
      Configuration: {
        Scripting: {
          language: MapExtensionsScripting.language.JAVASCRIPT,
          Script: fn.script ?? '',
          Inputs: {
            Input: (fn.inputs || []).map((input) => ({
              index: input.key,
              name: input.name,
              dataType:
                ScriptingParameter.dataType[
                  input.dataType as keyof typeof ScriptingParameter.dataType
                ] ?? ScriptingParameter.dataType.CHARACTER,
            })),
          },
          Outputs: {
            Output: (fn.outputs || []).map((output) => ({
              index: output.key,
              name: output.name,
            })),
          },
        },
      },
    };
  });
  logger.debug('toMapExtensionsFunctions:', {
    functions,
    idMap,
  });
  return { functions, idMap };
}

/**
 * Converts Boomi MapExtensionsFunction array into local PositionedFunction array.
 */
export function fromMapExtensionsFunctions(
  boomiFunctions: MapExtensionsFunction[]
): PositionedFunction[] {
  if (!boomiFunctions) return [];

  return boomiFunctions.map((fn) => {
    const inputs =
      fn.Configuration?.Scripting?.Inputs?.Input?.map((input) => ({
        key: input.index ?? 0,
        name: input.name ?? '',
        dataType: input.dataType ?? ScriptingParameter.dataType.CHARACTER,
      })) || [];

    const outputs =
      fn.Configuration?.Scripting?.Outputs?.Output?.map((output) => ({
        key: output.index ?? 0,
        name: output.name ?? '',
      })) || [];

    return {
      id: fn.id ?? '',
      name: fn.id ?? '',
      type: fn.type ?? 'CUSTOM_SCRIPTING',
      inputs,
      outputs,
      script: fn.Configuration?.Scripting?.Script ?? '',
      x: undefined,
      y: undefined,
    };
  });
}


/**
 * Strips the y coordinate suffix from a function ID string.
 */
export function stripYFromId(id: string): string {
  try {
    const newId = id.replace(/---y:-?\d+/, '');
    return newId;
  } catch (err) {
    logger.error('stripYFromId Error:', err);
    return id;
  }
}

/**
 * Parses the y coordinate number from a function ID string.
 */
export function parseYFromId(id: string): number | undefined {
  try {
    const match = id.match(/---y:(-?\d+)/);
    return match ? parseInt(match[1], 10) : undefined;
  } catch (err) {
    logger.error('parseYFromId Error:', err);
    return undefined;
  }
}

/**
 * Embeds a y coordinate number into the function ID string.
 */
export function embedYInId(id: string, y: number): string {
  try {
    const wholeY = Math.round(y); // ensure whole number
    logger.debug(`embedYInId parsing: ${id}, y: ${wholeY}`);
    return `${stripYFromId(id)}---y:${wholeY}`;
  } catch (err) {
    logger.error('embedYInId Error:', err);
    return id;
  }
}

/**
 * Sanitizes an ID string for use as an HTML element ID or similar.
 */
export function sanitize(id: string | undefined): string {
  try {
    if (typeof id !== 'string') {
      throw new TypeError(`Expected string but got ${typeof id}`);
    }
    return id.replace(/[^\w-]/g, '');
  } catch (err) {
    logger.error('sanitize Error:', err);
    return '';
  }
}
