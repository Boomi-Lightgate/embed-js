import { useState, useCallback } from 'react';
import { usePlugin } from '../../context/pluginContext';
import {
  EnvironmentMapExtension,
  EnvironmentMapExtensionsSummaryQueryConfig,
  ProcessQueryConfig,
} from  '../../service';;
import queryFilter, { nestedQueryFilter } from '../../utils/queryFilter';
import logger from '../../logger.service';

export const useFetchMapExtensions = () => {
  const [extensions, setExtensions] = useState<EnvironmentMapExtension[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { boomi, updateBoomiConfig } = usePlugin();

  const fetchMapExtensions = useCallback(
    async (environmentId: string, integrationPackInstanceId: string) => {
      console.debug('Fetching environment map extensions...', environmentId);
      if (!boomi || !integrationPackInstanceId || !environmentId) {
        const msg = 'Code [2001] - Missing required Boomi client, integrationPackInstanceId, or environment(s).';
        logger.error(msg);
        setError(msg);
        throw new Error(msg);
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

        const allExtensions: EnvironmentMapExtension[] = [];

        for (const process of processes) {
          if (!process.id) {
            throw new Error(`Code [2003] - Missing process ID for integrationPackInstanceId: ${integrationPackInstanceId}`);
          }

          const sFilter = nestedQueryFilter<EnvironmentMapExtensionsSummaryQueryConfig>(
            [
              { property: 'environmentId', operator: 'EQUALS', value: environmentId },
              { property: 'extensionGroupId', operator: 'EQUALS', value: process.id }
            ],
            'and'
          );

          logger.debug('extension map summary query config:', sFilter);
          const sResponse = await boomi.environmentMapExtensionsSummary.queryEnvironmentMapExtensionsSummary(sFilter);
          const summaries = sResponse?.result || [];

          if (summaries.length > 0 && summaries[0].id) {
            logger.debug('Found map extension summary:', summaries[0]);
            const mapResponse = await boomi.environmentMapExtension.getEnvironmentMapExtension(summaries[0].id);

            if (mapResponse?.Map) {
              allExtensions.push(mapResponse); // keep full EnvironmentMapExtension
            }
          }
        }

        logger.debug('All fetched environment map extensions:', allExtensions);
        setExtensions(allExtensions);
      } catch (err: any) {
        const message =
          err?.response?.data?.message ||
          err?.message ||
          'Code [2004] - Unknown error fetching map extensions';
        logger.error('Failed to fetch map extensions:', message);
        setError(message);
        throw new Error(message);
      } finally {
        setIsLoading(false);
        updateBoomiConfig(true);
      }
    },
    [boomi, updateBoomiConfig]
  );

  return { extensions, fetchMapExtensions, isLoading, error };
};
