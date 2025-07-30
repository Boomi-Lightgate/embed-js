import React, {
  useEffect,
  useState,
  useRef,
  forwardRef,
  useImperativeHandle
} from "react";
import AjaxLoader from '../ui/AjaxLoader';
import { useUpdateEnvironmentExtensions } from "../../hooks/environment-extensions/useUpdateEnvironmentExtensions";
import { useFetchEnvironmentExtensions } from "../../hooks/environment-extensions/useFetchEnvironmentExtensions";
import ConnectorForm, { ConnectorFormRef } from './ConnectorForm';
import { IntegrationPackConfig } from '../../types/integration-pack-config';
import { usePlugin } from '../../context/pluginContext';
import logger from '../../logger.service';

export type UpdateConnectionsRef = {
  submit: () => Promise<boolean>;
  load: () => void;
};

const UpdateConnections = forwardRef<UpdateConnectionsRef, {
  integration: IntegrationPackConfig;
  active: boolean;
  onSubmit?: () => void;
  setIsLoading?: (val: boolean) => void;
}>(({
  integration,
  active,
  onSubmit,
  setIsLoading,
}, ref) => {
  const { boomiConfig } = usePlugin();
  const connectorFormRef = useRef<ConnectorFormRef>(null);
  const { updateEnvironmentExtensions } = useUpdateEnvironmentExtensions();
  const { extensions, isLoading, fetchEnvironmentExtensions } = useFetchEnvironmentExtensions();
  const [apiError, setApiError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      logger.debug("Fetching environment extensions...", [], integration.environmentId, integration.integrationPackInstanceId);
      await fetchEnvironmentExtensions([], integration.environmentId, integration.integrationPackInstanceId);
    } catch (err) {
      setApiError("Failed to fetch connection information.");
      logger.error("Failed to fetch environment extensions", err);
    }
  };

  // Fetch when active
  useEffect(() => {
    if (active) {
      fetchData();
    }
  }, [active]);

  useImperativeHandle(ref, () => ({
    submit: async () => {
      setApiError(null);
      try {
        const payload = connectorFormRef.current?.validateAndSubmit();
        if (!payload || !integration.environmentId) {
          logger.warn("Connector form is invalid or missing environmentId");
          return false;
        }

        setIsLoading?.(true);
        for (const ext of payload) {
          const extensionGroupId = ext.extensionGroupId || '';
          await updateEnvironmentExtensions(ext, integration.environmentId, extensionGroupId);
        }
        setIsLoading?.(false);
        onSubmit?.();
        return true;
      } catch (error: any) {
        setIsLoading?.(false);
        setApiError(error.message || 'Failed to update environment extensions');
        logger.error('Update error:', error);
        return false;
      }
    },
    load: fetchData,
  }));

  return (
    <div className="mt-4">
      <div className="text-gray-700 text-lg font-bold pb-1 pl-2">
        {boomiConfig?.setSchedule?.body?.title || "Update Connections"}
      </div>
      <div className="text-gray-700 text-sm mb-4 pl-2">
        {boomiConfig?.setSchedule?.body?.description || "Please provide the necessary information to make connections to your target systems."}
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center pt-6 m-6">
          <AjaxLoader message="Retrieving Connection Information..." />
        </div>
      ) : apiError ? (
        <div className="text-red-600 text-sm text-center px-4 py-2 bg-red-100 border border-red-300 rounded">
          {apiError}
        </div>
      ) : (
        <div className="flex flex-row items-center justify-between">
          <div className="flex-1 items-center">
            <ConnectorForm
              ref={connectorFormRef}
              extensions={extensions || []}
            />
          </div>
        </div>
      )}
    </div>
  );
});

UpdateConnections.displayName = 'UpdateConnections';
export default UpdateConnections;
