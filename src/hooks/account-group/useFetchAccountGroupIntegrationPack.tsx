import { useState, useEffect, useRef } from 'react';
import { usePlugin } from '../../context/pluginContext';
import {
  AccountGroupQueryConfig,
  IntegrationPackInstanceQueryConfig,
  AccountGroupIntegrationPackQueryConfig,
  PublisherIntegrationPackBulkRequest
} from  '../../service';;
import logger from '../../logger.service';
import queryFilter, { nestedQueryFilter, bulkFilter } from '../../utils/queryFilter';

/**
 * Custom hook to fetch integration packs for a specific account group.
 * It handles loading state, error handling, and caching of results.
 * @argument {BoomiPluginContext} - Boomi plugin context is passed through the context.
 * @argument {string} accountGroup - The name of the account group to fetch integration packs set on the plugin context.
 * @argument {string} apiAuthUser - The authenticated user for API requests, set on the plugin context.
 * @argument {function} updateBoomiConfig - Function to update the Boomi configuration, set on the plugin context.
 * @argument {object} boomi - The Boomi plugin instance, set on the plugin context.
 * @returns {Object} - Contains integrationPacks, isLoading, and error state.
 * @returns {Array} integrationPacks - The list of integration packs for the specified account group.
 * @returns {boolean} isLoading - Indicates if the data is currently being fetched.
 * @returns {string|null} error - Error message if an error occurred during fetching, otherwise null.
 */
export const useFetchAccountGroupIntegrationPacks = () => {
  const [integrationPacks, setIntegrationPacks] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { updateBoomiConfig, boomi, accountGroup, apiAuthUser } = usePlugin();
  const hasFetchedRef = useRef(false);

  useEffect(() => {
    if (hasFetchedRef.current) return;
    hasFetchedRef.current = true;
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      setIntegrationPacks([]);
    
      if (!boomi || !accountGroup || !apiAuthUser) {
        const msg = "Code [1001] - Boomi Plugin or required user context is missing.";
        logger.error(msg);
        setError(msg);
        setIsLoading(false);
        return;
      }
    
      try {
        const pBoomi = updateBoomiConfig(false);
        const agFilter = queryFilter<AccountGroupQueryConfig>("name", "EQUALS", [accountGroup]);
        const agResponse = await pBoomi.accountGroup.queryAccountGroup(agFilter);
        const groupId = agResponse?.result?.[0]?.id as string;
        if (!groupId) throw new Error(`Code [1005] - AccountGroup '${accountGroup}' not found.`);
  
        const agIpFilter = queryFilter<AccountGroupIntegrationPackQueryConfig>(
          "accountGroupId",
          "EQUALS",
          [groupId]
        );
        const agIpResponse = await pBoomi.accountGroupIntegrationPack.queryAccountGroupIntegrationPack(agIpFilter);
        const agIntegrationPackIds = agIpResponse?.result?.map((aig: any) => aig.integrationPackId) || [];
        const installationTypeMap = new Map<string, string>();
        agIpResponse?.result?.forEach((aig: any) => {
          installationTypeMap.set(aig.integrationPackId, aig.installationType);
        });
    
        if (agIntegrationPackIds.length === 0) {
          throw new Error(`Code [1007] - No integration packs found for AccountGroupId[ ${groupId}]`);
        }
    
        const iFilter = bulkFilter<PublisherIntegrationPackBulkRequest>("GET", agIntegrationPackIds);
        const iResponse = await pBoomi.publisherIntegrationPack.bulkPublisherIntegrationPack(iFilter);
        const fetchedPacks = iResponse?.response
          ?.filter((r) => r.statusCode === 200 && r.Result)
          .map((r) => r.Result) || [];
    
        const instanceFilter = nestedQueryFilter<IntegrationPackInstanceQueryConfig>(
          agIntegrationPackIds.map((id) => ({
            property: "integrationPackId",
            operator: "EQUALS",
            value: id,
          })),
          "or"
        ) as IntegrationPackInstanceQueryConfig;
        const instanceResponse = await boomi.integrationPackInstance.queryIntegrationPackInstance(instanceFilter);
        const existingInstances = instanceResponse?.result || [];
        const existingInstanceIds = new Set(existingInstances.map((inst: any) => inst.integrationPackId));
    
        const filtered = fetchedPacks.filter((pack: any) => {
          const installationType = installationTypeMap.get(pack.id);
          const hasInstance = existingInstanceIds.has(pack.id);
          return !(installationType === "SINGLE" && hasInstance);
        });
    
        logger.debug("Filtered Integration Packs: ", filtered);
        setIntegrationPacks(filtered);
    
      } catch (err) {
        const msg = `Unexpected error: ${(err as Error).message}`;
        logger.error(msg);
        setError(msg);
      } finally {
        setIsLoading(false);
        updateBoomiConfig(true);
      }
    };
    
    fetchData();
  }, [boomi]);

  return { integrationPacks, isLoading, error };
};
