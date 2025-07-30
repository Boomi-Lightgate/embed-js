import { useState, useEffect } from 'react';
import { usePlugin } from '../../context/pluginContext';
import { 
  IntegrationPackEnvironmentAttachmentQueryConfig, 
  EnvironmentQueryConfig,
  Environment } from  '../../service';;
import logger from '../../logger.service';
import queryFilter from '../../utils/queryFilter';

/**
 * Fetches attached environments for a given Integration Pack Instance ID
 */
export const useFetchIntegrationPackEnvironmentAttachment = (
  integrationPackInstanceId?: string
) => {
  const [attachedEnvironments, setAttachedEnvironments] = useState<Environment[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { boomi } = usePlugin();

  useEffect(() => {
    const fetchAttachments = async () => {
      setIsLoading(true);
      setError(null);
      setAttachedEnvironments([]);

      if (!boomi) {
        const msg = 'Code [1001] - Boomi Plugin not initialized correctly.';
        logger.error(msg);
        setError(msg);
        setIsLoading(false);
        return;
      }

      if (!integrationPackInstanceId) {
        const msg = 'Code [1002] - Integration Pack Instance ID is required to fetch attachments.';
        logger.error(msg);
        setError(msg);
        setIsLoading(false);
        return;
      }

      try {
        const filter = queryFilter<IntegrationPackEnvironmentAttachmentQueryConfig>(
          'integrationPackInstanceId',
          'EQUALS',
          [integrationPackInstanceId]
        );
        logger.debug('Querying IntegrationPackEnvironmentAttachment with filter:', filter);

        const response = await boomi.integrationPackEnvironmentAttachment.queryIntegrationPackEnvironmentAttachment(filter);
        const attachments = response?.result || [];
        logger.debug('Fetched IntegrationPackEnvironmentAttachments:', attachments);

        const environmentIds = attachments
        .map((attachment) => attachment.environmentId)
        .filter((id): id is string => !!id);
      
        if (environmentIds.length === 0) {
          setAttachedEnvironments([]);
          return;
        }
        
        const eFilter = queryFilter<EnvironmentQueryConfig>(
          "environmentId", 
          "EQUALS", 
          environmentIds
        );
        
        const environmentResponse = await boomi.environment.queryEnvironment(eFilter);
        const environments = environmentResponse?.result || [];
        logger.debug('Fetched Environments:', environments);
        
        setAttachedEnvironments(environments);
        logger.debug('Fetched Environments:', environments);

        setAttachedEnvironments(environments);
      } catch (err) {
        const msg = `Code [1010] - ${err instanceof Error ? err.message : 'Unknown error'}`;
        logger.error(msg);
        setError(msg);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAttachments();
  }, [boomi, integrationPackInstanceId]);

  return { attachedEnvironments, isLoading, error };
};

