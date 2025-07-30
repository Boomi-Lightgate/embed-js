import React from 'react';
import { usePlugin } from '../../context/pluginContext';

interface CardHeaderProps {
  componentName: string;
  children?: React.ReactNode;
}

const CardHeader: React.FC<CardHeaderProps> = ({ 
  componentName,
  children
}) => {
  const { boomiConfig } = usePlugin();

  return (
    <>
      <div className={`flex items-center pt-4 ${boomiConfig?.[componentName]?.card?.header || ''}`}>
        {children}
      </div>
    </>
  );
};

export default CardHeader;