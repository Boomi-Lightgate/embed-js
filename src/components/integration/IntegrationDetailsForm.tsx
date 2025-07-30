import React, {
  useImperativeHandle,
  forwardRef,
  useState,
  useEffect,
} from 'react';
import Input from '../ui/Input';
import { usePlugin } from '../../context/pluginContext';

export type IntegrationDetailsFormResult = {
  integrationPackName: string;
};

export type IntegrationDetailsFormRef = {
  validateAndSubmit: () => IntegrationDetailsFormResult | null;
  isFormReady: () => boolean;
};

interface IntegrationDetailsFormProps {
  installationType?: 'SINGLE' | 'MULTI';
  integrationPackName?: string;
  integrationPackDescription?: string;
  environmentName?: string;
}

const IntegrationDetailsForm = forwardRef<IntegrationDetailsFormRef, IntegrationDetailsFormProps>((props, ref) => {
  const { 
    installationType, 
    integrationPackName, 
    integrationPackDescription, 
    environmentName 
  } = props;
  const { boomiConfig } = usePlugin();

  const [formValues, setFormValues] = useState({
    integrationName: integrationPackName || '',
  });

  const [formErrors, setFormErrors] = useState({
    integrationName: '',
  });

  const isNameLocked = installationType === 'SINGLE';

  useEffect(() => {
    if (integrationPackName) {
      setFormValues({ integrationName: integrationPackName });
    }
  }, [integrationPackName]);

  useImperativeHandle(ref, () => ({
    validateAndSubmit: (): IntegrationDetailsFormResult | null => {
      let isValid = true;
      const newErrors = { integrationName: '' };

      if (!formValues.integrationName.trim()) {
        newErrors.integrationName = 'Required';
        isValid = false;
      }

      setFormErrors(newErrors);

      if (!isValid) return null;

      return {
        integrationPackName: formValues.integrationName.trim(),
      };
    },

    isFormReady: () => {
      return !!formValues.integrationName.trim();
    }
  }));

  return (
    <div className="flex flex-col space-y-4">
      <label className={`block text-sm font-medium text-gray-700 mb-1 pb-2`}>
        Descirption: <span className="text-sm font-normal">{integrationPackDescription}</span> 
      </label>
      <label className={`block text-sm font-medium text-gray-700 mb-1 pb-2`}>
        Environment: <span className="text-sm font-normal">{environmentName}</span> 
      </label>
      <Input
        formName="integrationDetailsForm"
        label="Integration Name"
        type="text"
        required={true}
        inputName="integrationName"
        value={formValues.integrationName}
        onChange={(e) => {
          setFormValues({ integrationName: e.target.value });
          setFormErrors({ integrationName: '' });
        }}
        error={formErrors.integrationName}
        readOnly={isNameLocked}
      />
    </div>
  );
});

export default IntegrationDetailsForm;
