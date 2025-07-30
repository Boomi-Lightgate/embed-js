import React, { useEffect, useState, useRef } from 'react';
import AjaxLoader from '../ui/AjaxLoader';
import { useCreateIntegrationPackInstance } from "../../hooks/integration-pack-instance/useCreateIntegrationPackInstance";
import { useFetchIntegrationPackInstances } from '../../hooks/integration-pack-instance/useFetchIntegrationPackIntances';
import { useDeleteIntegrationPackInstance } from '../../hooks/integration-pack-instance/useDeleteIntegrationPackInstance';
import Integration from './Integration'; 
import SearchBar from '../ui/SearchBar';
import ToastNotification from '../ui/ToastNotification';
import { EnvironmentConfig } from '../../types/environment-config';
import Page from '../core/Page';
import Table from '../ui/Table';
import Button from '../ui/Button';
import Modal from '../ui/Modal';
import Pagination from '../ui/Pagination'
import AddIntegrationForm, { AddIntegrationFormRef } from './AddIntegrationForm';
import { usePlugin } from '../../context/pluginContext';
import { RenderComponent } from '../../main';
import { AiOutlinePlus, AiOutlineTable, AiOutlineAppstore } from 'react-icons/ai';
import logger from '../../logger.service';

/**
 * Integrations component displays a list of integration packs and allows users to add, edit, and delete integrations.
 * It supports both grid and table views, search functionality, and pagination.
 *
 * @param {Object} props - The component props.
 * @param {EnvironmentConfig} props.environments - The environments configuration object containing environment details.
 */
const Integrations: React.FC<{
  /*
    * The environments configuration object containing environment details.
    * This is used to populate the environment options in the integration form.
  */
  environments: EnvironmentConfig;
  showUpdate?: boolean
}> = ({ environments, showUpdate }) => {
  const { boomiConfig, setPageIsLoading } = usePlugin();
  const [showDeleteToast, setShowDeleteToast] = useState(false);
  const [showUpdateToast, setShowUpdateToast] = useState(showUpdate || false);
  const { deleteIntegrationPackInstance } = useDeleteIntegrationPackInstance();
  const { createInstance } = useCreateIntegrationPackInstance();
  const [searchContext, setSearchContext] = useState<string>('');
  const [removedIds, setRemovedIds] = useState<Set<string>>(new Set());
  const [viewType, setViewType] = useState(() => localStorage.getItem('integrations-list-all') || 'off');
  const [isOpen, setIsOpen] = useState(false);
  const formRef = useRef<AddIntegrationFormRef>(null);
  const hasFetched = useRef(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const {
    integrationPackInstances,
    error,
    isLoading,
    refetch,
    currentPage,
    totalPages,
    goToPage,
  } = useFetchIntegrationPackInstances({ search: searchContext });

  const visibleIntegrations = integrationPackInstances.filter(
    (integration) => !removedIds.has(integration.id)
  );

  const handleSubmit = async () => {
    const result = formRef.current?.validateAndSubmit();
    if (!result) return;

    setIsOpen(false);
    setApiError(null);
    setPageIsLoading(true);
    try {
      const instance = await createInstance(
        result.integrationPack.id || '',
        false,
        result.integrationName,
        [result.environment]
      );

      if (instance?.id) {
        handleRenderEditComponent(
          result.integrationPack.id || '',
          instance.id,
          result.integrationPack.name || '',
          result.integrationName || '',
          result.integrationPack.Description || '',
          result.environment.name || '',
          result.environment.id || '',
          result.environment.isActive || false,
          result.integrationPack.installationType || 'MULTI',
          0,
          instance.hasMapExtension || false
        );
      }
    } catch (error: any) {
      setApiError(error.message || 'Failed to install integration');
      logger.error('Install error:', error);
    }
  };

  const onBack = () => {
    RenderComponent({
      component: 'Integrations',
      props: { search: searchContext },
    });
  };

  const handleRenderEditComponent = (
    id: string,
    instanceId: string,
    iName: string,
    overrideName: string,
    integrationPackDescription: string,
    environmentName: string,
    environmentId: string,
    isActive: boolean,
    installationType: string,
    index: number,
    hasMapExtension: boolean,
  ) => {
    setPageIsLoading(true);
    RenderComponent({
      component: 'ConfigureIntegration',
      props: {
        integration: {
          integrationPackId: id,
          integrationPackInstanceId: instanceId,
          integrationPackName: iName,
          integrationPackOverrideName: overrideName,
          integrationPackDescription,
          environmentName,
          environmentId,
          environmentStatus: isActive,
          installationType,
          hasMapExtension,
        },
        indexPage: index,
        onBack,
        onDelete: handleDelete,
      },
    });
  };

  const handleDelete = async (id: string) => {
    const success = await deleteIntegrationPackInstance(id);
    if (success) {
      setRemovedIds((prev) => new Set(prev).add(id));
      setShowDeleteToast(true);
      await refetch();
    }
  };

  const updateTableView = () => {
    const storedViewType = localStorage.getItem('integrations-list-all');
    if (storedViewType) setViewType(storedViewType);
  };

  const searchIntegrations = (value: string) => {
    setSearchContext(value);
  };

  useEffect(() => {
    if (!hasFetched.current) hasFetched.current = true;
    if (!localStorage.getItem('integrations-list-all') && boomiConfig?.integrations?.body?.defaultView) {
      const defaultView = boomiConfig.integrations.body.defaultView === 'grid' ? 'off' : 'on';
      setViewType(defaultView);
      localStorage.setItem('integrations-list-all', defaultView);
    }
  }, [boomiConfig?.integrations?.body?.defaultView]);

  const showSearch = boomiConfig?.integrations?.search?.show ?? true;
  const showAdd = boomiConfig?.integrations?.addButton?.show ?? true;
  const showType = boomiConfig?.integrations?.viewTypeButton?.show ?? true;

  const headerContent = (
    <>
      {showSearch && (
        <div className="flex-none pr-6 pt-4 pb-4">
          <SearchBar searchCallback={searchIntegrations} componentName="integrations" />
        </div>
      )}
      {showAdd && (
        <div className="flex-1 pr-4 pt-4">
          <Button
            toggle={false}
            primary={true}
            buttonClass={boomiConfig?.integrations?.addButton?.class || boomiConfig?.primaryButton?.class || ''}
            showIcon={boomiConfig?.integrations?.addButton?.show ?? true}
            label={boomiConfig?.integrations?.addButton?.label}
            icon={<AiOutlinePlus className={`h-5 w-5 ${boomiConfig?.integrations?.addButton?.iconClass || ''}`} />}
            onClick={() => setIsOpen(true)}
          />
        </div>
      )}
      {showType && (
        <div className="flex-none pt-4 pr-4">
          <Button
            toggle
            primary={false}
            viewLoc="integrations-list-all"
            buttonClass={boomiConfig?.integrations?.viewTypeButton?.class || boomiConfig?.primaryButton?.class || ''}
            onClass={`flex w-full justify-center rounded-md px-2 py-2 text-xs font-semibold leading-6 
              shadow-md transition-colors duration-100 bg-gray-300 text-gray-800 hover:bg-gray-400 
              hover:text-gray-200 ${boomiConfig?.integrations?.viewTypeButton?.onClass || boomiConfig?.secondaryButton?.class || ''}`}
            showIcon={boomiConfig?.integrations?.viewTypeButton?.showIcon ?? true}
            label={boomiConfig?.integrations?.viewTypeButton?.label}
            icon={<AiOutlineTable className={`h-5 w-5 ${boomiConfig?.integrations?.viewTypeButton?.iconClass || ''}`} />}
            onIcon={<AiOutlineAppstore className={`h-5 w-5 ${boomiConfig?.integrations?.viewTypeButton?.iconClass || ''}`} />}
            onClick={updateTableView}
          />
        </div>
      )}
    </>
  );

  const tableHeaderContent = (
    <>
      <th className="py-3 px-4 text-left text-sm font-semibold">Name</th>
      <th className="py-3 text-left text-sm font-semibold">Execution History</th>
      <th className="py-3 text-left text-sm font-semibold">Description</th>
      <th className="py-3 px-4 text-left text-sm font-semibold">Environment</th>
      <th className="py-3 px-4"></th>
    </>
  );

  const tableBodyContent = (
    <>
      {isLoading ? (
        <tr>
          <td colSpan={4}>
            <div className="flex justify-center items-center py-6"><AjaxLoader /></div>
          </td>
        </tr>
      ) : visibleIntegrations.length > 0 ? (
        visibleIntegrations.map((integration) => (
          <Integration
            key={integration.id}
            viewType="on"
            integration={integration}
            componentName="integrations"
            onEditClick={handleRenderEditComponent}
            onDeleteClick={handleDelete}
          />
        ))
      ) : (
        <tr>
          <td colSpan={3}>
            <div className="flex justify-center items-center py-4">
              <p className="text-gray-500 text-xs">No integrations found.</p>
            </div>
          </td>
        </tr>
      )}
    </>
  );

  const bodyContent = viewType === 'off' ? (
    <>
      <ul role="list" className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8">
        {isLoading ? (
          <div className="col-span-full flex justify-center items-center"><AjaxLoader /></div>
        ) : visibleIntegrations.length > 0 ? (
          visibleIntegrations.map((integration) => (
            <Integration
              key={integration.id}
              viewType="off"
              integration={integration}
              componentName="integrations"
              onEditClick={handleRenderEditComponent}
              onDeleteClick={handleDelete}
            />
          ))
        ) : (
          <div className="col-span-full flex justify-center items-center">
            <p className="text-gray-500 text-xs">No integrations found.</p>
          </div>
        )}
      </ul>
      {!isLoading && totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => goToPage(page)}
          />
      )}
    </>
  ) : (
    <div className="pb-36">
      <Table headerContent={tableHeaderContent} bodyContent={tableBodyContent} componentName="integrations" />
      {!isLoading && totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => goToPage(page)}
          />
      )}
    </div>
  );

  const footerContent = (
    <>

    </>
  );

  return (
    <>
      {showDeleteToast && <ToastNotification type="success" content="Integration deleted successfully!" />}
      {showUpdateToast && <ToastNotification type="success" content="Integration updated successfully!" />}
      <Modal
        isOpen={isOpen}
        title="Add Integration"
        description="Add a new integration to your environment. Note: This will not deploy the integration, it will only create the integration instance."
        onClose={() => setIsOpen(false)}
        onSubmit={handleSubmit}
        submitLabel="Create Integration"
      >
        <AddIntegrationForm ref={formRef} label="Integration" />
      </Modal>
      <Page
        isRootNavigation
        title="Integrations"
        description="View your integrations below."
        componentName="integrations"
        headerContent={headerContent}
        bodyContent={bodyContent}
        footerContent={footerContent}
      />
    </>
  );
};

export default Integrations;
