import { AiConfig } from "./ai-config";

/* 
The configuration types for the BoomiPlugin. 
*/
export type PluginConfig = {
  /*
    The Base URL of the Boomi Platform Api  
    @description This should be the base URL of the Boomi API, typically in the format `https://api.boomi.com/api/rest/v1/`
  */
  baseUrl: string;

  /*
    The parent account id
  */
  accountId: string;

  /*
    The username that holds the api token in boomi
  */
  userName: string;

  /*
    The Api token
  */
  token: string;

  /*
    The current authenticated user 
  */
  authUser: string;

  /*
   The account group to use for this instance of the plugin 
  */
  accountGroup: string;

  /*
   The path to the config file. Must include the name of the file as
   boomi.config.js and relative to the main file
   @example '/src/boomi.config.js'
   *  
  */
  configFile?: string;

  /**
   Allows the ui to accept theme input. If defualtTheme is set
   the plugin will initialize to it. 
  */
  theme?: {
    allowThemes?: boolean;
    defaultTheme?: string | 'light' | 'dark' | 'boomi';
  }

  /**
   * AI configuration for the plugin
   */
  ai?: AiConfig;
};