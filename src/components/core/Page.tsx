import React, { useState, useEffect } from 'react';
import Spinner from '../ui/Spinner';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import Breadcrumb from '../ui/Breadcrumb';
import { usePlugin } from '../../context/pluginContext';

const Page: React.FC<{
  isRootNavigation: boolean;
  componentName: string;
  title: React.ReactNode;
  description: string;
  error?: string;
  headerContent?: React.ReactNode;
  bodyContent?: React.ReactNode;
  footerContent?: React.ReactNode;
  levelOne?: string;
  levelTwo?: string;
  levelThree?: string;
  split?: boolean;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  callbackOne?: () => void;
  callbackTwo?: () => void;
  callbackThree?: () => void;
}> = ({
  isRootNavigation,
  componentName,
  headerContent,
  bodyContent,
  title,
  description,
  error,
  footerContent,
  levelOne,
  levelTwo,
  levelThree,
  split,
  leftContent,
  rightContent,
  callbackOne,
  callbackTwo,
  callbackThree
}) => {
  const { boomiConfig, pageIsLoading, setPageIsLoading } = usePlugin();
  const showHeader = boomiConfig?.[componentName]?.header?.show ?? true;

  useEffect(() => {
    setPageIsLoading(false);
  }, []);

  return (
    <div className={`relative w-full h-full bg-indigo-50 ${boomiConfig?.[componentName]?.container || ''}`}>
      {pageIsLoading && (
        <Spinner message='working on your request...' />
      )}
      <div>
        {!isRootNavigation && (
          <Breadcrumb
            levelOneCallback={callbackOne || (() => {})}
            levelTwoCallback={callbackTwo || (() => {})}
            levelThreeCallback={callbackThree || (() => {})}
            levelOneText={levelOne || "Back"}
            levelTwoText={levelTwo || ""}
            levelThreeText={levelThree || ""}
            componentName={componentName}
          />
        )}

        {showHeader && (
          <Header
            title={title}
            description={description}
            componentName={componentName}
          >
            {headerContent}
          </Header>
        )}

        <Body
          componentName={componentName}
          error={error}
          split={split}
          leftContent={leftContent}
          rightContent={rightContent}
        >
          {bodyContent}
        </Body>

        <Footer componentName={componentName}>
          {footerContent}
        </Footer>
      </div>
    </div>
  );
};

export default Page;
