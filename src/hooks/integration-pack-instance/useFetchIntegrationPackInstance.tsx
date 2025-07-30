import { useState, useEffect, useRef } from 'react';
import { usePlugin } from '../../context/pluginContext';
import { IntegrationPackInstance } from  '../../service';;
import queryFilter, { nestedQueryFilter} from '../../utils/queryFilter';
import logger from '../../logger.service';

export const useFetchIntegrationPackInstance = (
    integrationPackInstanceId: string
) => {
  const [integrationPackInstance, setIntegrationPackInstance] = useState<IntegrationPackInstance | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { updateBoomiConfig, boomi, accountGroup, apiAuthUser } = usePlugin();
  const hasFetchedRef = useRef(false);

  useEffect(() => {
    if (hasFetchedRef.current) return;
    hasFetchedRef.current = true;
    const fetchIntegrationPackInstance = async () => {
      setIsLoading(true);
      setError(null);

      if (!boomi) {
        const msg = 'Code [1001] - Boomi Plugin not initialized correctly.';
        setIsLoading(false);
        return;
      }

      if (!accountGroup || !apiAuthUser) {
        const msg = 'Code [1001] - Account group or authenticated user was not provided.';
        setIsLoading(false);
        return;
      }

      if (!integrationPackInstanceId) {
        const msg = "Code [1001] - integrationPackInstanceId was not provided.";
        setIsLoading(false);
        return;
      }

      try {
        const iResponse = await boomi.integrationPackInstance.getIntegrationPackInstance(integrationPackInstanceId);
        logger.debug("Integration Pack Instance ", iResponse);
        if (iResponse) {
          logger.debug("Fetched Integration Pack Instance: ", iResponse);
          setIntegrationPackInstance(iResponse);
        } else {
          const msg = 'Code [1004] - Instance not found.';
          logger.error(msg);
        }
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setIsLoading(false);
        updateBoomiConfig(true);
      }
    };

    fetchIntegrationPackInstance();
  }, [boomi]);

  return { integrationPackInstance, isLoading, error };
};
