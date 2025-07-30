import { useState, useCallback } from 'react';
import { usePlugin } from '../../context/pluginContext';
import {
  EnvironmentAtomAttachmentQueryConfig,
  ProcessQueryConfig,
  ProcessSchedules,
  ProcessSchedulesQueryConfig,
  Schedule,
} from  '../../service';;
import queryFilter, { nestedQueryFilter } from '../../utils/queryFilter';
import logger from '../../logger.service';

export const useUpdateProcessSchedules = () => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateError, setUpdateError] = useState<string | null>(null);
  const [updatedSchedules, setUpdatedSchedules] = useState<ProcessSchedules[]>([]);
  const { boomi } = usePlugin();

  const updateProcessSchedules = useCallback(
    async (
      schedules: Schedule[],
      environmentId: string,
      integrationPackInstanceId: string
    ) => {
      if (!boomi) {
        const msg = 'Code [3001] - Missing Boomi client';
        logger.error(msg);
        setUpdateError(msg);
        return;
      }

      if (!environmentId || !integrationPackInstanceId) {
        const msg = 'Code [3002] - environmentId and integrationPackInstanceId required';
        logger.error(msg);
        setUpdateError(msg);
        return;
      }

      try {
        setIsUpdating(true);
        setUpdateError(null);
        setUpdatedSchedules([]);

        const attachmentFilter = queryFilter<EnvironmentAtomAttachmentQueryConfig>(
          'environmentId',
          'EQUALS',
          [environmentId]
        );

        const { result: attachments = [] } = await boomi.environmentAtomAttachment.queryEnvironmentAtomAttachment(attachmentFilter);
        const atomIds = attachments.map((att) => att.atomId).filter(Boolean);

        if (!atomIds.length) {
          const msg = `Code [3004] - No atoms attached to environment ${environmentId}`;
          logger.warn(msg);
          setUpdateError(msg);
          return;
        }

        const processFilter = queryFilter<ProcessQueryConfig>(
          'integrationPackInstanceId',
          'EQUALS',
          [integrationPackInstanceId]
        );
        const { result: processes = [] } = await boomi.process.queryProcess(processFilter);

        if (!processes.length) {
          const msg = `Code [3003] - No processes found for integrationPackInstanceId: ${integrationPackInstanceId}`;
          logger.warn(msg);
          setUpdateError(msg);
          return;
        }

        const updated: ProcessSchedules[] = [];

        for (const process of processes) {
          if (!process.id) continue;

          for (const atomId of atomIds) {
            if (!atomId) continue;

            const conceptualId = `${process.id}:${atomId}`;

            const schedFilter = nestedQueryFilter<ProcessSchedulesQueryConfig>(
              [
                { property: "atomId", operator: "EQUALS", value: atomId },
                { property: "processId", operator: "EQUALS", value: process.id }
              ],
              "and"
            );

            const { result: existingResults = [] } = await boomi.processSchedules.queryProcessSchedules(schedFilter);
            const existing = existingResults[0];

            const schedulePayload: ProcessSchedules = {
              id: conceptualId,
              atomId,
              processId: process.id,
              Schedule: schedules, // ← overwrite completely
            };

            logger.debug(`Replacing schedules for ${conceptualId}`, schedulePayload);

            try {
              const result = await boomi.processSchedules.updateProcessSchedules(conceptualId, schedulePayload);
              updated.push(result);
            } catch (err: any) {
              const msg = `Failed to update schedule for ${conceptualId}: ${err.message}`;
              logger.warn(msg);
            }
          }
        }

        setUpdatedSchedules(updated);
        logger.debug(`Successfully replaced schedules on ${updated.length} process entries`);
      } catch (err: any) {
        const message = err.response?.data?.message || err.message || 'Unknown error';
        logger.error('Failed to update process schedules:', message);
        setUpdateError(message);
        throw new Error(message);
      } finally {
        setIsUpdating(false);
      }
    },
    [boomi]
  );

  return {
    updateProcessSchedules,
    isUpdating,
    updateError,
    updatedSchedules,
  };
};
