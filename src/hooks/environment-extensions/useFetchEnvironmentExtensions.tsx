import { useState, useCallback } from 'react';
import { usePlugin } from '../../context/pluginContext';
import {
  EnvironmentExtensionsQueryConfig,
  ProcessQueryConfig,
  Environment,
  EnvironmentExtensions
} from  '../../service';;
import queryFilter, { nestedQueryFilter } from '../../utils/queryFilter';
import logger from '../../logger.service';

export const useFetchEnvironmentExtensions = () => {
  const [extensions, setExtensions] = useState<EnvironmentExtensions[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { boomi, updateBoomiConfig } = usePlugin();

  const fetchEnvironmentExtensions = useCallback(
    async (environments: Environment[], environmentId: string, integrationPackInstanceId: string) => {
      console.debug('Fetching environment extensions...', environments, environmentId, integrationPackInstanceId);
      const hasValidEnvInput = !!environmentId || (Array.isArray(environments) && environments.length > 0);
      if (!boomi || !integrationPackInstanceId || !hasValidEnvInput) {
        const msg = 'Code [2001] - Missing required Boomi client, integrationPackInstanceId, or environment(s).';
        logger.error(msg);
        setError(msg);
        throw new Error(msg); // throw is sufficient; return is redundant
      }

      setIsLoading(true);
      setError(null);

      try {
        const processFilter = queryFilter<ProcessQueryConfig>(
          'integrationPackInstanceId',
          'EQUALS',
          [integrationPackInstanceId]
        );

        logger.debug('Process query config:', processFilter);
        const processResponse = await boomi.process.queryProcess(processFilter);
        const processes = processResponse?.result || [];

        logger.debug('Fetched Processes:', processes);

        if (processes.length === 0) {
          throw new Error(`Code [2002] - No processes found for integrationPackInstanceId: ${integrationPackInstanceId}`);
        }

        const allExtensions: EnvironmentExtensions[] = [];

        for (const process of processes) {
          if (!process.id) {
            throw new Error(`Code [2003] - Missing process ID for integrationPackInstanceId: ${integrationPackInstanceId}`);
          }

          const targetEnvironments = environmentId
            ? [{ id: environmentId }]
            : environments;

          for (const env of targetEnvironments) {
            const envId = env.id || '';
            const extensionFilter = nestedQueryFilter<EnvironmentExtensionsQueryConfig>(
              [
                { property: 'environmentId', operator: 'EQUALS', value: envId },
                { property: 'extensionGroupId', operator: 'EQUALS', value: process.id }
              ],
              'and'
            );

            logger.debug(`Fetching extensions for process ${process.id} and environment ${env.id}:`, extensionFilter);
            const extResponse = await boomi.environmentExtensions.queryEnvironmentExtensions(extensionFilter);
            const extResult = extResponse?.result || [];

            logger.debug(`Fetched extensions:`, extResult);
            allExtensions.push(...extResult);
          }
        }

        logger.debug('All fetched extensions:', allExtensions);
        setExtensions(allExtensions);
      } catch (err: any) {
        const message =
          err?.response?.data?.message ||
          err?.message ||
          'Code [2004] - Unknown error fetching environment extensions';
        logger.error('Failed to fetch environment extensions:', message);
        setError(message);
        throw new Error(message);
      } finally {
        setIsLoading(false);
        updateBoomiConfig(true);
      }
    },
    [boomi, updateBoomiConfig]
  );

  return { extensions, fetchEnvironmentExtensions, isLoading, error };
};
