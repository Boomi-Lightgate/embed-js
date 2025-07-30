import { useState } from 'react';
import OpenAI from 'openai';
import { z } from 'zod';
import { zodTextFormat } from 'openai/helpers/zod';
import {
  MapExtensionsFunction,
  MapExtensionsScripting,
  ScriptingParameter,
} from  '../../service';
import { usePlugin } from '../../context/pluginContext';
import logger from '../../logger.service';

const AiTransformation = z.object({
  name: z.string(),
  script: z.string(),
  inputs: z
    .array(
      z.object({
        key: z.string(),
        name: z.string(),
        dataType: z.enum(['CHARACTER', 'DATETIME', 'FLOAT', 'INTEGER']),
      })
    )
    .nullable(),
  outputs: z
    .array(
      z.object({
        key: z.string(),
        name: z.string(),
      })
    )
    .nullable(),
});

export const useFetchAiTransformations = () => {
  const [result, setResult] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { ai } = usePlugin();
  if (!ai || !ai.apiKey) {
    throw new Error('OpenAI API key is not configured in the plugin context.');
  }
  const openai = new OpenAI({ apiKey: ai.apiKey, dangerouslyAllowBrowser: true  });

  const fetchTransformation = async (userPrompt: string, id: string) => {
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await openai.responses.parse({
        model: ai.model,
        input: [
          {
            role: 'system',
            content: `
You are a developer assistant. Convert user prompts into JavaScript transformation functions.
Define a "name", "script", "inputs", and "outputs".

Each input must have:
- a unique "key" as a number starting from 1, 2, 3, etc. 
- a user-friendly "name" with no spaces or special characters and in camelCase.
- an appropriate "dataType" chosen from: CHARACTER, DATETIME, FLOAT, INTEGER.

Each output must have:
- a unique "key" as a number starting from 1, 2, 3, etc. 
- a user-friendly "name".
- do not use spaces or special characters, and use camelCase.
- the output name should not be 'output', but should be very short descriptive of the transformation

The "script" should be a valid JavaScript that respresents the transformation logic:
- the output created should represent the final result =,
-  do not use let, const, var, or any other declaration as the final result statement.
- the name of the final result should be the same as the output name.
- Format the response as javascript with line breaks and indentation.

Only return the parsed object in the expected format.`,
          },
          {
            role: 'user',
            content: userPrompt,
          },
        ],
        text: {
          format: zodTextFormat(AiTransformation, 'ai_transformation'),
        },
      });

      const fn = response.output_parsed;

      if (!fn?.script) {
        throw new Error('Transformation script could not be generated.');
      }

      // Ensure index === key, and uniqueness
      const structuredOutput = {
        id,
        type: MapExtensionsFunction.type.CUSTOM_SCRIPTING,
        cacheType: MapExtensionsFunction.cacheType.NONE,
        Inputs: {
          Input: (fn.inputs || []).map(input => ({
            key: input.key,
            name: input.name,
          })),
        },
        Outputs: {
          Output: (fn.outputs || []).map(output => ({
            key: output.key,
            name: output.name,
          })),
        },
        Configuration: {
          Scripting: {
            language: MapExtensionsScripting.language.JAVASCRIPT,
            Script: fn.script,
            Inputs: {
              Input: (fn.inputs || []).map(input => ({
                index: input.key,
                name: input.name,
                dataType: input.dataType as ScriptingParameter.dataType,
              })),
            },
            Outputs: {
              Output: (fn.outputs || []).map(output => ({
                index: output.key,
                name: output.name,
              })),
            },
          },
        },
      };
      logger.debug('Structured output:', structuredOutput);
      setResult(structuredOutput);
      return structuredOutput;

    } catch (err: any) {
      const message = err?.message || 'An unexpected error occurred.';
      logger.error('AI transformation error:', message);
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    result,
    isLoading,
    error,
    fetchTransformation,
  };
};
