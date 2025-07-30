import React, { useState, useEffect } from 'react';
import Dropdown, { Option } from '../ui/Dropdown';
import { useFetchAccountGroupIntegrationPacks } from '../../hooks/account-group/useFetchAccountGroupIntegrationPack';
import AjaxLoader from '../ui/AjaxLoader';
import logger from '../../logger.service';

interface IntegrationPackSelectProps {
  componentName: string;
  label?: string;
  disabled?: boolean;
  showLoading?: boolean;
  loadingMessage?: string;
  integrationPackId?: string | null;
  validationError?: string;
  onIntegrationChange?: (packs: any[]) => void;
  onBlur?: (selected?: Option) => void; 
}
const IntegrationPackSelect: React.FC<IntegrationPackSelectProps> = ({
  componentName,
  label = 'Available Integration',
  disabled = false,
  showLoading = true,
  loadingMessage = 'Loading Integrations...',
  integrationPackId,
  validationError,
  onIntegrationChange,
  onBlur,
}) => {
  const { integrationPacks, isLoading, error } = useFetchAccountGroupIntegrationPacks();
  const [options, setOptions] = useState<Option[]>([]);
  const placeholderOption = { id: 'placeholder', name: 'Please select' };
  const [selectedOption, setSelectedOption] = useState<Option>(placeholderOption);

  useEffect(() => {
    if (!integrationPacks) return;

    const mapped = integrationPacks.map((p) => ({ id: p.id, name: p.name }));
    const fullOptions = [placeholderOption, ...mapped];
    setOptions(fullOptions);

    let defaultSelected = placeholderOption;
    if (integrationPackId) {
      const match = mapped.find((opt) => opt.id === integrationPackId);
      if (match) {
        defaultSelected = match;
        if (onIntegrationChange) {
          const matchedFull = integrationPacks.find((p) => p.id === integrationPackId);
          if (matchedFull) onIntegrationChange([matchedFull]);
        }
      }
    }
    console.log('selectedOption updated:', selectedOption);
  }, [integrationPacks, integrationPackId, onIntegrationChange, selectedOption]);

  const handleChange = (selected: Option) => {
    console.log('handleChange called with:', selected);
    setSelectedOption(selected);
    logger.debug('IntegrationPackSelect handleChange', {
      selectedOption: selected,
      integrationPackId,
      options,
    });
    logger.debug('selected option', selectedOption.id);
    if (selected.id === 'placeholder') {
      onIntegrationChange?.([]);
      return;
    }
    const matched = integrationPacks?.find((p) => p.id === selected.id);
    if (matched) {
      onIntegrationChange?.([matched]);
    }
  };

  if (isLoading && showLoading) {
    return <AjaxLoader message={loadingMessage} />;
  }

  if (error) {
    return <p className="text-red-500 text-sm">Failed to load integrations.</p>;
  }

  return (
    <Dropdown
      key={selectedOption?.id ?? 'placeholder'}
      formName={componentName}
      label={label}
      inputName="integrationPack"
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

export default IntegrationPackSelect;
