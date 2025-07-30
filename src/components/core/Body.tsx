import React from 'react';
import Notification from '../ui/Notification';
import { usePlugin } from '../../context/pluginContext';

const Body: React.FC<{
  componentName: string;
  error?: string;
  split?: boolean;
  children?: React.ReactNode;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
}> = ({
  componentName,
  error,
  split,
  children,
  leftContent,
  rightContent,
}) => {
  const { boomiConfig } = usePlugin();

  const baseClasses = `w-full min-h-full p-4 pl-8 pb-92 ${
    boomiConfig?.[componentName]?.body?.class ?? ''
  }`;

  if (error) {
    return (
      <div className={baseClasses}>
        <Notification type="Error" message={error} />
      </div>
    );
  }

if (split) {
  return (
    <div className={`${baseClasses}`}>
      <div className="flex flex-col lg:flex-row gap-4 w-full">
        <div className="flex-grow min-w-0">{leftContent}</div>
        <div className="w-full lg:w-[400px] flex-shrink-0 rounded-md shadow-lg p-4 bg-gray-300">
          {rightContent}
        </div>
      </div>
    </div>
  );
}

  return <div className={baseClasses}>{children}</div>;
};

export default Body;
