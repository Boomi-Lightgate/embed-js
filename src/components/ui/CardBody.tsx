import React from 'react';
import { usePlugin } from '../../context/pluginContext';

interface CardBodyProps {
  componentName: string;
  children?: React.ReactNode;
}

const CardBody: React.FC<CardBodyProps> = ({ 
  componentName,
  children
}) => {
  const { boomiConfig } = usePlugin();
  return (
    <div className={`flex gap-4 p-4 ${boomiConfig?.[componentName]?.card?.body || ''}`}>
      {children}
    </div>
  );
};

export default CardBody;
