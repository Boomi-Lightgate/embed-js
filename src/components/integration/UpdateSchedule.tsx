import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from 'react';
import AjaxLoader from '../ui/AjaxLoader';
import ScheduleForm, { ScheduleFormRef } from './ScheduleForm';
import { usePlugin } from '../../context/pluginContext';
import { useFetchProcessSchedules } from '../../hooks/process-schedule/useFetchProcessSchedules';
import { useUpdateProcessSchedules } from '../../hooks/process-schedule/useUpdateProcessSchedules';
import { IntegrationPackConfig } from '../../types/integration-pack-config';
import logger from '../../logger.service';
import { set } from 'zod/v4';

export type UpdateScheduleRef = {
  submit: () => Promise<boolean>;
};

type Props = {
  integration: IntegrationPackConfig;
  setIsLoading?: (val: boolean) => void;
  onSubmit?: () => void;
  active: boolean;
};

const UpdateSchedule = forwardRef<UpdateScheduleRef, Props>(({
  integration,
  setIsLoading,
  onSubmit,
  active,
}, ref) => {
  const { setPageIsLoading, boomiConfig } = usePlugin();
  const formRef = useRef<ScheduleFormRef>(null);
  const [apiError, setApiError] = useState<string | null>(null);

  const {
    schedule,
    isLoading,
    error: fetchError,
    fetchSchedules,
  } = useFetchProcessSchedules();

  const {
    updateProcessSchedules,
    isUpdating,
    updateError,
  } = useUpdateProcessSchedules();

  useEffect(() => {
    if (!active) return;
    fetchSchedules(integration.environmentId, integration.integrationPackInstanceId)
      .catch((err) => logger.error('Failed to fetch schedule:', err));
  }, [active, integration.environmentId, integration.integrationPackInstanceId]);

  useImperativeHandle(ref, () => ({
    submit: async () => {
      setApiError(null);
      try {
        const payload = formRef.current?.validateAndSubmit();
        if (!payload || !payload.Schedule || !integration.environmentId) {
          logger.warn("Schedule form is invalid or missing environmentId");
          return false;
        }

        setIsLoading?.(true);
        await updateProcessSchedules(payload.Schedule, integration.environmentId, integration.integrationPackInstanceId);
        setIsLoading?.(false);
        onSubmit?.();
        return true;
      } catch (err: any) {
        setIsLoading?.(false);
        const message = err.message || 'Failed to update schedule.';
        logger.error('Schedule update error:', err);
        setApiError(message);
        return false;
      }
    }
  }));

  if (isLoading) {
    return (
      <div className="flex justify-center items-center pt-6 m-6">
        <AjaxLoader message="Retrieving Schedule Information..." />
      </div>
    );
  }

  if (apiError || fetchError || updateError) {
    return (
      <div className="text-red-600 text-sm text-center px-4 py-2 bg-red-100 border border-red-300 rounded">
        {apiError || fetchError || updateError}
      </div>
    );
  }

  return (
    <>
      <div className="mt-4">
        <div className="text-gray-700 text-lg font-bold pb-1 pl-2">
          {boomiConfig?.setSchedule?.body?.title || "Set Schedule"}
        </div>
        <div className="text-gray-700 text-sm mb-4 pl-2">
          Please provide the necessary information to set up your schedule. For more details, refer to the product documentation <a className="text-blue-500 hover:text-blue-400" target="_blank" href="https://help.boomi.com/docs/Atomsphere/Integration/Integration%20management/c-atm-Process_schedules_5d4ec467-f604-46ac-a546-f714a6a2d38e">Process Schedules</a>.
        </div>
        <div className="flex-1">
          <ScheduleForm
            ref={formRef}
            defaultSchedule={schedule ?? integration.defaultSchedule ?? null}
            environmentId={integration.environmentId}
            integrationPackInstanceId={integration.integrationPackInstanceId}
          />
        </div>
      </div>
    </>
  );
});

UpdateSchedule.displayName = 'UpdateSchedule';
export default UpdateSchedule;
