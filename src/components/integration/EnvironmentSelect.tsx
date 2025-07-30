import React, { useEffect, useState } from 'react';
import Dropdown, { Option } from '../ui/Dropdown';
import AjaxLoader from '../ui/AjaxLoader';
import { useFetchEnvironments } from '../../hooks/environment/useFetchEnvironments';
import { EnvironmentType } from '../../types/environment-type';

interface EnvironmentSelectProps {
  componentName: string;
  label?: string;
  disabled?: boolean;
  integrationPackId: string;
  includeEnvironments?: EnvironmentType;
  environmentId?: string | null;
  showLoading?: boolean;
  loadingMessage?: string;
  validationError?: string;
  onEnvironmentChange?: (env: { id: string; name: string }) => void;
  onBlur?: (selected?: Option) => void;
}

const EnvironmentSelect: React.FC<EnvironmentSelectProps> = ({
  componentName,
  label = 'Environment',
  disabled = false,
  integrationPackId,
  includeEnvironments,
  environmentId,
  showLoading = true,
  loadingMessage = 'Loading Environments...',
  validationError,
  onEnvironmentChange,
  onBlur,
}) => {
  const { environments, isLoading, error } = useFetchEnvironments(
    integrationPackId,
    includeEnvironments,
    environmentId
  );

  const placeholderOption = { id: 'placeholder', name: 'Please select' };
  const [options, setOptions] = useState<Option[]>([]);
  const [selectedOption, setSelectedOption] = useState<Option>(placeholderOption);

  useEffect(() => {
    if (!environments?.length) return;

    const mapped = environments.map((env) => ({ id: env.id, name: env.name }));
    const fullOptions = [placeholderOption, ...mapped];
    setOptions(fullOptions);

    let defaultSelected = placeholderOption;
    if (environmentId) {
      const match = mapped.find((opt) => opt.id === environmentId);
      if (match) {
        defaultSelected = match;
        if (onEnvironmentChange) {
          const matchedFull = environments.find((e) => e.id === environmentId);
          if (matchedFull) onEnvironmentChange({ id: matchedFull.id, name: matchedFull.name });
        }
      }
    }
  }, [environments, environmentId, onEnvironmentChange]);

  const handleChange = (selected: Option) => {
    setSelectedOption(selected);

    if (selected.id === 'placeholder') {
      onEnvironmentChange?.({ id: '', name: '' });
      return;
    }

    const matched = environments?.find((env) => env.id === selected.id);
    if (matched) {
      onEnvironmentChange?.({ id: matched.id, name: matched.name });
    }
  };

  if (isLoading && showLoading) {
    return <AjaxLoader message={loadingMessage} />;
  }

  if (error) {
    return <p className="text-red-500 text-sm">Failed to load environments.</p>;
  }

  if (!environments?.length) {
    return <p className="text-gray-500 text-sm">No environments found.</p>;
  }

  return (
    <Dropdown
      key={selectedOption?.id ?? 'placeholder'}
      formName={componentName}
      label={label}
      inputName="environment"
      options={options}
      selected={selectedOption}
      onChange={handleChange}
      onBlur={onBlur}
      required
      disabled={disabled}
      error={validationError}
    />
  );
};

export default EnvironmentSelect;
