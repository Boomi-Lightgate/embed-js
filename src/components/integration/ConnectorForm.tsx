import React, {
  useImperativeHandle,
  forwardRef,
  useState,
  useEffect,
} from 'react';
import { EnvironmentExtensions } from '../../service';
import Input from '../ui/Input';
import labelMaker from '../../utils/labelMaker';
import { usePlugin } from '../../context/pluginContext';
import logger from '../../logger.service';

export type ConnectorFormRef = {
  validateAndSubmit: () => EnvironmentExtensions[] | null;
};

interface ConnectorFormProps {
  extensions: EnvironmentExtensions[];
}

type EncryptedTracking = Record<string, Record<string, boolean>>;
const ConnectorForm = forwardRef<ConnectorFormRef, ConnectorFormProps>((props, ref) => {
  const {
    extensions
  } = props;

  const { boomiConfig } = usePlugin();

  const [formValues, setFormValues] = useState<Record<string, Record<string, string>>>({});
  const [formErrors, setFormErrors] = useState<Record<string, Record<string, string>>>({});
  const [encryptedTouched, setEncryptedTouched] = useState<EncryptedTracking>({});

  useEffect(() => {
    const newFormValues: Record<string, Record<string, string>> = {};
    const newFormErrors: Record<string, Record<string, string>> = {};
    const newEncryptedTouched: EncryptedTracking = {};

    extensions.forEach((extension) => {
      const connections = extension.connections?.connection ?? [];
      connections.forEach((conn) => {
        const connId = conn.id;
        if (!connId) return;

        newFormValues[connId] = {};
        newFormErrors[connId] = {};
        newEncryptedTouched[connId] = {};

        (conn.field || []).forEach((field) => {
          const fieldId = field.id;
          if (!fieldId) return;

          const defaultValue = field.encryptedValueSet ? '••••• (stored)' : (field.value ?? '');
          newFormValues[connId][fieldId] = defaultValue;
          newFormErrors[connId][fieldId] = '';
          newEncryptedTouched[connId][fieldId] = false;
        });
      });

      const processProps = extension.processProperties?.ProcessProperty ?? [];
      processProps.forEach((prop) => {
        const propId = prop.id;
        if (!propId) return;

        newFormValues[propId] = {};
        newFormErrors[propId] = {};

        (prop.ProcessPropertyValue ?? []).forEach((val) => {
          const key = val.key;
          if (!key) return;

          const isValidationProp = prop.name === '_validation';
          const defaultValue = isValidationProp ? 'validated' : (val.value ?? '');
          newFormValues[propId][key] = defaultValue;
          newFormErrors[propId][key] = '';
        });
      });
    });

    setFormValues(newFormValues);
    setFormErrors(newFormErrors);
    setEncryptedTouched(newEncryptedTouched);
  }, [extensions]);

  useImperativeHandle(ref, () => ({
    validateAndSubmit: () => {
      let isValid = true;
      const newErrors: Record<string, Record<string, string>> = {};

      for (const groupId in formValues) {
        const isValidationGroup = extensions.some(ext =>
          ext.processProperties?.ProcessProperty?.some(
            (prop) => prop.id === groupId && prop.name === '_validation'
          )
        );
        if (isValidationGroup) continue;

        for (const fieldId in formValues[groupId]) {
          const value = formValues[groupId][fieldId];
          const errorMessage = [];

          const isEncrypted = extensions.some(ext =>
            ext.connections?.connection?.some(conn =>
              conn.id === groupId &&
              conn.field?.some(field =>
                field.id === fieldId && field.encryptedValueSet
              )
            )
          );

          const wasEncryptedAndUntouched = isEncrypted && value === '••••• (stored)' && !encryptedTouched[groupId]?.[fieldId];

          if (!value.trim() && !wasEncryptedAndUntouched) {
            isValid = false;
            errorMessage.push('is required.');
          }

          const regex = boomiConfig?.form?.connectorForm?.[fieldId]?.validation;
          if (regex && !wasEncryptedAndUntouched) {
            try {
              const regexObj = new RegExp(regex);
              if (!regexObj.test(value)) {
                isValid = false;
                errorMessage.push('is invalid.');
              }
            } catch (e) {
              logger.warn(`Invalid regex for ${fieldId}: ${regex}`);
            }
          }

          if (errorMessage.length) {
            if (!newErrors[groupId]) newErrors[groupId] = {};
            newErrors[groupId][fieldId] = errorMessage.join(' ');
          }
        }
      }

      setFormErrors(newErrors);
      if (!isValid) return null;

      const updatedExtensions: EnvironmentExtensions[] = extensions.map((extension) => {
        const updatedConnections = extension.connections?.connection?.map((conn) => {
          const connId = conn.id;
          if (!connId) return conn;

          const updatedFields = conn.field?.map((field) => {
            const fieldId = field.id;
            if (!fieldId) return field;

            const userModified = encryptedTouched[connId]?.[fieldId];
            const currentValue = formValues[connId]?.[fieldId] ?? '';

            const shouldSubmitValue = !field.encryptedValueSet || userModified;
            const value = shouldSubmitValue ? currentValue : field.value ?? '';

            return {
              ...field,
              value,
            };
          }) ?? [];

          return {
            ...conn,
            field: updatedFields,
          };
        }) ?? [];

        const updatedProcessProps = extension.processProperties?.ProcessProperty?.map((prop) => {
          const propId = prop.id;
          if (!propId) return prop;

          const updatedValues = prop.ProcessPropertyValue?.map((val) => {
            const label = val.label;
            if (!label) return val;

            const isValidationProp = prop.name === '_validation';
            const newValue = isValidationProp
              ? (formValues[propId]?.[label] ?? 'validated')
              : (formValues[propId]?.[label] ?? val.value ?? '');

            return {
              ...val,
              value: newValue,
            };
          }) ?? [];

          return {
            ...prop,
            ProcessPropertyValue: updatedValues,
          };
        }) ?? [];

        return {
          ...extension,
          connections: {
            ...extension.connections,
            connection: updatedConnections,
          },
          processProperties: {
            ...extension.processProperties,
            ProcessProperty: updatedProcessProps,
          },
        };
      });

      return updatedExtensions;
    }
  }));

  const handleFieldChange = (groupId: string, fieldId: string, value: string) => {
    setFormValues((prev) => ({
      ...prev,
      [groupId]: {
        ...prev[groupId],
        [fieldId]: value,
      },
    }));

    setFormErrors((prev) => ({
      ...prev,
      [groupId]: {
        ...prev[groupId],
        [fieldId]: '',
      },
    }));

    if (value !== '••••• (stored)') {
      setEncryptedTouched((prev) => ({
        ...prev,
        [groupId]: {
          ...prev[groupId],
          [fieldId]: true,
        },
      }));
    }
  };

  const handleFieldBlur = (groupId: string, fieldId: string, value: string) => {
    const regex = boomiConfig?.form?.connectorForm?.[fieldId]?.validation;
    let errorMessage = '';

    const isEncrypted = extensions.some(ext =>
      ext.connections?.connection?.some(conn =>
        conn.id === groupId &&
        conn.field?.some(field =>
          field.id === fieldId && field.encryptedValueSet
        )
      )
    );

    const wasEncryptedAndUntouched = isEncrypted && value === '••••• (stored)' && !encryptedTouched[groupId]?.[fieldId];

    if (!value.trim() && !wasEncryptedAndUntouched) {
      errorMessage = 'is required.';
    } else if (regex && !wasEncryptedAndUntouched) {
      try {
        const regexObj = new RegExp(regex);
        if (!regexObj.test(value)) {
          errorMessage = 'is invalid.';
        }
      } catch {}
    }

    setFormErrors((prev) => ({
      ...prev,
      [groupId]: {
        ...prev[groupId],
        [fieldId]: errorMessage,
      },
    }));
  };

  const handleSave = () => {
    const isValid = ref && typeof ref !== 'function' && ref.current?.validateAndSubmit();
    if (isValid) {
      logger.debug('Submitting valid form values:', formValues);
    }
  };

  const handleCancel = () => {
    logger.debug('Form cancelled');
  };

  return (
    <div>
      {extensions.map((extension, extIndex) => {
        const connections = extension.connections?.connection ?? [];
        const processProps = extension.processProperties?.ProcessProperty ?? [];

        return (
          <div key={extIndex} className="gap-2">
            {connections.map((connection, connIndex) => {
              const connId = connection.id;
              if (!connId) return null;

              return (
                <div key={`conn-${connIndex}`} className="mb-4 p-3 border border-gray-200 rounded bg-gray-50">
                  <h3 className="text-md font-semibold text-gray-700 mb-2">
                    {connection.name || connId}
                  </h3>

                  {(connection.field || []).map((field, fieldIndex) => {
                    const fieldId = field.id;
                    if (!fieldId) return null;

                    const value = formValues?.[connId]?.[fieldId] ?? '';
                    const error = formErrors?.[connId]?.[fieldId] ?? '';
                    const labelText = labelMaker(fieldId) || fieldId;
                    const fieldType = field.usesEncryption ? 'password' : 'text';

                    return (
                      <div key={`field-${fieldIndex}`} className="mb-2">
                        <Input
                          type={fieldType}
                          formName={`connectionForm-${connId}`}
                          inputName={fieldId}
                          label={labelText}
                          required={true}
                          value={value}
                          error={error}
                          readOnly={false}
                          onChange={(e) =>
                            handleFieldChange(connId, fieldId, e.target.value)
                          }
                          onBlur={(e) =>
                            handleFieldBlur(connId, fieldId, e.target.value)
                          }
                        />
                      </div>
                    );
                  })}
                </div>
              );
            })}

            {processProps.map((prop, propIndex) => {
              const propId = prop.id;
              if (!propId || prop.name === '_validation') return null;

              return (
                <div key={`prop-${propIndex}`} className="mb-4 p-3 border border-gray-200 rounded bg-gray-50">
                  <h3 className="text-md font-semibold text-gray-700 mb-2">
                    {prop.name || propId}
                  </h3>

                  {(prop.ProcessPropertyValue ?? []).map((val, valIndex) => {
                    const key = val.key;
                    if (!key) return null;
                    const labelText = val.label || key;
                    const value = formValues?.[propId]?.[key] ?? '';
                    const error = formErrors?.[propId]?.[key] ?? '';

                    return (
                      <div key={`ppval-${valIndex}`} className="mb-2">
                        <Input
                          formName={`processPropForm-${propId}`}
                          inputName={key}
                          label={labelText}
                          required={true}
                          value={value}
                          error={error}
                          readOnly={false}
                          onChange={(e) => handleFieldChange(propId, key, e.target.value)}
                          onBlur={(e) => handleFieldBlur(propId, key, e.target.value)}
                        />
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
});
ConnectorForm.displayName = 'ConnectorForm';
export default ConnectorForm;