import React from 'react';
import { usePlugin } from '../../context/pluginContext';
import { getNestedConfig } from '../../utils/config'; 

interface TableHeaderProps {
  componentName: string;
  children?: React.ReactNode;
  headerClass?: string;
}

const TableHeader: React.FC<TableHeaderProps> = ({ 
  componentName,
  children,
  headerClass
}) => {
  const { boomiConfig } = usePlugin();
  const componentConfig = getNestedConfig(boomiConfig, componentName);
  const hClass = componentConfig?.table?.header || "";
  const header = headerClass || 'bg-indigo-400 text-white'
  return (
    <thead className={`${header} ${hClass}`}>
      <tr>
        {children}
      </tr>
    </thead>
  );
};

export default TableHeader;
