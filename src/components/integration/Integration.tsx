import React, { useState, useCallback } from 'react';
import { AiOutlineDeploymentUnit, AiOutlineEdit} from "react-icons/ai";
import { usePlugin } from '../../context/pluginContext';
import IntegrationActions from './IntegrationActions';
import EnvironmentName from './EnvironmentName';
import Card from '../ui/Card';
import Button from '../ui/Button';
import TableRow from '../ui/TableRow';
import ExecutionTimeline from './ExecutionTimeline';
import SwalNotification from '../ui/SwalNotification';

const Integration: React.FC<{
  integration: {
    id: string;
    processId: string;
    integrationPackId: string;
    integrationPackOverrideName: string;
    description: string;
    installationType: string;
    environmentName: string;
    environmentId: string;
    environmentStatus: boolean;
    name: string;
    isActive: boolean;
    hasMapExtension: boolean;
  };
  viewType: 'on' | 'off';
  componentName: string;
  onEditClick: (
    integrationPackId: string,
    id: string,
    name: string,
    overrideName: string,
    description: string,
    environmentName: string,
    environmentId: string,
    environmentStatus: boolean,
    installationType: string,
    indexPage: number,
    hasMapExtension: boolean
  ) => void;
  onDeleteClick: (id: string) => void;
}> = ({
  integration,
  viewType,
  componentName,
  onEditClick,
  onDeleteClick,
}) => {
  const { boomiConfig } = usePlugin();
  const [showNotification, setShowNotification] = useState(false);
  const showIcon = boomiConfig?.integrations?.integration?.showIcon ?? true;
  const type = integration.installationType === 'SINGLE' ? 'Single Install Integration'  : 'Integration';
  const showEdit = integration.installationType === 'SINGLE' ? false  : true;
  const showDelete = true;
  const title = integration.installationType === 'SINGLE' ? integration.name  : integration.integrationPackOverrideName;
  
  const handleEditClick = (index: number) => {
    onEditClick(
      integration.integrationPackId, 
      integration.id, 
      integration.name, 
      integration.integrationPackOverrideName,
      integration.description, 
      integration.environmentName, 
      integration.environmentId,
      integration.isActive,
      integration.installationType,
      index,
      integration.hasMapExtension); 
  };

  const handleDeleteClick = () => {
    onDeleteClick(integration.id); 
  };

  const handleConfirm = () => {
    setShowNotification(false);
    handleDeleteClick();
  };

  const handleDelete = () => {
    setShowNotification(true);
  };

  const handleCancel = () => {
    setShowNotification(false);
  };

  const handleRunNow = useCallback(() => {

  }, []);

  const handleEditSchedule = useCallback(() => {
    handleEditClick(2);
  }, []);

  const handleEditConnections = useCallback(() => {
    handleEditClick(0);
  }, []);

  const handleEditMap = useCallback(() => {
    handleEditClick(1);
  }, []);

  const headerContent = (
    <>
      <div className="flex-1 pl-4">
        <div className="text-sm text-gray-700">{type}</div>
      </div>
      <div className="flex-0 justify-end pr-4">
        <EnvironmentName
          componentName='integration'
          environmentName={integration.environmentName}
          environmentStatus={integration.isActive}
        />
      </div>
    </>
  );
  
  const bodyContent = (
    <>
      {showIcon && (
        <AiOutlineDeploymentUnit
          className={`h-8 w-8 text-indigo-400 ${boomiConfig?.integrations?.integration?.icon || ''}`}
          aria-hidden="true"
        />
      )}   
      <div className="flex flex-col flex-grow">
        <h3 className={`text-xl font-semibold text-gray-500 
          break-words ${boomiConfig?.integrations?.integration?.title || ''}`}>{title}</h3>
          <p>
            <span className={`text-xs text-gray-600 mt-2 line-clamp-2 
              ${boomiConfig?.integrations?.integration?.description || ''}`}>
              {integration.description}
            </span>
          </p>
      </div>
    </>
  );

  const footerContent = (
    <div className="flex gap-2 items-center w-full">
      <div className="flex-1 min-w-0">
        <ExecutionTimeline processId={integration.processId} showHeader={true} showFooter={true} />
      </div>

      {(showEdit || boomiConfig?.integrations?.integration?.showEdit) && (
        <div className="flex-shrink-0">
          <Button 
            toggle={false}
            primary={false}
            buttonClass={`z-10 ${boomiConfig?.integrations?.editButton?.class || boomiConfig?.primaryButton?.class || ""}`}
            showIcon={boomiConfig?.integrations?.integration?.editButton?.showIcon ?? true}
            label={boomiConfig?.integrations?.integration?.editButton?.label ?? undefined}
            icon={<AiOutlineEdit className="text-indigo-400 hover:text-indigo-500 w-6 h-6" />}
            iconOnly={true}
            onClick={() => handleEditClick(0)}
          />
        </div>
      )}

      <div className="flex-shrink-0">
        <IntegrationActions
          onRunNow={handleRunNow}
          onEditSchedule={handleEditSchedule}
          onEditConnections={handleEditConnections}
          onEditMap={handleEditMap}
          onDeleteIntegration={handleDelete}
          showMap={integration.hasMapExtension || false}
        />
      </div>
    </div>
  );

  return (
    <>
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
      {viewType === 'off' ? (
        <Card
          uid={integration.id}
          componentName="integration"
          headerContent={headerContent}
          bodyContent={bodyContent}
          footerContent={footerContent}
        />
      ) : viewType === 'on' ? (
        <TableRow key={integration.id} componentName={componentName}>
          <td className="py-4 pl-4 pr-3 text-xs sm:pl-2 max-w-sm break-words">
            {title}
          </td>
          <td className="py-4">
            <ExecutionTimeline processId={integration.processId} showFooter={false} showHeader={false} />
          </td>
          <td className="py-4 pl-4 pr-3 text-xs sm:pl-2 max-w-sm break-words">
            {integration.description}
          </td>
          <td className="py-4 pl-4 pr-3 text-xs sm:pl-2 max-w-sm break-words">
            <EnvironmentName
              componentName='integration'
              environmentName={integration.environmentName}
              environmentStatus={integration.isActive}
            />
          </td>
          <td className="flex px-4 pt-4 items-right text-right justify-end">
            <div>
              <IntegrationActions
                onRunNow={handleRunNow}
                onEditSchedule={handleEditSchedule}
                onEditConnections={handleEditConnections}
                onEditMap={handleEditMap}
                onDeleteIntegration={handleDelete}
                showMap={integration.hasMapExtension || false}
              />
            </div>
          </td>
        </TableRow>
      ) : null}
    </>
  );
};

export default Integration;
