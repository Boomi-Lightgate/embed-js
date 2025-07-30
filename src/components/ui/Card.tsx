import React from 'react';
import CardHeader from './CardHeader'
import CardBody from './CardBody'
import CardFooter from './CardFooter';
import { usePlugin } from '../../context/pluginContext';

interface CardProps {
  uid: string;
  componentName: string;
  headerContent?: React.ReactNode;
  bodyContent?: React.ReactNode;
  footerContent?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ 
  uid,
  componentName,
  headerContent,
  bodyContent,
  footerContent
}) => {
  const { boomiConfig } = usePlugin();
  return (
    <li
      key={uid}
      className={[
        'rounded-xl',
        'border-1',
        'border-indigo-300',
        'bg-gray-50',
        'shadow-md',
        'flex',
        'flex-col',
        'justify-between',
        'transform',
        'transition-transform',
        'duration-200',
        'ease-in-out',
        'hover:scale-101',
        'hover:shadow-lg',
        'dark:bg-gray-900',
        'dark:text-gray-50',
        boomiConfig?.[componentName]?.card?.class
      ].filter(Boolean).join(' ')}>
      <CardHeader componentName={componentName}>{headerContent}</CardHeader>
      <CardBody componentName={componentName}>{bodyContent}</CardBody>
      <CardFooter componentName={componentName}>{footerContent}</CardFooter>
    </li>
  );
};

export default Card;
