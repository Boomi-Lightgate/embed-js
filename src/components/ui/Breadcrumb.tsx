import React from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { usePlugin } from '../../context/pluginContext';

// Type for this component
type BreadcrumbProps = {
  componentName: string;
  levelOneCallback: () => void;
  levelTwoCallback?: () => void;
  levelThreeCallback?: () => void;
  levelOneText: string;
  levelTwoText?: string | null;
  levelThreeText?: string | null;
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  componentName,
  levelOneCallback,
  levelOneText,
  levelTwoCallback,
  levelTwoText,
  levelThreeCallback,
  levelThreeText
}) => {
  const { boomiConfig } = usePlugin();
  return (
    <div className={`pl-4 bg-gray-50 pt-2 text-sm ${boomiConfig?.[componentName]?.breadcrumb?.container || ""}`}>
      <nav aria-label="Breadcrumb" className={`flex`} role="navigation">
        <ol className={`list-none p-0 inline-flex items-center ${boomiConfig?.[componentName]?.breadcrumb?.class || ""}`}>
          <li className="flex items-center">
            <button
              onClick={levelOneCallback}
              className={`flex items-center text-gray-600 
                          hover:text-gray-400 no-underline ${boomiConfig?.[componentName]?.breadcrumb?.linkClass || ""}`}
            >
              <FaChevronLeft className={`mr-2 ${boomiConfig?.[componentName]?.breadcrumb?.iconClass || ""}`} />
              {levelOneText}
            </button>
          </li>
          {levelTwoText && (
            <li className="flex items-center">
              <button
                onClick={levelTwoCallback}
                className={`flex items-center text-gray-600 
                            hover:text-gray-400 no-underline ${boomiConfig?.[componentName]?.breadcrumb?.linkClass || ""}`}
              >
                <FaChevronLeft className={`mr-2 ml-2 ${boomiConfig?.[componentName]?.breadcrumb?.iconClass || ""}`} />
                {levelTwoText}
              </button>
            </li>
          )}
          {levelThreeText && (
            <li className="flex items-center">
              <button
                onClick={levelThreeCallback}
                className={`flex items-center text-gray-600 
                            hover:text-gray-400 no-underline ${boomiConfig?.[componentName]?.breadcrumb?.linkClass || ""}`}
              >
                <FaChevronLeft className={`mr-2 ml-2 ${boomiConfig?.[componentName]?.breadcrumb?.iconClass || ""}`} />
                {levelThreeText}
              </button>
            </li>
          )}
        </ol>
      </nav>
    </div>
  );
}

export default Breadcrumb;
