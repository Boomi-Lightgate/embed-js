import React, { useState, forwardRef, useImperativeHandle, useEffect } from "react";
import { usePlugin } from "../context/pluginContext";
import logger from "../logger.service";
import '../compiled.css';

type ComponentProps = {
  [key: string]: any;
};

interface RootProps {
  initialComponent?: React.ComponentType<ComponentProps>;
  initialProps?: ComponentProps; 
}

export interface RootRef {
  updateComponent: (component: React.ComponentType<ComponentProps>, props: ComponentProps) => void;
}

const Root = forwardRef<RootRef, RootProps>(({ initialComponent, initialProps }, ref) => {
  const { isReady, boomiConfig } = usePlugin();
  const [CurrentComponent, setCurrentComponent] = useState<React.ComponentType<ComponentProps> | null>(initialComponent || null);
  const [currentProps, setCurrentProps] = useState<ComponentProps>(initialProps || {});
  const [key, setKey] = useState(0);

  const updateComponent = (component: React.ComponentType<ComponentProps>, props: ComponentProps) => {
    logger.debug('Root updateComponent called with props:', props);
    setCurrentComponent(() => component);
    setCurrentProps(props);
    setKey(prev => prev + 1);
  };

  useImperativeHandle(ref, () => ({
    updateComponent,
  }));

  if (!isReady) {
    return <p>Loading plugin...</p>; 
  }

  return (
    <>
      <div className={`boomi-plugin-root bg-indigo-50 dark:bg-gray-900 dark:text-gray-50 boomi:bg-gray-50 boomi:text-gray-500 font-[Apple Color Emoji] min-h-screen ${boomiConfig?.font ?? ''} ${boomiConfig?.container?.class ?? ''}`}>
        {CurrentComponent ? (
          <CurrentComponent key={key} {...currentProps} />
        ) : (
          <></>
        )}
      </div>
    </>
  );
});

export default Root;
