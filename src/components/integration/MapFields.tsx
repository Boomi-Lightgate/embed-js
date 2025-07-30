import React, { useState, useEffect, useRef } from 'react';
import {
  EnvironmentMapExtension,
  MapExtensionBrowseSettings,
  MapExtensionsMapping,
} from '../../service';
import {
  stripYFromId,
  embedYInId,
  parseYFromId,
  toMapExtensionsFunctions,
  fromMapExtensionsFunctions,
} from '../../utils/ui-utils';
import Modal from '../ui/Modal';
import { usePlugin } from '../../context/pluginContext';
import { useFetchMapExtensions } from '../../hooks/map-extension/useFetchMapExtensions';
import { useUpdateMapExtensions } from '../../hooks/map-extension/useUpdateMapExtensions';
import AjaxLoader from '../ui/AjaxLoader';
import FieldMappingCanvas, { PositionedFunction } from './FieldMappingCanvas';
import { IntegrationPackConfig } from '../../types/integration-pack-config';
import EditTransformationsForm, {
  EditTransformationsFormRef,
} from './EditTransformationsForm';
import logger from '../../logger.service';

const ROW_HEIGHT = 140;

const MapFields = ({
  integration,
  active,
  setIsLoading,
  onSubmit,
}: {
  integration: IntegrationPackConfig;
  active: boolean;
  setIsLoading?: (val: boolean) => void;
  onSubmit?: () => void;
}) => {
  const { boomiConfig, setPageIsLoading } = usePlugin();
  const [apiError, setApiError] = useState<string | null>(null);
  const { extensions, fetchMapExtensions, isLoading, error } = useFetchMapExtensions();
  const { updateMapExtensions } = useUpdateMapExtensions();
  const [editFunction, setEditFunction] = useState<PositionedFunction | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const formRef = useRef<EditTransformationsFormRef>(null);
  const [canvasFunctions, setCanvasFunctions] = useState<PositionedFunction[]>([]);
  const [canvasMappings, setCanvasMappings] = useState<MapExtensionsMapping[]>([]);
  const canvasRef = useRef<{ redrawLines: () => void }>(null);
  const [editName, setEditName] = useState(
    stripYFromId(editFunction?.name || `script_${ Date.now()}`) ?? `script_${ Date.now()}`
  );

  const sourceFields =
    extensions?.[0]?.Map?.SourceProfile?.Node?.filter((n) => n.xpath) ?? [];
  const targetFields =
    extensions?.[0]?.Map?.DestinationProfile?.Node?.filter((n) => n.xpath) ?? [];
  const currentMappings = extensions?.[0]?.Map?.ExtendedMappings?.Mapping ?? [];

  useEffect(() => {
    if (active) {
      setPageIsLoading?.(true);
      fetchMapExtensions(integration.environmentId, integration.integrationPackInstanceId)
        .catch(() => setApiError('Failed to fetch extensions'))
        .finally(() => setPageIsLoading?.(false));
    }
  }, [active]);

  useEffect(() => {
    if (extensions?.length) {
      const ext = extensions[0];
      if (!ext?.Map) return;
      setCanvasFunctions(fromMapExtensionsFunctions(ext.Map.ExtendedFunctions?.Function ?? []));
      setCanvasMappings(ext.Map.ExtendedMappings?.Mapping ?? []);
    }
  }, [extensions]);

  const handleSubmit = async (): Promise<boolean> => {
    logger.debug('handle submit mapping called', formRef.current);
    if (!formRef.current) return false;

    const result = formRef.current.validateAndSubmit();
    if (!result) return false;

    const newFn: PositionedFunction = {
      id: editFunction?.id ?? '',
      newId: embedYInId(result.id, parseYFromId(editFunction?.id ?? '') ?? 0),
      name: result.id,
      script: result.script,
      inputs: result.inputs.map((input) => ({
        name: input.name,
        key: input.key,
        dataType: input.type,
      })),
      outputs: result.outputs.map((output) => ({
        name: output.name,
        key: output.key,
      })),
      type: 'Custom Scripting',
    };

    const updated = editFunction
      ? canvasFunctions.map((f) => (f.id === editFunction.id ? newFn : f))
      : [...canvasFunctions, newFn];

    try {
      await handleCanvasFunctionChange(updated);
      setEditFunction(null);
      setIsEditing(false);
      onSubmit?.();
      return true;
    } catch {
      logger.debug('error setting function');
      return false;
    }
  };

  const handleCanvasMappingChange = async (newMappings: MapExtensionsMapping[]) => {
    if (!extensions?.[0]) return;
    const fullExtension = extensions[0];
    const defaultBrowseSettings: MapExtensionBrowseSettings = {
      DestinationBrowse: {},
      SourceBrowse: {},
      containerId: undefined,
    };

    const { functions: updatedFunctions, idMap: oldToNewIdMap } =
      toMapExtensionsFunctions(canvasFunctions ?? []);

    const updatedMapExtension: EnvironmentMapExtension = {
      ...fullExtension,
      Map: {
        ...fullExtension.Map,
        BrowseSettings: defaultBrowseSettings,
        DestinationProfile: fullExtension.Map?.DestinationProfile ?? { Node: [] },
        DestinationProfileExtensions:
          fullExtension.Map?.DestinationProfileExtensions ?? { Node: [] },
        SourceProfile: fullExtension.Map?.SourceProfile ?? { Node: [] },
        SourceProfileExtensions: fullExtension.Map?.SourceProfileExtensions ?? { Node: [] },
        ExtendedFunctions: {
          Function: updatedFunctions,
        },
        ExtendedMappings: {
          Mapping: newMappings
        },
      },
    };

    try {
      await updateMapExtensions(updatedMapExtension);
      setCanvasMappings(newMappings);
      console.log('Updated canvasMappings:', newMappings);
      
    } catch (err: any) {
      setApiError(err.message || 'Failed to update canvas mappings');
    }
  };

  const handleCanvasFunctionDelete = async (fn: PositionedFunction) => {
    if (!extensions?.[0]) return;

    const fullExtension = extensions[0];
    const defaultBrowseSettings: MapExtensionBrowseSettings = {
      DestinationBrowse: {},
      SourceBrowse: {},
      containerId: undefined,
    };

    const updatedFunctions = canvasFunctions.filter((f) => f.id !== fn.id);
    const updatedMappings = canvasMappings.filter(
      (m) => m.fromFunction !== fn.id && m.toFunction !== fn.id
    );
    const { functions: boomiFunctions, idMap: _ } = toMapExtensionsFunctions(updatedFunctions);

    const updatedMapExtension: EnvironmentMapExtension = {
      ...fullExtension,
      Map: {
        ...fullExtension.Map,
        BrowseSettings: defaultBrowseSettings,
        DestinationProfile: fullExtension.Map?.DestinationProfile ?? { Node: [] },
        DestinationProfileExtensions:
          fullExtension.Map?.DestinationProfileExtensions ?? { Node: [] },
        SourceProfile: fullExtension.Map?.SourceProfile ?? { Node: [] },
        SourceProfileExtensions:
          fullExtension.Map?.SourceProfileExtensions ?? { Node: [] },
        ExtendedFunctions: {
          Function: boomiFunctions,
        },
        ExtendedMappings: {
          Mapping: updatedMappings,
        },
      },
    };

    try {
      await updateMapExtensions(updatedMapExtension);
      setCanvasFunctions(fromMapExtensionsFunctions(boomiFunctions));
      setCanvasMappings(updatedMappings);
      logger.debug('Function deleted and mappings updated');
    } catch (err: any) {
      setApiError(err.message || 'Failed to delete transformation function');
    }
  };

  const handleCanvasFunctionChange = async (updatedFunctionsParam?: PositionedFunction[]) => {
    if (!extensions?.[0]) return;

    const fullExtension = extensions[0];
    const updatedFunctions = updatedFunctionsParam ?? canvasFunctions;
    const defaultBrowseSettings: MapExtensionBrowseSettings = {
      DestinationBrowse: {},
      SourceBrowse: {},
      containerId: undefined,
    };

    logger.debug('updating functions, current canvas functions:', updatedFunctions);

    const { functions: newFunctionsWithCorrectIds, idMap: oldToNewIdMap } =
      toMapExtensionsFunctions(updatedFunctions);

      logger.debug('oldToNewIdMap:', oldToNewIdMap);
      logger.debug('newFunctionsWithCorrectIds:', newFunctionsWithCorrectIds);

    const getFunctionById = (id?: string) =>
      id ? updatedFunctions.find((f) => f.newId === id || f.id === id) : undefined;

    const isNumber = (val: any) => !isNaN(val) && !isNaN(parseFloat(val));
    const normalizeId = (id?: string) => (id && id.trim() !== '' ? id : undefined);

    logger.debug('updating functions, found mappings:', canvasMappings);

    const newMappings = (canvasMappings || [])
      .filter((m) => {
        const originalFromFunction = m.fromFunction;
        const originalToFunction = m.toFunction;

        logger.debug('updating functions, changings mapping from:', originalFromFunction, originalToFunction, m.toXPath, m.fromXPath);

        const updatedFromFunction =
          normalizeId(oldToNewIdMap[originalFromFunction ?? ''] ?? originalFromFunction);
        const updatedToFunction =
          normalizeId(oldToNewIdMap[originalToFunction ?? ''] ?? originalToFunction);

        logger.debug('updating functions, changings old to new map', updatedFromFunction, updatedToFunction);

        const fromFn = updatedFromFunction ? getFunctionById(updatedFromFunction) : undefined;
        const toFn = updatedToFunction ? getFunctionById(updatedToFunction) : undefined;

        logger.debug('updating functions, changings mapping to:', fromFn, toFn);

        if (originalFromFunction && !fromFn) return false;
        if (originalToFunction && !toFn) return false;

        if (
          updatedFromFunction &&
          isNumber(m.fromXPath) &&
          !fromFn?.outputs.some((o) => o.key === Number(m.fromXPath))
        )
          return false;

        if (
          updatedToFunction &&
          isNumber(m.toXPath) &&
          !toFn?.inputs.some((i) => i.key === Number(m.toXPath))
        )
          return false;

        return true;
      }).map((m) => ({
      ...m,
      ...(m.fromFunction && oldToNewIdMap[m.fromFunction] && {
        fromFunction: oldToNewIdMap[m.fromFunction],
      }),
      ...(m.toFunction && oldToNewIdMap[m.toFunction] && {
        toFunction: oldToNewIdMap[m.toFunction],
      }),
    }))

    logger.debug('updating functions, returning updated mappings:', newMappings);

    const updatedMapExtension: EnvironmentMapExtension = {
      ...fullExtension,
      Map: {
        ...fullExtension.Map,
        BrowseSettings: defaultBrowseSettings,
        DestinationProfile: fullExtension.Map?.DestinationProfile ?? { Node: [] },
        DestinationProfileExtensions:
          fullExtension.Map?.DestinationProfileExtensions ?? { Node: [] },
        SourceProfile: fullExtension.Map?.SourceProfile ?? { Node: [] },
        SourceProfileExtensions: fullExtension.Map?.SourceProfileExtensions ?? { Node: [] },
        ExtendedFunctions: {
          Function: newFunctionsWithCorrectIds,
        },
        ExtendedMappings: {
          Mapping: newMappings,
        },
      },
    };

    try {
      setCanvasFunctions(fromMapExtensionsFunctions(newFunctionsWithCorrectIds));
      setCanvasMappings(newMappings);
      await updateMapExtensions(updatedMapExtension);
      console.log('Updated canvasMappings:', newMappings);
    } catch (err: any) {
      setApiError(err.message || 'Failed to update canvas mappings');
    }
  };


  return (
    <>
      {isEditing && (
        <Modal
          isOpen={isEditing}
          title={'Transformation Editor'}
          description="Use this form to create or edit transformations."
          onClose={() => setIsEditing(false)}
          onSubmit={handleSubmit}
          submitLabel="Save"
          width="w-[900px]"
          editableTitle={false}
          onEditTitleSubmit={(newTitle) => console.log('New title:', newTitle)}
        >
          <EditTransformationsForm
            ref={formRef}
            existingName={editName}
            existingScript={editFunction?.script ?? ''}
            existingInputs={
              editFunction?.inputs.map((input) => ({
                key: input.key,
                name: input.name,
                type: input.dataType as
                  | 'CHARACTER'
                  | 'DATETIME'
                  | 'FLOAT'
                  | 'INTEGER',
              })) ?? []
            }
            existingOutputs={
              editFunction?.outputs.map((output) => ({
                key: output.key,
                name: output.name,
              })) ?? []
            }
          />
        </Modal>
      )}
      {isLoading ? (
        <div className="flex justify-center items-center pt-6 m-6">
          <AjaxLoader message="Loading field mappings..." />
        </div>
      ) : apiError || error ? (
        <div className="text-red-600 text-sm text-center px-4 py-2 bg-red-100 border border-red-300 rounded">
          {apiError || error}
        </div>
      ) : (
        <div className="mt-4">
          <div className="text-gray-700 text-lg font-bold pb-1 pl-2">
            {boomiConfig?.mapFields?.body?.title || 'Map Fields'}
          </div>
          <div className="text-gray-700 text-sm mb-4 pl-2">
            {boomiConfig?.mapFields?.body?.description || 'Please map fields below.'}
          </div>
          <div className="flex-1 p-4">
            <FieldMappingCanvas
              sourceFields={sourceFields}
              targetFields={targetFields}
              functions={canvasFunctions}
              mappings={canvasMappings}
              onMappingChange={handleCanvasMappingChange}
              onTransformationUpdate={handleCanvasFunctionChange}
              onDeleteTransformation={(fn) => handleCanvasFunctionDelete(fn)}
              onEditTransformation={(fn) => {
                setEditFunction(fn);
                setIsEditing(true);
              }}
              onAddTransformation={() => {
                setEditFunction(null);
                setIsEditing(true);
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

MapFields.displayName = 'MapFields';
export default MapFields;
