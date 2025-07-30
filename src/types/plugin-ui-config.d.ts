import { EnvironmentConfig } from "./environment-config";
import { FormInputConfig } from "./form-input-config";

export type PluginboomiConfig = {
  /**
   * Fonts for the plugin
   */
  font?: string;

  /**
   * The container for the plugin
   */
  container?:{
    class?: string;
  };

  /**
   * Primary and Secondary button for the plugin
   */
  primaryButton?: ButtonConfig;
  secondaryButton?: ButtonConfig;

  /**
   * Loader colors
   */
  loader?: LoaderConfig;

  /**
   * Breadcrumb 
   */
  breadcrumb?: BreadcrumbConfig;


  /**
   * Component-specific config keyed by component name
   */
  [componentName: string]: string | ComponentConfig | any;

  /**
   * The multi integrations component
   */
  integrations?: IntegrationsConfig;

  /**
   * The multi Integration Packs component
   */
  integrationPacks?: IntegrationPacksConfig;

  /**
   * The environments select component
  */
  environments?: EnvironmentsConfig;

  /**
   * Forms, keyed by form name
   */
  form?: {
    [formName: string]: FormConfig;
  };

  /**
   * Base input class
   */
  input?: FormInputConfig;
};
