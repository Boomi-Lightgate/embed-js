declare module '../boomi.config.js' {
  import { PluginboomiConfig } from './plugin-ui-config';
  const config: { boomiConfig?: PluginboomiConfig };
  export = config;
}