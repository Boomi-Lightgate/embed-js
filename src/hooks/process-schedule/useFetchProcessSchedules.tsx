import { useState, useCallback } from 'react';
import { usePlugin } from '../../context/pluginContext';
import {
  EnvironmentAtomAttachmentQueryConfig,
  Process,
  ProcessQueryConfig,
  ProcessSchedules,
  ProcessSchedulesQueryConfig
} from  '../../service';;
import queryFilter, { nestedQueryFilter } from '../../utils/queryFilter';
import logger from '../../logger.service';
import { log } from 'console';

export const useFetchProcessSchedules = () => {
  const [schedule, setSchedule] = useState<ProcessSchedules | null>(null);
  const [processes, setProcesses] = useState<Process[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { boomi, updateBoomiConfig } = usePlugin();

  const fetchSchedules = useCallback(async (
    environmentId: string,
    integrationPackInstanceId: string
  ) => {
    logger.debug("useFetchProcessSchedules called with:", {
      environmentId,
      integrationPackInstanceId
    });

    setIsLoading(true);
    setError(null);
    setSchedule(null);
    setProcesses([]);

    if (!boomi) {
      const msg = 'Code [2001] - Boomi Plugin not initialized correctly.';
      logger.error(msg);
      setError(msg);
      setIsLoading(false);
      return;
    }

    if (!environmentId || !integrationPackInstanceId) {
      const msg = 'Code [2002] - environmentId and integrationPackInstanceId are required.';
      logger.error(msg);
      setError(msg);
      setIsLoading(false);
      return;
    }

    try {
      const attachmentFilter = queryFilter<EnvironmentAtomAttachmentQueryConfig>(
        'environmentId',
        'EQUALS',
        [environmentId]
      );

      const { result: attachments = [] } = await boomi.environmentAtomAttachment.queryEnvironmentAtomAttachment(attachmentFilter);
      const atomIds = attachments.map((att) => att.atomId).filter(Boolean);

      if (!atomIds.length) {
        const msg = `Code [2004] - No atoms attached to environment ${environmentId}`;
        logger.warn(msg);
        setError(msg);
        return;
      }

      const processFilter = queryFilter<ProcessQueryConfig>(
        'integrationPackInstanceId',
        'EQUALS',
        [integrationPackInstanceId]
      );

      const { result: fetchedProcesses = [] } = await boomi.process.queryProcess(processFilter);

      if (!fetchedProcesses.length) {
        const msg = `Code [2003] - No processes found for integrationPackInstanceId: ${integrationPackInstanceId}`;
        logger.warn(msg);
        setError(msg);
        return;
      }

      setProcesses(fetchedProcesses);

      for (const process of fetchedProcesses) {
        const processId = process.id;
        if (!processId) {
          logger.warn(`Skipping process with missing ID: ${JSON.stringify(process)}`);
          continue;
        }

        for (const atomId of atomIds) {
          if (!atomId) continue;

          const scheduleFilter = nestedQueryFilter<ProcessSchedulesQueryConfig>(
            [
              { property: 'atomId', operator: 'EQUALS', value: atomId },
              { property: 'processId', operator: 'EQUALS', value: processId }
            ],
            'and'
          );

          try {
            const { result = [] } = await boomi.processSchedules.queryProcessSchedules(scheduleFilter);
            if (result.length && result[0]?.Schedule?.length) {
              logger.debug(`Found schedules for process ${processId}, result:`, result[0]);
              setSchedule(result[0]);
              return;
            }
          } catch (err) {
            logger.warn(`Failed to fetch schedule for process ${process.id} on atom ${atomId}: ${(err as Error).message}`);
          }
        }
      }

      logger.warn("No schedules found for any processes/atoms");
    } catch (err: any) {
      const msg = `Unexpected error fetching process schedules: ${err?.message || 'Unknown error'}`;
      logger.error(msg);
      setError(msg);
    } finally {
      setIsLoading(false);
      updateBoomiConfig(true);
    }
  }, [boomi, updateBoomiConfig]);

  return {
    schedule,
    processes,
    isLoading,
    error,
    fetchSchedules
  };
};
