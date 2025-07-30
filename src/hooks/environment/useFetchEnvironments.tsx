import { useState, useEffect } from 'react';
import { usePlugin } from '../../context/pluginContext';
import { 
  EnvironmentQueryConfig, 
  EnvironmentAtomAttachmentQueryConfig,
  IntegrationPackInstanceQueryConfig,
  IntegrationPackEnvironmentAttachmentQueryConfig
 } from  '../../service';;
import { EnvironmentType } from '../../types/environment-type';
import logger from '../../logger.service';
import queryFilter, { nestedQueryFilter } from '../../utils/queryFilter';

type FilterCondition = {
  property: string;
  operator: string;
  value: string;
};

export const useFetchEnvironments = (
  integrationPackId: string,
  includeEnvironments?: EnvironmentType,
  environmentId?: string | null
) => {
  logger.debug("useFetchEnvironments called with:", {
    integrationPackId,
    includeEnvironments,
    environmentId
  });
  const [environments, setEnvironments] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { boomi, apiAccountId } = usePlugin();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      setEnvironments([]);

      if (!boomi) {
        const msg = 'Code [1001] - Boomi Plugin not initialized correctly.';
        logger.error(msg);
        setError(msg);
        setIsLoading(false);
        return;
      }

      if (!environmentId && !includeEnvironments) {
        const msg = 'Code [1002] - Environment ID or classifications must be provided.';
        logger.error(msg);
        setError(msg);
        setIsLoading(false);
        return;
      }

      if (!apiAccountId) {
        const msg = 'Code [1003] - Missing apiAccountId.';
        logger.error(msg);
        setError(msg);
        setIsLoading(false);
        return;
      }

      try {
        let filter;

        if (includeEnvironments === 'ALL') {
          filter = nestedQueryFilter<EnvironmentQueryConfig>(
            [
              { property: "classification", operator: "EQUALS", value: 'PROD' },
              { property: "classification", operator: "EQUALS", value: 'TEST' }
            ],
            "or"
          );
        } else if (includeEnvironments === 'PROD' || includeEnvironments === 'TEST') {
          filter = queryFilter<EnvironmentQueryConfig>(
            "classification",
            "EQUALS",
            [includeEnvironments]
          );
        } else if (environmentId) {
          filter = queryFilter<EnvironmentQueryConfig>(
            "id",
            "EQUALS",
            [environmentId]
          );
        }

        logger.debug("Filter for environments: ", filter);
        const environmentsResponse = await boomi.environment.queryEnvironment(filter);

        if (!environmentsResponse?.result?.length) {
          const msg = 'Code [1004] - No environments found.';
          logger.error(msg);
          setError(msg);
          return;
        }

        const enrichedEnvironments = await Promise.all(
          environmentsResponse.result.map(async (env: any) => {
            const aFilter = queryFilter<EnvironmentAtomAttachmentQueryConfig>(
              "environmentId",
              "EQUALS",
              [env.id]
            );
            try {
              const attachmentsResponse = await boomi.environmentAtomAttachment.queryEnvironmentAtomAttachment(aFilter);
              const attachments = attachmentsResponse?.result || [];
              env.installed = false;
              if (!attachments.length) return env;

              env.isActive = false;
              const atomIds = attachments.map((att: any) => att.atomId).filter(Boolean);
              const atoms = await Promise.all(
                atomIds.map((atomId: string) =>
                  boomi.atom.getAtom(atomId).catch((e: Error) => {
                    logger.warn(`Failed to fetch atom ${atomId}: ${e.message}`);
                    return null;
                  })
                )
              );

              const validAtoms = atoms.filter(atom => atom && atom.status);
              const allOnline = validAtoms.length > 0 && validAtoms.every(atom => atom?.status === 'ONLINE');
              env.isActive = allOnline;
            } catch (e) {
              logger.warn(`Failed to fetch attachments or atom for environment ${env.id}: ${(e as Error).message}`);
            }
            return env;
          })
        );

        setEnvironments(enrichedEnvironments);
      } catch (err) {
        const msg = `Unexpected error: ${(err as Error).message}`;
        logger.error(msg);
        setError(msg);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [environmentId, includeEnvironments, apiAccountId]);

  return { environments, isLoading, error };
};
