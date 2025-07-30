import React, { useState, useEffect } from 'react';
import { usePlugin } from '../../context/pluginContext';
import Button from '../ui/Button';

type WizardProps = {
  componentName: string;
  totalPages: number;
  numPagesToShow: number;
  showSteps?: boolean;
  activePage: number;
  labels: string[];
  wizardPages: React.JSX.Element[];
  onContinue: () => void;
  onCancel: () => void;
};

const Wizard: React.FC<WizardProps> = ({
  componentName,
  totalPages,
  showSteps = true,
  numPagesToShow,
  activePage: initialActivePage,
  labels,
  wizardPages,
  onContinue,
  onCancel
}) => {
  const { boomiConfig } = usePlugin();
  const [activePage, setActivePage] = useState(initialActivePage);

  useEffect(() => {
    setActivePage(initialActivePage);
  }, [initialActivePage]);

  const pagesToShow = wizardPages.slice(0, numPagesToShow);

  const handlePageChange = (index: number) => {
    setActivePage(index);
  };

  return (
    <div className={`justify-center bg-gray-50 p-4 rounded-lg shadow-lg gap-2 ${boomiConfig?.[componentName]?.wizard?.container || ''}`}>
      {showSteps && numPagesToShow > 1 && (
        <ul className={`relative flex flex-row gap-x-2 p-4 ${boomiConfig?.[componentName]?.wizard?.steps?.container || ''}`}>
          {Array.from({ length: numPagesToShow }).map((_, index) => (
            <li key={index} className="shrink basis-0 flex-1 group">
              <div className="min-w-7 min-h-7 w-full inline-flex items-center text-xs align-middle">
                <span
                  className={[
                    'size-7 flex justify-center items-center shrink-0 font-medium rounded-full',
                    'bg-gray-100 text-gray-800 dark:bg-neutral-700 dark:text-white',
                    activePage === index ? 'bg-gray-400 text-white' : '',
                    boomiConfig?.[componentName]?.wizard?.steps?.stepIndicatorClass || '',
                    activePage === index ? (boomiConfig?.[componentName]?.wizard?.steps?.activeStepIndicatorClass || '') : ''
                  ].join(' ')}
                >
                  {index + 1}
                </span>
                <div className={`ms-2 w-full h-px flex-1 bg-gray-500 group-last:hidden dark:bg-neutral-700 ${boomiConfig?.[componentName]?.wizard?.steps?.stepConnectorClass || ''}`}></div>
              </div>
              <div className="mt-3">
                <span className={`block text-sm font-medium text-gray-800 dark:text-white ${boomiConfig?.[componentName]?.wizard?.steps?.labelClass || ''}`}>
                  {labels[index] || `Step ${index + 1}`}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}  

      <div className="mt-4">
        {pagesToShow.map((page, index) => (
          <div
            key={index}
            className={`step-content step-${index + 1} ${activePage === index ? 'block' : 'hidden'}`}
          >
            {page}

            <div className="flex flex-row gap-4 p-2 mt-2">
              <div className="flex-1">
                <Button 
                  toggle={false}
                  primary={false} 
                  buttonClass={`${boomiConfig?.[componentName]?.wizard?.cancelButton?.class || boomiConfig?.primaryButton?.class || ""}`}
                  showIcon={boomiConfig?.[componentName]?.wizard?.cancelButton?.showIcon ?? false}
                  label={
                    activePage === 0
                      ? boomiConfig?.[componentName]?.wizard?.cancelButton?.label ?? 'Cancel'
                      : 'Back'
                  }
                  onClick={onCancel}
                />
              </div>
              <div className="justify-end">
                <Button 
                  toggle={false}
                  primary={true}
                  buttonClass={`${boomiConfig?.[componentName]?.wizard?.continueButton.class || boomiConfig?.primaryButton?.class || ""}`}
                  showIcon={boomiConfig?.[componentName]?.wizard?.continueButton.showIcon ?? false}
                  label={
                    activePage === (numPagesToShow-1)
                      ? boomiConfig?.[componentName]?.wizard?.cancelButton?.label ?? 'Save and Close'
                      : 'Next'
                  }
                  onClick={onContinue}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wizard;
