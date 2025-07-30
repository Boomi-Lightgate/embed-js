import { useState, useEffect } from 'react';
import { usePlugin } from '../../context/pluginContext';
import { AccountGroupQueryConfig } from '../../service';
import queryFilter from '../../utils/queryFilter';
import logger from '../../logger.service';

export const useFetchAccountGroup = () => {
  const [accountGroupId, setAccountGroupId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { boomi, accountGroup } = usePlugin();

  useEffect(() => {
    const fetchAccountGroup = async () => {
      setIsLoading(true);
      setError(null);

      if (!boomi) {
        const msg = "Code [1001] - Boomi Plugin not initialized correctly.";
        setIsLoading(false);
        return;
      }

      if (!accountGroup) {
        const msg = "Code [1001] - Account group was not provided.";
        setIsLoading(false);
        return;
      }
      logger.debug("name", name);

      try {
        const filter = queryFilter<AccountGroupQueryConfig>("name", "EQUALS", [accountGroup]);
        logger.debug("Account group filter", filter);
        const response = await boomi.accountGroup.queryAccountGroup(filter);
        if (response && response.result && response.result.length > 0) {
            logger.debug("Account Group Response", response);
            const groupId = response.result[0].id as string; 
            logger.debug("Account Group ID", groupId);
            setAccountGroupId(groupId);
        }
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAccountGroup();
  }, [boomi]);

  return { accountGroupId, isLoading, error };
};
