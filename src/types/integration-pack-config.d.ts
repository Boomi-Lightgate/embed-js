export type IntegrationPackConfig = {
  /**
   * Config Values
   */
  integrationPackId: string;
  integrationPackInstanceId: string;
  environmentId: string;
  integrationPackName?: string;
  integrationPackOverrideName?: string;
  integrationPackDescription?: string;
  environmentName: string;
  environmentStatus: boolean;
  installationType?: "SINGLE" | "MULTI";
  defaultSchedule?: ProcessSchedules | null;
  hasMapExtension?: boolean;
};