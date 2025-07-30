export type AiConfig = {
  /**
   * Enable Ai Features within the plugin
   */
  enabled: boolean;

  /**
   * Choose a supported Open AI model. This plugin relies on open AI StructuredOutputs,
   * the configuration only allows for models that support it. 
   */
  model: 'gpt-4.1-2025-04-14' | 'gpt-4o-mini-2024-07-18' | 'gpt-4o-2024-08-06';

  /**
   * The api key for open ai. 
   */
  apiKey: string;


};