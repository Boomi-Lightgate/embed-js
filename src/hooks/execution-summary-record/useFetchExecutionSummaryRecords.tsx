import { useState, useCallback } from 'react';
import { usePlugin } from '../../context/pluginContext';
import {
  ExecutionRecord,
  ExecutionRecordQueryConfig
} from  '../../service';;
import queryFilter, { nestedQueryFilter } from '../../utils/queryFilter';
import logger from '../../logger.service';
import { log } from 'console';

export const useFetchExecutionRecords = () => {
  const [records, setRecords] = useState<ExecutionRecord[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { boomi, updateBoomiConfig } = usePlugin();

  const fetchRecords = useCallback(async (
    processId: string
  ) => {
    logger.debug("useFetchExecutionSummaryRecords called with:", {
      processId
    });

    setIsLoading(true);
    setError(null);
    setRecords([]);

    if (!boomi) {
      const msg = 'Code [2001] - Boomi Plugin not initialized correctly.';
      logger.error(msg);
      setError(msg);
      setIsLoading(false);
      return;
    }

    if (!processId) {
      const msg = 'Code [2002] - processId are required.';
      logger.error(msg);
      setError(msg);
      setIsLoading(false);
      return;
    }

    try {
      const rFilter = queryFilter<ExecutionRecordQueryConfig>(
        'processId',
        'EQUALS',
        [processId]
      );

      const { result: fetchedRecords = [] } = await boomi.executionRecord.queryExecutionRecord(rFilter);

      if (!fetchedRecords.length) {
        const msg = `Code [2003] - No execution records found for processId: ${processId}`;
        logger.warn(msg);
        setError(msg);
        return;
      }

      setRecords(fetchedRecords);
      logger.debug("Fetched execution summary records:", fetchedRecords);
    } catch (err: any) {
      const msg = `Unexpected error fetching execution records: ${err?.message || 'Unknown error'}`;
      logger.error(msg);
      setError(msg);
    } finally {
      setIsLoading(false);
      updateBoomiConfig(true);
    }
  }, [boomi, updateBoomiConfig]);

  return {
    records,
    isLoading,
    error,
    fetchRecords
  };
};
