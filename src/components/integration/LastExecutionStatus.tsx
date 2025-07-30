import React, { useEffect } from 'react';
import { format, subDays, isSameDay } from 'date-fns';
import { useFetchExecutionRecords } from '../../hooks/execution-summary-record/useFetchExecutionSummaryRecords';

interface Props {
  processId: string;
}


const LastExecutionStatus: React.FC<Props> = ({ processId }) => {
  const { records = [], isLoading, error, fetchRecords } = useFetchExecutionRecords();

  useEffect(() => {
    if (processId) {
      fetchRecords(processId);
    }
  }, [processId]);

  return (
    <>
      <div className="flex justify-between mb-1 text-xs text-gray-500 pl-4">
        <div>Last Execution Status:</div>
      </div>
      <div className="flex items-center w-full pl-4">  
        -
      </div>
    </>

  );
};

export default LastExecutionStatus;
