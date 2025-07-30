import { useState, useCallback } from 'react';
import { usePlugin } from '../../context/pluginContext';
import { EnvironmentExtensions } from  '../../service';;
import logger from '../../logger.service';
import { env } from 'process';

export const useUpdateEnvironmentExtensions = () => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateError, setUpdateError] = useState<string | null>(null);
  const [updatedExtension, setUpdatedExtension] = useState<EnvironmentExtensions | null>(null);
  const { boomi } = usePlugin();

  /**
   * Update environment extensions for one environment.
   * 
   * @param extension - single EnvironmentExtensions object (no array)
   * @param environmentId - environment ID string
   * @param extensionGroupId - extension group ID string (required)
   */
  const updateEnvironmentExtensions = useCallback(
    async (
      extension: EnvironmentExtensions,
      environmentId: string,
      extensionGroupId: string
    ) => {
      if (!boomi || !extension) {
        const msg = 'Code [3001] - Missing Boomi client or extension payload';
        logger.error(msg);
        setUpdateError(msg);
        return;
      }

      if (!environmentId) {
        const msg = 'Code [3002] - environmentId required for update';
        logger.error(msg);
        setUpdateError(msg);
        return;
      }

      try {
        setIsUpdating(true);
        setUpdateError(null);
        logger.debug('Updating environment extension:', extension);
        extension.partial = true;
        const extensionId = extension?.id || '';
        const updated = await boomi.environmentExtensions.updateEnvironmentExtensions(
          extensionId,
          extension,
        );
        setUpdatedExtension(updated);
        logger.debug('Successfully updated environment extension:', updated);
      } catch (err: any) {
        let message = 'Unknown error';
        if (err.response && err.response.data) {
          message = err.response.data.message || JSON.stringify(err.response.data);
        } else if (err.message) {
          message = err.message;
        }
        logger.error('Failed to update environment extension:', message);
        setUpdateError(message);
        throw new Error(message);
      } finally {
        setIsUpdating(false);
      }
    },
    [boomi]
  );

  return {
    updateEnvironmentExtensions,
    isUpdating,
    updateError,
    updatedExtension,
  };
};