import React, { useEffect } from 'react';
import { format, subDays, isSameDay } from 'date-fns';
import classNames from 'classnames';
import { useFetchExecutionRecords } from '../../hooks/execution-summary-record/useFetchExecutionSummaryRecords';

interface Props {
  processId: string;
  showHeader?: boolean;
  showFooter?: boolean;
}

const getColorForStatus = (status: string): string => {
  switch (status) {
    case 'COMPLETE':
      return 'bg-green-500';
    case 'COMPLETE_WARN':
      return 'bg-yellow-400';
    case 'ERROR':
      return 'bg-red-500';
    default:
      return 'bg-gray-300';
  }
};

const ExecutionTimeline: React.FC<Props> = ({ processId, showHeader, showFooter }) => {
  const { records = [], isLoading, error, fetchRecords } = useFetchExecutionRecords();

  useEffect(() => {
    if (processId) {
      fetchRecords(processId);
    }
  }, [processId]);

  const last30Days: Date[] = Array.from({ length: 30 }, (_, i) =>
    subDays(new Date(), 29 - i)
  );

  const getStatusForDate = (
    date: Date
  ): { status: string; timeBlock: string } | null => {
    if (!records || records.length === 0 || error) return null;
    for (const record of records) {
      if (!record.executionTime || !record.status) continue;
      const blockDate = new Date(record.executionTime);
      if (isSameDay(blockDate, date)) {
        return { status: record.status, timeBlock: record.executionTime };
      }
    }
    return null;
  };

  return (
    <>
      {showHeader && (
        <div className="flex justify-between mb-1 text-xs text-gray-500">
          <div>Execution History</div>
        </div>
      )}
      <div className="flex items-center w-full">
        {last30Days.map((date) => {
          const match = getStatusForDate(date);
          const colorClass = getColorForStatus(match?.status ?? '');
          return (
            <div
              key={format(date, 'yyyy-MM-dd')}
              className="relative group flex flex-col items-center flex-grow flex-shrink-0 basis-0"
            >
              <div className={classNames('w-2 h-6 rounded-sm', colorClass)} />
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-black text-white text-xs px-2 py-1 rounded shadow-md z-10 whitespace-nowrap max-w-xs break-words text-center">
                {match
                  ? format(new Date(match.timeBlock), 'dd MMM yyyy')
                  : `${format(date, 'dd MMM yyyy')}\nNo Records.`}
              </div>
            </div>
          );
        })}
      </div>
      {showFooter && (
        <div className="flex justify-between mt-1 text-xs text-gray-500">
          <div>30 days ago</div>
          <div className="text-right">Today</div>
        </div>
      )}
    </>

  );
};

export default ExecutionTimeline;
