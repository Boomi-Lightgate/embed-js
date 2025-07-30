import React from 'react';
import DOMPurify from 'dompurify';
import { usePlugin } from '../../context/pluginContext';

const Header: React.FC<{
  componentName: string;
  title?: React.ReactNode;
  description?: string;
  children?: React.ReactNode;
}> = ({
  componentName,
  title,
  description,
  children
}) => {
  const { boomiConfig } = usePlugin();
  return (
    <div className={`pt-6 pb-2 sm:flex sm:items-center text-left border-b-2 border-gray-300 shadow-md bg-white ${boomiConfig?.[componentName]?.header?.class ?? ""}`}>
      <div className="sm:flex-auto pl-8 pb-3">
        <h1 className={`text-3xl leading-6 pb-2 ${boomiConfig?.[componentName]?.header?.titleClass ?? ""}`}>{title}</h1>
        <p
          className={`text-sm ${boomiConfig?.[componentName]?.header?.descriptionClass || ""}`}
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description ?? '') }}
        />
        <div>
          {children && <div className={`flex ${boomiConfig?.[componentName]?.header?.container ?? ""}`}>{children}</div>}
        </div>
      </div>
    </div>
  );
};

export default Header;
