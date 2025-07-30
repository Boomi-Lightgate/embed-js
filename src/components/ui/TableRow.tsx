import React from 'react';
import { usePlugin } from '../../context/pluginContext';
import { getNestedConfig } from '../../utils/config'; 

interface TableRowProps {
  rowClass?: string;
  componentName: string;
  children?: React.ReactNode;
}

const TableRow: React.FC<TableRowProps> = ({ 
  rowClass,
  componentName,
  children
}) => {
  const { boomiConfig } = usePlugin();
  const componentConfig = getNestedConfig(boomiConfig, componentName);
  const rClass = componentConfig?.table?.row || "";
  const row = rowClass || 'odd:bg-white even:bg-gray-50 transition-transform duration-200 ease-in-out transform hover:scale-101 hover:shadow-lg'

  return (
    <tr
      className={`${row} ${rClass}`}
    >
      {children}
    </tr>
  );
};

export default TableRow;
