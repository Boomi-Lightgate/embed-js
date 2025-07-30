import React, { ReactNode } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { usePlugin } from '../../context/pluginContext';

type BreadcrumbTwoProps = {
  componentName: string;
  activeLevel?: 1 | 2 | 3 | 4;
  levelOneCallback: () => void;
  levelTwoCallback?: () => void;
  levelThreeCallback?: () => void;
  levelFourCallback?: () => void;
  levelOneIcon: ReactNode;
  levelTwoIcon?: ReactNode | null;
  levelThreeIcon?: ReactNode | null;
  levelFourIcon?: ReactNode | null;
  levelOneText: string;
  levelTwoText?: string | null;
  levelThreeText?: string | null;
  levelFourText?: string | null;
};

const BreadcrumbTwo: React.FC<BreadcrumbTwoProps> = ({
  componentName,
  activeLevel = 4,
  levelOneCallback,
  levelTwoCallback,
  levelThreeCallback,
  levelFourCallback,
  levelOneIcon,
  levelTwoIcon,
  levelThreeIcon,
  levelFourIcon,
  levelOneText,
  levelTwoText,
  levelThreeText,
  levelFourText
}) => {
  const { boomiConfig } = usePlugin();

  const renderBreadcrumbItem = (
    icon: ReactNode,
    text: string,
    onClick?: () => void,
    isActive: boolean = false
  ) => (
    <li className="flex items-center space-x-2">
      <FaChevronRight className="text-gray-300 shrink-0" />
      <button
        onClick={onClick}
        className={`flex items-center text-sm font-medium ${
          isActive
            ? `text-gray-700 ${boomiConfig?.[componentName]?.breadcrumb?.activeClass || ''}`
            : `text-gray-400 ${boomiConfig?.[componentName]?.breadcrumb?.class || ''}`
        }`}
        aria-current={isActive ? 'page' : undefined}
        disabled={!onClick}
      >
        {icon && <span className="mr-1">{icon}</span>}
        <span className="truncate">{text}</span>
      </button>
    </li>
  );

  return (
    <div
      className={`pt-2 text-sm rounded-lg max-w-max mx-auto ${
        boomiConfig?.[componentName]?.breadcrumb?.container || ''
      }`}
    >
      <nav aria-label="Breadcrumb" role="navigation">
        <ol
          className={`inline-flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-6 bg-gray-50 p-2 shadow rounded-md ${
            boomiConfig?.[componentName]?.breadcrumb?.class || ''
          }`}
        >
          {/* Level 1 */}
          <li className="flex items-center space-x-2">
            <button
              onClick={levelOneCallback}
              className={`flex items-center text-sm font-medium ${
                activeLevel === 1
                  ? `text-gray-700 ${boomiConfig?.[componentName]?.breadcrumb?.activeClass || ''}`
                  : `text-gray-400 ${boomiConfig?.[componentName]?.breadcrumb?.class || ''}`
              }`}
              aria-current={activeLevel === 1 ? 'page' : undefined}
            >
              {levelOneIcon && <span className="mr-1">{levelOneIcon}</span>}
              <span className="truncate">{levelOneText}</span>
            </button>
          </li>

          {/* Levels 2–4 */}
          {levelTwoText &&
            renderBreadcrumbItem(levelTwoIcon, levelTwoText, levelTwoCallback, activeLevel === 2)}
          {levelThreeText &&
            renderBreadcrumbItem(levelThreeIcon, levelThreeText, levelThreeCallback, activeLevel === 3)}
          {levelFourText &&
            renderBreadcrumbItem(levelFourIcon, levelFourText, levelFourCallback, activeLevel === 4)}
        </ol>
      </nav>
    </div>
  );
};

export default BreadcrumbTwo;
