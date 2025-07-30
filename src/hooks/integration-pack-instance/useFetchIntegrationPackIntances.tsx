import { useState, useEffect, useRef, useCallback } from 'react';
import { usePlugin } from '../../context/pluginContext';
import {
  IntegrationPackQueryConfig,
  IntegrationPackInstanceQueryConfig,
  AccountGroupQueryConfig,
  AccountGroupIntegrationPackQueryConfig,
  IntegrationPackEnvironmentAttachmentQueryConfig,
  EnvironmentAtomAttachmentQueryConfig,
  EnvironmentMapExtensionsSummaryQueryConfig,
  ProcessQueryConfig,
} from  '../../service';;
import queryFilter, { nestedQueryFilter } from '../../utils/queryFilter';
import logger from '../../logger.service';

const PAGE_SIZE = 9;

const limitConcurrency = async <T,>(
  max: number,
  items: T[],
  task: (item: T) => Promise<any>
): Promise<any[]> => {
  const results: any[] = [];
  let index = 0;

  const workers = Array.from({ length: max }).map(async () => {
    while (index < items.length) {
      const currentIndex = index++;
      try {
        results[currentIndex] = await task(items[currentIndex]);
      } catch (err) {
        logger.warn(`Rate-limited task failed: ${(err as Error).message}`);
        results[currentIndex] = null;
      }
    }
  });

  await Promise.all(workers);
  return results;
};

export const useFetchIntegrationPackInstances = ({ search }: { search?: string }) => {
  const [integrationPackInstances, setIntegrationPackInstances] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  const { updateBoomiConfig, boomi, accountGroup, apiAuthUser } = usePlugin();
  const hasFetchedRef = useRef(false);
  const atomCache = useRef<Map<string, any>>(new Map());
  const environmentCache = useRef<Map<string, any>>(new Map());

  const fetchIntegrationPackInstances = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    if (!boomi || !accountGroup || !apiAuthUser) {
      setError("Code [1001] - Plugin or accountGroup/apiAuthUser missing.");
      setIsLoading(false);
      return;
    }

    try {
      const pBoomi = updateBoomiConfig(false);
      const groupFilter = queryFilter<AccountGroupQueryConfig>("name", "EQUALS", [accountGroup]);
      const groupResponse = await pBoomi.accountGroup.queryAccountGroup(groupFilter);
      const groupId = groupResponse?.result?.[0]?.id as string;
      if (!groupId) throw new Error(`Code [1005] - AccountGroup '${accountGroup}' not found.`);

      const ipFilter = queryFilter<AccountGroupIntegrationPackQueryConfig>(
        "accountGroupId",
        "EQUALS",
        [groupId]
      );

      const ipResponse = await pBoomi.accountGroupIntegrationPack.queryAccountGroupIntegrationPack(ipFilter);
      const agIntegrationPacks = ipResponse?.result || [];

      const installationTypeMap = new Map<string, string>();
      const integrationPackNameMap = new Map<string, string>();
      agIntegrationPacks.forEach((aig: any) => {
        if (aig.integrationPackId && aig.installationType) {
          installationTypeMap.set(aig.integrationPackId, aig.installationType);
        }
        if (aig.integrationPackId && aig.integrationPackName) {
          integrationPackNameMap.set(aig.integrationPackId, aig.integrationPackName);
        }
      });

      const agIntegrationPackIds = agIntegrationPacks.map((aig: any) => aig.integrationPackId);
      const ipDetailsFilter = nestedQueryFilter<IntegrationPackQueryConfig>(
        agIntegrationPackIds.map((id) => ({
          property: "id",
          operator: "EQUALS",
          value: id,
        })),
        "or"
      );
      const ipDetailsResponse = await boomi.integrationPack.queryIntegrationPack(ipDetailsFilter);
      const ipDetails = ipDetailsResponse?.result || [];

      const integrationPackDescriptionMap = new Map<string, string>();
      ipDetails.forEach((ip: any) => {
        if (ip.id && ip.Description) {
          integrationPackDescriptionMap.set(ip.id, ip.Description);
        }
      });

      const ipInstanceFilter = nestedQueryFilter<IntegrationPackInstanceQueryConfig>(
        agIntegrationPackIds.map((id) => ({
          property: "integrationPackId",
          operator: "EQUALS",
          value: id,
        })),
        "or"
      );

      const iResponse = await boomi.integrationPackInstance.queryIntegrationPackInstance(ipInstanceFilter);
      const allInstances = iResponse?.result || [];

      const filteredInstances = search
        ? allInstances.filter((instance: any) =>
            instance.name?.toLowerCase().includes(search.toLowerCase()) ||
            instance.integrationPackOverrideName?.toLowerCase().includes(search.toLowerCase())
          )
        : allInstances;

      const total = filteredInstances.length;
      const pages = Math.ceil(total / PAGE_SIZE);
      const start = (currentPage - 1) * PAGE_SIZE;
      const end = start + PAGE_SIZE;
      const paginatedInstances = filteredInstances.slice(start, end);

      const enriched = await limitConcurrency(4, paginatedInstances, async (instance: any) => {
        try {
          instance.installed = true;
          instance.installationType = installationTypeMap.get(instance.integrationPackId);
          instance.name = integrationPackNameMap.get(instance.integrationPackId);
          instance.description = integrationPackDescriptionMap.get(instance.integrationPackId);
          logger.debug(`Enriching instance: ${instance.id} - ${instance.description}`);
          instance.isActive = false;
          instance.hasMapExtension = false;

          const ipeFilter = queryFilter<IntegrationPackEnvironmentAttachmentQueryConfig>(
            'integrationPackInstanceId',
            'EQUALS',
            [instance.id]
          );
          const ipeResponse = await boomi.integrationPackEnvironmentAttachment.queryIntegrationPackEnvironmentAttachment(ipeFilter);
          const attachments = ipeResponse?.result || [];

          await limitConcurrency(4, attachments, async (envAttachment: any) => {
            const envId = envAttachment.environmentId;

            const envFilter = queryFilter<EnvironmentAtomAttachmentQueryConfig>(
              'environmentId',
              'EQUALS',
              [envId]
            );
            const envResponse = await boomi.environmentAtomAttachment.queryEnvironmentAtomAttachment(envFilter);
            const atomIds = (envResponse?.result || []).map((att: any) => att.atomId).filter(Boolean);

            const atoms = await limitConcurrency(4, atomIds, async (atomId: string) => {
              if (atomCache.current.has(atomId)) return atomCache.current.get(atomId);
              try {
                const atom = await boomi.atom.getAtom(atomId);
                atomCache.current.set(atomId, atom);
                return atom;
              } catch (e) {
                logger.warn(`Failed to fetch atom ${atomId}: ${(e as Error).message}`);
                return null;
              }
            });

            const validAtoms = atoms.filter(atom => atom && atom.status);
            const allOnline = validAtoms.length > 0 && validAtoms.every(atom => atom?.status === 'ONLINE');
            instance.isActive = allOnline;
            instance.environmentId = envId;

            if (!environmentCache.current.has(envId)) {
              try {
                const envDetail = await boomi.environment.getEnvironment(envId);
                environmentCache.current.set(envId, envDetail);
              } catch (e) {
                logger.warn(`Failed to fetch environment ${envId}: ${(e as Error).message}`);
              }
            }

            const cachedEnv = environmentCache.current.get(envId);
            if (cachedEnv) {
              instance.environmentName = cachedEnv.name;
            }

            try {
              const processFilter = queryFilter<ProcessQueryConfig>(
                'integrationPackInstanceId',
                'EQUALS',
                [instance.id]
              );
              const processResponse = await boomi.process.queryProcess(processFilter);
              const processes = processResponse?.result || [];

              for (const process of processes) {
                if (!process.id) continue;
                instance.processId = process.id;
                const summaryFilter = nestedQueryFilter<EnvironmentMapExtensionsSummaryQueryConfig>(
                  [
                    { property: 'environmentId', operator: 'EQUALS', value: envId },
                    { property: 'extensionGroupId', operator: 'EQUALS', value: process.id }
                  ],
                  'and'
                );

                const summaryResponse = await boomi.environmentMapExtensionsSummary.queryEnvironmentMapExtensionsSummary(summaryFilter);
                const summaries = summaryResponse?.result || [];

                if (summaries.length > 0 && summaries[0].id) {
                  instance.hasMapExtension = true;
                  break;
                }
              }
            } catch (e) {
              logger.warn(`Failed to check map extensions for instance ${instance.id}: ${(e as Error).message}`);
            }
          });
        } catch (e) {
          logger.warn(`Failed to enrich instance ${instance.id}: ${(e as Error).message}`);
        }
        return instance;
      });

      setIntegrationPackInstances(enriched);
      setTotalPages(pages);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
      updateBoomiConfig(true);
    }
  }, [boomi, accountGroup, apiAuthUser, currentPage, search, updateBoomiConfig]);

  const goToPage = (page: number) => {
    if (page >= 1) setCurrentPage(page);
  };

  useEffect(() => {
    if (!hasFetchedRef.current) {
      hasFetchedRef.current = true;
      fetchIntegrationPackInstances();
    }
  }, [fetchIntegrationPackInstances]);

  useEffect(() => {
    fetchIntegrationPackInstances();
  }, [currentPage, search]);

  return {
    integrationPackInstances,
    refetch: fetchIntegrationPackInstances,
    isLoading,
    error,
    currentPage,
    totalPages,
    goToPage,
  };
};
