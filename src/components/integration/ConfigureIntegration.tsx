import React, { useState, useRef, useEffect} from 'react';
import {
  AiOutlineApi,
  AiOutlineCalendar,
  AiOutlineNodeIndex,
  AiOutlineDelete
} from 'react-icons/ai';
import ToastNotification from '../ui/ToastNotification';
import { usePlugin } from '../../context/pluginContext';
import Button from '../ui/Button';
import BreadcrumbTwo from '../ui/BreadcrumbTwo';
import Wizard from '../ui/Wizard';
import Page from '../core/Page';
import UpdateConnections, { UpdateConnectionsRef } from './UpdateConnections';
import UpdateSchedule, { UpdateScheduleRef } from './UpdateSchedule';
import MapFields from './MapFields';
import { IntegrationPackConfig } from '../../types/integration-pack-config';
import SwalNotification from '../ui/SwalNotification';
import { RenderComponent } from '../../main';
import logger from '../../logger.service';
import { set } from 'zod/v4';

const ConfigureIntegration: React.FC<{
  integration: IntegrationPackConfig;
  indexPage?: number;
  onBack: () => void;
  onDelete: (id: string) => void;
}> = ({
  integration,
  indexPage,
  onBack,
  onDelete,
}) => {
  const { boomiConfig, setPageIsLoading } = usePlugin();
  const hasMapExtension = integration.hasMapExtension ?? false;
 logger.debug('Has Map Extensions :', hasMapExtension);

  const [currentStep, setCurrentStep] = useState(() => {
    if (indexPage !== undefined) {
      if (!hasMapExtension && indexPage === 1) return 0;
      if (!hasMapExtension && indexPage > 1) return indexPage - 1;
      return indexPage;
    }
    return 0;
  });

  const updateConnectionsRef = useRef<UpdateConnectionsRef>(null);
  const updateScheduleRef = useRef<UpdateScheduleRef>(null);
  const [showNotification, setShowNotification] = useState(false);
  const [showUpdateToast, setShowUpdateToast] = useState(false);
  const [updateMessage, setUpdateMessage] = useState('Integration updated successfully!');

  const wizardPages = [
    <UpdateConnections
      key="update-connections"
      ref={updateConnectionsRef}
      integration={integration}
      setIsLoading={setPageIsLoading}
      active={currentStep === 0}
    />,
    ...(hasMapExtension
      ? [
          <MapFields
            key="map-fields"
            integration={integration}
            setIsLoading={setPageIsLoading}
            active={currentStep === 1}
          />
        ]
      : []),
    <UpdateSchedule
      key="update-schedule"
      ref={updateScheduleRef}
      integration={integration}
      setIsLoading={setPageIsLoading}
      active={currentStep === (hasMapExtension ? 2 : 1)}
    />,
  ];

  const labels = hasMapExtension
    ? ["Make Connections", "Map Fields", "Schedule"]
    : ["Make Connections", "Schedule"];

  const totalPages = wizardPages.length;

  const handleContinue = async () => {
    if (currentStep === 0) {
      const isValid = await updateConnectionsRef.current?.submit?.();
      if (!isValid) return;
      setCurrentStep((prev) => prev + 1);
      setUpdateMessage('Connections updated successfully!');
      setShowUpdateToast(true);
      return;
    }

    if (hasMapExtension && currentStep === 1) {
      setCurrentStep(2);
      setUpdateMessage('Mappings updated successfully!');
      setShowUpdateToast(true);
      return;
    }

    if ((!hasMapExtension && currentStep === 1) || (hasMapExtension && currentStep === 2)) {
      const isValid = await updateScheduleRef.current?.submit?.();
      if (!isValid) return;
      RenderComponent({
        component: 'Integrations',
        props: { showUpdate: true },
      });
    }
  };

  const handleCancel = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    } else {
      onBack();
    }
  };

  const handleDeleteClick = () => {
    onDelete(integration.integrationPackInstanceId);
    RenderComponent({
      component: 'Integrations',
      props: { showDelete: true },
    });
  };

  const handleConfirm = () => {
    setShowNotification(false);
    handleDeleteClick();
  };

  const handleDelete = () => {
    setShowNotification(true);
  };

  useEffect(() => {
    if (currentStep === 0) {
      setShowUpdateToast(false);
      updateConnectionsRef.current?.load?.();
    }
  }, [currentStep]);

  const headerContent = (
    <>
      <div className="flex-1">
        <div className="absolute top-2 right-0 mt-auto flex justify-end pr-4">
          <Button 
            toggle={false}
            primary={true}
            buttonClass={`bg-red-400 border border-red-500 hover:bg-red-500 ${
              boomiConfig?.integrations?.editButton?.class || boomiConfig?.primaryButton?.class || ""
            }`}
            showIcon={boomiConfig?.integrations?.integration?.editButton?.showIcon ?? true}
            label={boomiConfig?.integrations?.integration?.editButton?.label ?? 'Delete Integration'}
            icon={<AiOutlineDelete className="w-6 h-6" />}
            onClick={handleDelete}
          />
        </div>
      </div>
    </>
  );

  const bodyContent = (
    <>
      <div className="flex flex-row items-center justify-between">
        <div className="w-full flex justify-center pb-4">
          <BreadcrumbTwo
            componentName="configureIntegration"
            activeLevel={(currentStep + 1) as 1 | 2 | 3 | 4}
            levelOneCallback={() => setCurrentStep(0)}
            levelTwoCallback={() => hasMapExtension ? setCurrentStep(1) : setCurrentStep(1)}
            levelThreeCallback={() => hasMapExtension ? setCurrentStep(2) : setCurrentStep(1)}
            levelOneIcon={<AiOutlineApi className="size-5 shrink-0" />}
            levelTwoIcon={hasMapExtension ? <AiOutlineNodeIndex className="size-5 shrink-0" /> : <AiOutlineCalendar className="size-5 shrink-0" />}
            levelThreeIcon={hasMapExtension ? <AiOutlineCalendar className="size-5 shrink-0" /> : undefined}
            levelOneText="Make Connections"
            levelTwoText={hasMapExtension ? "Map Fields" : "Set Schedule"}
            levelThreeText={hasMapExtension ? "Set Schedule" : undefined}
          />
        </div>
      </div>
      <Wizard
        componentName="configureIntegration"
        totalPages={totalPages}
        showSteps={false}
        numPagesToShow={3}
        activePage={currentStep}
        labels={labels}
        wizardPages={wizardPages}
        onContinue={handleContinue}
        onCancel={handleCancel}
      />
    </>
  );

  return (
    <>
      {showUpdateToast && <ToastNotification type="success" content={updateMessage} />}
      {showNotification && (
        <SwalNotification
          type="warning"
          title="Are you sure?"
          description="This action cannot be undone."
          showCancel={true}
          confirmButtonText="Yes, delete it!"
          cancelButtonText="No, cancel"
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
      <Page
        isRootNavigation={false}
        componentName="configureIntegration"
        title={`Configure - ${integration.integrationPackOverrideName}`}
        description={integration.integrationPackDescription || ''}
        split={false}
        headerContent={headerContent}
        bodyContent={bodyContent}
        footerContent={<></>}
        levelOne="My Integrations"
        callbackOne={onBack}
      />
    </>
  );
};

export default ConfigureIntegration;

