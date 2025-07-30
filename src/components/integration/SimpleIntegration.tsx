import React, { useState, useEffect } from "react";
import AjaxLoader from '../ui/AjaxLoader';
import { useCreateIntegrationPackInstance } from "../../hooks/integration-pack-instance/useCreateIntegrationPackInstance";
import { useFetchEnvironmentExtensions } from "../../hooks/environment-extensions/useFetchEnvironmentExtensions";
import { EnvironmentConfig} from '../../types/environment-config'; 
import { ScheduleConfig } from '../../types/schedule-config';
import ConnectorForm from "./ConnectorForm";
import { usePlugin } from '../../context/pluginContext';
import logger from '../../logger.service';

type SimpleIntegrationProps = {
  integrationPackId: string;
  integrationPackInstanceId: string;
  installName: string;
  processName?: string;
  environments: EnvironmentConfig;
  schedules: ScheduleConfig;
  onSuccess: (message: string) => void;
  onFailure: (error: Error | string) => void;
  onCancel: () => void;
};

const NewIntegration: React.FC<SimpleIntegrationProps> = ({
  integrationPackId,
  integrationPackInstanceId,
  installName,
  processName,
  onSuccess,
  onFailure,
  onCancel,
  environments,
  schedules,
}) => {
  const { boomiConfig } = usePlugin();
  const { integrationPackInstance, isLoading, error, createInstance } = useCreateIntegrationPackInstance();
  const [hasInitialized, setHasInitialized] = useState(false);
  const { extensions, isLoading: isExtensionsLoading, error: extensionsError, fetchEnvironmentExtensions } =
    useFetchEnvironmentExtensions();

  useEffect(() => {
    if (!environments?.installEnvironments || environments.installEnvironments.length === 0) {
      const msg = `Code [2001] - No install environments found.`;
      logger.error(msg);
      onFailure(new Error(msg));
      return;
    }
  
    if (!environments?.allowSelectEnvironment && environments.installEnvironments.length === 0) {
      const msg = `Code [2002] - Must specify install environments if user cannot select environment.`;
      logger.error(msg);
      onFailure(new Error(msg));
      return;
    }
  
    const init = async () => {
      try {
        const instance = await createInstance(
          integrationPackId,
          false,
          installName,
          environments.installEnvironments
        );
        if (!instance) {
          throw new Error(`Code [2003] - Failed to create integration pack instance.`);
        }
        logger.debug("Integration Pack Instance Created:", instance);
  
        await fetchEnvironmentExtensions(environments?.installEnvironments || [], '', instance?.id || '');
        setHasInitialized(true); 
      } catch (err) {
        logger.error("Failed during integration pack creation", err);
        onFailure(err as Error);
      }
    };
    if (!hasInitialized) {
      init();
    }
  }, [
    environments?.installEnvironments, 
    environments?.allowSelectEnvironment,
    createInstance,             
    integrationPackId,               
    installName,                        
    onFailure,                        
    fetchEnvironmentExtensions         
  ]);

  const handleContinue = async () => {
    // future submit logic
  };

  const isBusy = isLoading || isExtensionsLoading;

  return (
    <>
      {isBusy ? (
        <div className="flex justify-center items-center h-64">
          <AjaxLoader />
        </div>
      ) : (
        <div className="p-4 gap-2">
          <ConnectorForm
            extensions={extensions || []}
          />
        </div>
      )}
    </>
  );
};

export default NewIntegration;
