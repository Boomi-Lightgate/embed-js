import React from 'react';
import { usePlugin } from '../../context/pluginContext';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import { getNestedConfig } from '../../utils/config'; 

interface TableProps {
  componentName: string;
  headerContent?: React.ReactNode;
  bodyContent?: React.ReactNode;
  tableClass?: string;
  error?: string;
  label?: string;
  errorClass?: string;
}

const Table: React.FC<TableProps> = ({ 
  componentName,
  headerContent,
  bodyContent,
  tableClass,
  error,
  label,
  errorClass
}) => {
  const { boomiConfig } = usePlugin();
  const componentConfig = getNestedConfig(boomiConfig, componentName);
  const tClass = componentConfig?.class || '';
  const tableErrorClass = componentConfig?.table?.errorClass || 'border-2 border-red-500';
  const eClass = errorClass || 'text-red-400 bg-red-50';

  return (
    <div>
      <table className={`w-full table-auto rounded-lg shadow-sm ${tClass} ${error ? tableErrorClass : ''}`}>
        <TableHeader componentName={componentName}>
          {headerContent}
        </TableHeader>
        <TableBody componentName={componentName}>
          {bodyContent}
        </TableBody>
      </table>
      {error && (
        <p className={`p-2 text-sm ${eClass}`}>
          {label} {error}
        </p>
      )}
    </div>
  );
};

export default Table;
