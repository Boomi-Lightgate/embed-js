import React, { useState, useMemo } from 'react';
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';
import { AiOutlineCheck, AiOutlineCaretDown } from 'react-icons/ai';
import { usePlugin } from '../../context/pluginContext';

export interface Option {
  id: string;
  name: string;
  description?: string;
}

interface DropdownProps {
  formName: string;
  label: string;
  inputName: string;
  options: Option[];
  selected?: Option;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  onChange: (value: Option) => void;
  onBlur?: (selected?: Option) => void;
}

const placeholderOption: Option = { id: 'placeholder', name: 'Please select' };

const Dropdown: React.FC<DropdownProps> = ({
  formName,
  label,
  inputName,
  options,
  selected,
  required,
  disabled = false,
  error,
  onChange,
  onBlur
}) => {
  const { boomiConfig } = usePlugin();
  const [search, setSearch] = useState('');

  const fieldConfig = boomiConfig?.form?.[formName]?.[inputName];
  const labelClass = fieldConfig?.labelClass || boomiConfig?.input?.labelClass || '';
  const requiredClass = fieldConfig?.requiredClass || boomiConfig?.input?.requiredClass || '';
  const baseClass = fieldConfig?.class || boomiConfig?.input?.class || '';
  const errorClass = error ? `border-red-500 ring-red-500 ${requiredClass}` : '';
  const optionMap = useMemo(() => {
    return options.reduce((acc, opt) => {
      acc[opt.id] = opt;
      return acc;
    }, {} as Record<string, Option>);
  }, [options]);
  const selectedId = selected?.id ?? 'placeholder';

  const filteredOptions = useMemo(() => {
    const lowerSearch = search.toLowerCase();
    return options.filter(
      (opt) =>
        opt.name.toLowerCase().includes(lowerSearch) ||
        opt.description?.toLowerCase().includes(lowerSearch)
    );
  }, [search, options]);

  const handleInternalChange = (id: string) => {
    const option = optionMap[id];
    if (option) {
      onChange(option);
    }
  };

  return (
    <div className={`mb-4 ${disabled ? 'cursor-not-allowed' : ''}`}>
      <label className={`block text-sm font-medium text-gray-700 mb-1 ${labelClass}`}>
        {label}
        {required && <span className={`text-red-400 ${requiredClass}`}>*</span>}
      </label>
      <Listbox
        value={selectedId}
        onChange={handleInternalChange}
        disabled={disabled}
      >
        <div className="relative w-full bg-white">
          <ListboxButton
            onBlur={() => {
              if (onBlur) onBlur(selected);
            }}
            className={`relative bg-white rounded-md bg-gray-50 py-2 pl-3 pr-10 text-left border 
              focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm w-full
              ${baseClass} ${errorClass} ${disabled ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : ''}`}
          >
            <span className="block truncate">
              {selectedId && selectedId in optionMap ? optionMap[selectedId].name : 'Please select'}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <AiOutlineCaretDown className="h-4 w-4 text-gray-400" aria-hidden="true" />
            </span>
          </ListboxButton>

          {!disabled && (
            <ListboxOptions
              className="absolute mt-1 max-h-36 overflow-auto bg-white border-gray-200 border-1 
              rounded-md bg-white text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm w-full z-[9999]"
            >
              <div className="pt-0 sticky top-0 bg-white border-b border-gray-200">
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  placeholder="Search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              {filteredOptions.length === 0 && (
                <div className="px-3 py-2 text-sm text-gray-500">No options found</div>
              )}

              {filteredOptions.map((option) => (
                <ListboxOption
                  key={option.id}
                  value={option.id}
                  className={({ selected, active }) =>
                    `relative cursor-default select-none py-2 pl-3 pr-9 z-10 ${
                      selected ? 'bg-indigo-500 text-white' : active ? 'bg-gray-100 bg-white' : 'text-gray-900 bg-white'
                    } ${option.id === 'placeholder' ? 'text-gray-400 italic' : ''}`
                  }
                >
                  {({ selected }) => (
                    <>
                      <div className="flex flex-col">
                        <span className={`truncate ${selected ? 'font-semibold' : 'font-normal'}`}>
                          {option.name}
                        </span>
                        {option.description && option.id !== 'placeholder' && (
                          <span className="text-xs text-gray-500 truncate">{option.description}</span>
                        )}
                      </div>

                      {selected && option.id !== 'placeholder' && (
                        <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                          <AiOutlineCheck className="h-5 w-5" aria-hidden="true" />
                        </span>
                      )}
                    </>
                  )}
                </ListboxOption>
              ))}
            </ListboxOptions>
          )}
        </div>
      </Listbox>

      {error && (
        <p className={`mt-1 text-sm text-red-400 ${requiredClass}`}>
          {label} {error}
        </p>
      )}
    </div>
  );
};

export default Dropdown;
