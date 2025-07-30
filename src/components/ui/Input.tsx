import React from 'react';
import { usePlugin } from '../../context/pluginContext';

type InputType = 'text' | 'email' | 'password' | 'number';
interface InputProps {
  formName: string;
  label: string;
  required: boolean;
  inputName: string;
  readOnly: boolean;
  type?: InputType;
  defaultValue?: string;
  value?: string;
  helperText?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void; 
  error?: string;
}

const Input: React.FC<InputProps> = ({
  formName,
  label,
  required,
  inputName,
  readOnly,
  type,
  defaultValue,
  value,
  helperText,
  onChange,
  onBlur,
  error
}) => {
  const { boomiConfig } = usePlugin();

  const fieldConfig = boomiConfig?.form?.[formName]?.[inputName];
  const inputLabel = fieldConfig?.label || label;
  const inputBaseClass = fieldConfig?.class || boomiConfig?.input?.class || '';
  const disabledClass = fieldConfig?.disabledClass || boomiConfig?.input?.disabledClass || '';
  const labelClass = fieldConfig?.labelClass || boomiConfig?.input?.labelClass || '';
  const requiredClass = fieldConfig?.requiredClass || boomiConfig?.input?.requiredClass || '';

  const inputClass = [
    'w-full border rounded-md p-2',
    readOnly
      ? `bg-gray-100 cursor-not-allowed focus:outline-none ${disabledClass}`
      : `focus:outline-2 focus:outline-gray-200 border-gray-300 bg-white ${inputBaseClass}`,
    error ? `border-2 border-red-500 ${requiredClass}` : ''
  ].join(' ');

  const isControlled = typeof value !== 'undefined' && typeof onChange === 'function';

  return (
    <div>
      <label className={`block text-sm font-medium text-gray-700 mb-1 ${labelClass}`}>
        {inputLabel}
        {required && <span className={`text-red-400 ${requiredClass}`}>*</span>}
      </label>
      <input
        type={type}
        name={inputName}
        className={inputClass}
        readOnly={readOnly}
        required={required}
        {...(isControlled
          ? { value, onChange }
          : { defaultValue })}
        onBlur={onBlur} 
      />
      {helperText && (
        <label className="text-xs text-gray-500">{helperText}</label>
      )}
      {error && (
        <p className={`mt-1 text-sm text-red-400 ${requiredClass}`}>
          {inputLabel} {error}
        </p>
      )}
    </div>
  );
};

export default Input;
