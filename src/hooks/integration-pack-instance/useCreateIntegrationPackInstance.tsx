import { useState, useCallback } from 'react';
import { usePlugin } from '../../context/pluginContext';
import {
  IntegrationPackInstance,
  Environment,
  IntegrationPackEnvironmentAttachment,
  EnvironmentMapExtensionsSummaryQueryConfig,
  ProcessQueryConfig,
} from  '../../service';;
import queryFilter, { nestedQueryFilter } from '../../utils/queryFilter';
import logger from '../../logger.service';

interface ExtendedIntegrationPackInstance extends IntegrationPackInstance {
  hasMapExtension: boolean;
}

export const useCreateIntegrationPackInstance = () => {
  const [integrationPackInstance, setIntegrationPackInstance] = useState<ExtendedIntegrationPackInstance | null>(null);
  const [environmentsAttached, setEnvironmentsAttached] = useState<Environment[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { updateBoomiConfig, boomi, accountGroup, apiAuthUser } = usePlugin();

  const createInstance = useCallback(
    async (
      integrationPackId: string,
      isSingleInstall: boolean = false,
      integrationPackOverrideName?: string,
      environments?: Environment[]
    ): Promise<ExtendedIntegrationPackInstance | undefined> => {
      setIsLoading(true);
      setError(null);

      try {
        if (!boomi) throw new Error('Code [1001] - Boomi Plugin not initialized correctly.');
        if (!accountGroup || !apiAuthUser) throw new Error('Code [1002] - Missing account group or authenticated user.');

        if (environments?.some(env => !env.id)) {
          throw new Error('Code [2002] - All environments must include an `id`.');
        }

        const payload: IntegrationPackInstance = {
          integrationPackId,
          ...(isSingleInstall ? {} : { integrationPackOverrideName }),
        };

        logger.debug('Creating new Integration Pack Instance with:', payload);
        const instance = await boomi.integrationPackInstance.createIntegrationPackInstance(payload);
        logger.debug('Created Integration Pack Instance:', instance);

        if (!instance?.id) {
          throw new Error('Code [1011] - Integration Pack Instance missing ID after creation.');
        }

        // Attach environments
        if (environments?.length) {
          await Promise.all(
            environments.map((env) =>
              boomi.integrationPackEnvironmentAttachment.createIntegrationPackEnvironmentAttachment({
                environmentId: env.id!,
                integrationPackInstanceId: instance.id!,
              } as IntegrationPackEnvironmentAttachment)
            )
          );
          logger.debug('Attached environments to new Integration Pack Instance:', environments);
          setEnvironmentsAttached(environments);
        }

        // Check for Map Extension
        const extendedInstance: ExtendedIntegrationPackInstance = {
          ...instance,
          hasMapExtension: false,
        };

        const processFilter = queryFilter<ProcessQueryConfig>(
          'integrationPackInstanceId',
          'EQUALS',
          [instance.id]
        );

        const processResponse = await boomi.process.queryProcess(processFilter);
        const processes = processResponse?.result || [];

        for (const process of processes) {
          if (!process.id) continue;

          for (const env of environments || []) {
            const summaryFilter = nestedQueryFilter<EnvironmentMapExtensionsSummaryQueryConfig>(
              [
                { property: 'environmentId', operator: 'EQUALS', value: env.id! },
                { property: 'extensionGroupId', operator: 'EQUALS', value: process.id }
              ],
              'and'
            );

            const summaryResponse = await boomi.environmentMapExtensionsSummary.queryEnvironmentMapExtensionsSummary(summaryFilter);
            const summaries = summaryResponse?.result || [];

            if (summaries.length > 0 && summaries[0].id) {
              extendedInstance.hasMapExtension = true;
              break;
            }
          }

          if (extendedInstance.hasMapExtension) break;
        }

        setIntegrationPackInstance(extendedInstance);
        return extendedInstance;
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Code [1010] - Unknown error occurred';
        logger.error(message, err);
        setError(message);
        return undefined;
      } finally {
        setIsLoading(false);
        updateBoomiConfig(true);
      }
    },
    [boomi, accountGroup, apiAuthUser, updateBoomiConfig]
  );

  return {
    integrationPackInstance,
    environmentsAttached,
    isLoading,
    error,
    createInstance,
  };
};
