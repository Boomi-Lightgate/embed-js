import React from 'react';
import { usePlugin } from '../../context/pluginContext';
import { getNestedConfig } from '../../utils/config'; 

interface TableBodyProps {
  componentName: string;
  children?: React.ReactNode;
  bodyClass?: string
}

const TableBody: React.FC<TableBodyProps> = ({ 
  componentName,
  children,
  bodyClass
}) => {
  const { boomiConfig } = usePlugin();
  const componentConfig = getNestedConfig(boomiConfig, componentName);
  const bClass = componentConfig?.table?.body || "";
  const body = bodyClass || 'divide-y divide-gray-100 text-gray-500'
  return (
    <tbody className={`${body} ${bClass}`}>
      {children}
    </tbody>
  );
};

export default TableBody;
