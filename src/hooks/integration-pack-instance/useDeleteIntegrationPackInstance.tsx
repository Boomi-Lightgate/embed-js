import { useState } from 'react';
import { usePlugin } from '../../context/pluginContext';
import { IntegrationPackInstance } from  '../../service';;
import logger from '../../logger.service';

export const useDeleteIntegrationPackInstance = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { updateBoomiConfig, boomi, accountGroup, apiAuthUser } = usePlugin();

  const deleteIntegrationPackInstance = async (integrationPackInstanceId: string) => {
    setIsLoading(true);
    setError(null);

    if (!boomi || !accountGroup || !apiAuthUser) {
      const msg = 'Code [1001] - Boomi Plugin not initialized correctly or missing account/user info.';
      logger.error(msg);
      setIsLoading(false);
      setError(msg);
      return false;
    }

    if (!integrationPackInstanceId) {
      const msg = 'Code [1002] - integrationPackInstanceId was not provided.';
      logger.error(msg);
      setIsLoading(false);
      setError(msg);
      return false;
    }

    try {
      await boomi.integrationPackInstance.deleteIntegrationPackInstance(integrationPackInstanceId);
      logger.debug("Deleted Integration Pack Instance with ID:", integrationPackInstanceId);
      updateBoomiConfig(true);
      return true;
    } catch (err) {
      const msg = (err as Error).message;
      logger.error("Failed to delete Integration Pack Instance", err);
      setError(msg);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return { deleteIntegrationPackInstance, isLoading, error };
};
