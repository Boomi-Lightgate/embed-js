import React from 'react';
import { usePlugin } from '../../context/pluginContext';

interface CardFooterProps {
  componentName: string;
  children?: React.ReactNode;
}

const CardFooter: React.FC<CardFooterProps> = ({ 
  componentName,
  children
}) => {
  const { boomiConfig } = usePlugin();
  return (
    <div className={`flex gap-2 p-2 justify-end ${boomiConfig?.[componentName]?.card?.footer || ''}`}>
      {children}
    </div>
  );
};

export default CardFooter;