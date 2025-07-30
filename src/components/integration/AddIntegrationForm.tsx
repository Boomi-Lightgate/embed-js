import React, {
  useImperativeHandle,
  forwardRef,
  useState,
  useEffect,
} from 'react';
import { Environment, IntegrationPack } from '../../service';
import IntegrationPackSelect from './IntegrationPackSelect';
import EnvironmentSelect from './EnvironmentSelect';
import Input from '../ui/Input';
import { usePlugin } from '../../context/pluginContext';

export type AddIntegrationFormResult = {
  integrationPack: IntegrationPack;
  environment: any;
  integrationName: string;
};

export type AddIntegrationFormRef = {
  validateAndSubmit: () => AddIntegrationFormResult | null;
  isFormReady: () => boolean;
};

/**
 * AddIntegrationForm component allows users to select an integration pack,
 * an environment, and provide a name for the integration.
 * It validates the inputs and provides a method to retrieve the form data.
 * @param {Object} props - Component properties.
 * @param {string} props.label - Label for the form.
 * @param {React.Ref} ref - Ref to expose methods for validation and submission.
 * @returns {JSX.Element} The rendered form component.
 */
const AddIntegrationForm = forwardRef<AddIntegrationFormRef, {
  label: string;
}>(({ label }, ref) => {
    const { boomiConfig } = usePlugin();

    const [integrationPack, setIntegrationPack] = useState<IntegrationPack | null>(null);
    const [environment, setEnvironment] = useState<Environment | null>(null);
    const [integrationName, setIntegrationName] = useState('');
    const [formErrors, setFormErrors] = useState({
      integrationPack: '',
      environment: '',
      integrationName: '',
    });

    const isEnvironmentEnabled = !!integrationPack?.id;
    const isNameEnabled = !!environment?.id;
    const isNameLocked = integrationPack?.installationType === 'SINGLE';

    useEffect(() => {
      if (integrationPack?.name) {
        setIntegrationName(integrationPack.name);
        setFormErrors((prev) => ({ ...prev, integrationName: '' }));
      }
    }, [integrationPack]);

    useImperativeHandle(ref, () => ({
      validateAndSubmit: () => {
        const errors = {
          integrationPack: integrationPack?.id ? '' : 'Required',
          environment: environment?.id ? '' : 'Required',
          integrationName: integrationName ? '' : 'Required',
        };

        const regex = boomiConfig?.form?.connectorForm?.['integrationName']?.validation;
        if (integrationName && regex && !new RegExp(regex).test(integrationName)) {
          errors.integrationName = 'Invalid format';
        }

        setFormErrors(errors);

        const hasError = Object.values(errors).some((e) => !!e);
        if (hasError || !integrationPack || !environment) return null;

        return {
          integrationPack,
          environment,
          integrationName,
        };
      },
      isFormReady: () => !!integrationName,
    }));

  return (
    <div className="space-y-4 relative">
      <IntegrationPackSelect
        componentName="addIntegrationForm"
        onIntegrationChange={(packs) => {
          const pack = packs[0] || null;
          setIntegrationPack(pack);
          setFormErrors((prev) => ({ ...prev, integrationPack: '' }));
        }}
        onBlur={(pack) => {
          if (!pack?.id) {
            setFormErrors((prev) => ({ ...prev, integrationPack: 'Required' }));
          }
        }}
        showLoading={true}
        validationError={formErrors.integrationPack}
      />

      <EnvironmentSelect
        componentName="addIntegrationForm"
        disabled={!isEnvironmentEnabled}
        integrationPackId={integrationPack?.id ?? ''}
        includeEnvironments="ALL"
        onEnvironmentChange={(env) => {
          setEnvironment(env);
          setFormErrors((prev) => ({ ...prev, environment: '' }));
        }}
        onBlur={(env) => {
          if (!env?.id) {
            setFormErrors((prev) => ({ ...prev, environment: 'Required' }));
          }
        }}
        showLoading={true}
        loadingMessage="Loading Integrations and Environments..."
        validationError={formErrors.environment}
      />
      
      <Input
        formName="integrationDetailsForm"
        label="Integration Name"
        type="text"
        required={true}
        inputName="integrationName"
        value={integrationName}
        onChange={(e) => {
          setIntegrationName(e.target.value);
          setFormErrors((prev) => ({ ...prev, integrationName: '' }));
        }}
        onBlur={(e) => {
          const val = e.target.value;
          if (!val) {
            setFormErrors((prev) => ({ ...prev, integrationName: 'Required' }));
          } else {
            const regex = boomiConfig?.form?.connectorForm?.['integrationName']?.validation;
            if (regex && !new RegExp(regex).test(val)) {
              setFormErrors((prev) => ({ ...prev, integrationName: 'Invalid format' }));
            }
          }
        }}
        error={formErrors.integrationName}
        readOnly={isNameLocked || !isNameEnabled}
      />
    </div>
  );

  }
);

AddIntegrationForm.displayName = 'AddIntegrationForm';
export default AddIntegrationForm;
