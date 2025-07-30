import React, { useEffect, useRef, useState, forwardRef, useImperativeHandle } from 'react';
import { MapExtensionsMapping } from '../../index/models/MapExtensionsMapping';
import { MapExtensionsNode } from '../../index/models/MapExtensionsNode';
import Button from '../ui/Button';
import { AiOutlinePlus } from 'react-icons/ai';
import { motion } from 'framer-motion';
import SwalNotification from '../ui/SwalNotification';
import TranformationActions from './TransformationActions';
import {
  stripYFromId,
  embedYInId,
  parseYFromId,
  sanitize,
} from '../../utils/ui-utils';
import logger from '../../logger.service';
import { log } from 'console';

export interface PositionedFunction {
  id: string;
  newId?: string;
  name: string;
  type: string,
  inputs: { name: string; key: number, dataType: string }[];
  outputs: { name: string; key: number }[];
  script?: string;
  x?: number;
  y?: number;
}

interface FieldMappingCanvasProps {
  sourceFields: MapExtensionsNode[];
  targetFields: MapExtensionsNode[];
  functions: PositionedFunction[];
  mappings?: MapExtensionsMapping[];
  onTransformationUpdate?: (updatedFunctions: PositionedFunction[]) => void;
  onMappingChange?: (mappings: MapExtensionsMapping[]) => void;
  onEditTransformation?: (fn: PositionedFunction) => void;
  onDeleteTransformation?: (fn: PositionedFunction) => void;
  onAddTransformation?: (fn: PositionedFunction) => void;
}

const ROW_HEIGHT = 140;
const FIXED_X = 0;

const FieldMappingCanvas = forwardRef(({
  sourceFields,
  targetFields,
  functions,
  mappings = [],
  onMappingChange,
  onTransformationUpdate,
  onEditTransformation,
  onDeleteTransformation,
  onAddTransformation
}: FieldMappingCanvasProps, ref) => {
  const [selectedSource, setSelectedSource] = useState<string | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const sourceRefs = useRef(new Map<string, HTMLDivElement>());
  const targetRefs = useRef(new Map<string, HTMLDivElement>());
  const funcInputRefs = useRef(new Map<string, HTMLDivElement>());
  const funcOutputRefs = useRef(new Map<string, HTMLDivElement>());
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [showNotification, setShowNotification] = useState(false);
  const [showDeleteNotification, setShowDeleteNotification] = useState(false);
  const [pendingDeleteSource, setPendingDeleteSource] = useState<string | null>(null);
  const [pendingDeleteTransformation, setPendingDeleteTransformation] = useState<PositionedFunction | null>(null);
  const [selectedTarget, setSelectedTarget] = useState<string | null>(null);
  const [selectedFunction, setSelectedFunction] = useState<string | null>(null);
  const [selectedOutput, setSelectedOutput] = useState<{ fnId: string; outputKey: number } | null>(null);

  const setCardRef = (el: HTMLDivElement | null, id: string) => {
    if (el) cardRefs.current[id] = el;
  };

  const setRef = (map: Map<string, HTMLDivElement>, key: string) => (el: HTMLDivElement | null) => {
    if (el) map.set(key, el);
  };

  const addMapping = (
    fromXPath: string,
    toXPath: string,
    toFunction?: string,
    fromFunction?: string
  ) => {
    if (
      mappings.find(
        (m) =>
          m.fromXPath === fromXPath &&
          m.toXPath === toXPath &&
          m.toFunction === toFunction &&
          m.fromFunction === fromFunction
      )
    ) {
      return;
    }

    const newMappings = [
      ...mappings,
      { fromXPath, toXPath, toFunction, fromFunction },
    ];
    onMappingChange?.(newMappings);
  };

  const removeMapping = (from: string, to: string) => {
    const newMappings = mappings.filter((m) => !(m.fromXPath === from && m.toXPath === to));
    onMappingChange?.(newMappings);
  };

  const deleteMappingsBySource = (source: string) => {
    const newMappings = mappings.filter(m => m.fromXPath !== source);
    onMappingChange?.(newMappings);
  };

  const handleDeleteTransformation = (fn: PositionedFunction) => {
    setPendingDeleteTransformation(fn);
    setShowDeleteNotification(true);
  };

  const handleConfirm = () => {
    if (pendingDeleteSource) {
      deleteMappingsBySource(pendingDeleteSource);
      setPendingDeleteSource(null);
    }
    setShowNotification(false);
  };

  const handleDeleteConfirm = () => {
    if (pendingDeleteTransformation) {
      onDeleteTransformation?.(pendingDeleteTransformation);
      setPendingDeleteTransformation(null);
    }
    setShowDeleteNotification(false);
  };

  const handleCancel = () => {
    setPendingDeleteTransformation(null);
    setPendingDeleteSource(null);
    setShowNotification(false);
  };

  const handleSourceDelete = (source: string) => {
    setPendingDeleteSource(source);
    setShowNotification(true);
  };

  const drawLines = () => {
    const svg = svgRef.current;
    if (!svg) return;

    while (svg.firstChild) svg.removeChild(svg.firstChild);

    mappings.forEach((m) => {
      const rawFrom = m.fromXPath;
      const rawTo = m.toXPath;

      if (!rawFrom || (m.fromFunction && !m.fromFunction) || (m.toFunction && !m.toFunction)) return;

      const startKey = m.fromFunction
        ? `${m.fromFunction}.out.${sanitize(rawFrom)}`
        : sanitize(rawFrom);

      const endKey = m.toFunction
        ? `${m.toFunction}.in.${sanitize(rawTo)}`
        : sanitize(rawTo);

      const startEl = m.fromFunction
        ? funcOutputRefs.current.get(startKey)
        : sourceRefs.current.get(startKey);

      const endEl = m.toFunction
        ? funcInputRefs.current.get(endKey)
        : targetRefs.current.get(endKey);

      if (!startEl || !endEl) return;

      const sRect = startEl.getBoundingClientRect();
      const eRect = endEl.getBoundingClientRect();
      const svgRect = svg.getBoundingClientRect();

      const start = {
        x: sRect.left + sRect.width / 2 - svgRect.left,
        y: sRect.top + sRect.height / 2 - svgRect.top,
      };
      const end = {
        x: eRect.left + eRect.width / 2 - svgRect.left,
        y: eRect.top + eRect.height / 2 - svgRect.top,
      };

      const deltaX = end.x - start.x;
      const deltaY = end.y - start.y;

      const offsetX = deltaX / 1.5;
      const maxArcHeight = 12; 
      const arcHeight = Math.min(maxArcHeight, Math.abs(deltaY) / 2);
      const arcDirection = deltaY > 0 ? 1 : -1;

      const cp1 = {
        x: start.x + offsetX,
        y: start.y - arcDirection * arcHeight,
      };
      const cp2 = {
        x: end.x - offsetX,
        y: end.y - arcDirection * arcHeight,
      };

      const pathString = `M ${start.x} ${start.y} C ${cp1.x} ${cp1.y} ${cp2.x} ${cp2.y} ${end.x} ${end.y}`;
      let shouldHighlight = false;

      if (selectedSource) {
        shouldHighlight = m.fromXPath === selectedSource;
      } else if (selectedTarget) {
        shouldHighlight = m.toXPath === selectedTarget;
      } else if (selectedFunction) {
        shouldHighlight =
          m.fromFunction === selectedFunction || m.toFunction === selectedFunction;
      }

      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', pathString);
      path.setAttribute('stroke', shouldHighlight ? 'red' : 'black');
      path.setAttribute('stroke-width', '1.4');
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke-linejoin', 'round');
      path.setAttribute('stroke-linecap', 'round');
      svg.appendChild(path);
    });
  };

  const [positions, setPositions] = useState<Record<string, { x: number; y: number }>>({});
  useEffect(() => {
    const initialPositions: Record<string, { x: number; y: number }> = {};
    let nextY = 0;
    functions.forEach((fn) => {
      const y =
        typeof fn.y === 'number'
          ? fn.y
          : parseYFromId(fn.id) ?? nextY;

      initialPositions[fn.id] = { x: fn.x ?? FIXED_X, y };

      if (typeof fn.y !== 'number') nextY += ROW_HEIGHT;
    });
    setPositions(initialPositions);
  }, [functions]);

  useEffect(() => {
    const redraw = () => {
      requestAnimationFrame(() => {
          drawLines();
      });
    };

    redraw();
    window.addEventListener('resize', redraw);

    return () => {
      window.removeEventListener('resize', redraw);
    };
  }, [mappings, functions, sourceFields, targetFields, positions]);

  useImperativeHandle(ref, () => ({
    redrawLines: drawLines,
  }));

  return (
    <>
      {showNotification && (
        <SwalNotification
          type="warning"
          title="Are you sure?"
          description="Disconnecting these mappings cannot be undone."
          showCancel={true}
          confirmButtonText="Yes, Disconnect All!"
          cancelButtonText="No, cancel"
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
      {showDeleteNotification && (
        <SwalNotification
          type="warning"
          title="Are you sure?"
          description="Deleting this transformation cannot be undone and will remove all mappings associated with it."
          showCancel={true}
          confirmButtonText="Yes, Delete!"
          cancelButtonText="No, cancel"
          onConfirm={handleDeleteConfirm}
          onCancel={handleCancel}
        />
      )}
      <div className="relative flex justify-between p-4 bg-white border rounded shadow min-h-[500px] overflow-x-auto">
        <svg
          ref={svgRef}
          className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none"
        />

        {/* Sources */}
        <div className="w-1/5 flex-0 z-10 flex flex-col gap-2 pr-2">
          <h3 className="font-semibold mb-2">Sources</h3>
          {sourceFields.map((f) => (
            <div
              key={f.xpath}
              className={`relative p-2 border rounded cursor-pointer ${
                selectedSource === f.xpath ? 'bg-blue-100 border-blue-500' : 'hover:bg-blue-100'
              }`}
              onClick={() => {
                setSelectedSource(f.xpath!);
                setSelectedTarget(null);
                setSelectedFunction(null);
                setSelectedOutput(null); 
              }}
            >
              <div className="text-xs font-medium truncate">{f.name}</div>
              <div className="text-xs font-thin text-gray-500 truncate">{f.xpath}</div>
              <div
                ref={setRef(sourceRefs.current, sanitize(f.xpath!))}
                className={`absolute right-[-10px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-150
                  ${mappings.some((m) => m.fromXPath === f.xpath)
                    ? 'bg-red-500 hover:bg-red-600'
                    : 'bg-blue-500'}
                `}
                onClick={(e) => {
                  e.stopPropagation();
                  if (mappings.some((m) => m.fromXPath === f.xpath)) {
                    handleSourceDelete(f.xpath!);
                  }
                }}
              >
                {mappings.some((m) => m.fromXPath === f.xpath) && (
                  <span className="text-white select-none">×</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Functions */}
        <div className="w-2/5 flex-1 z-30 flex flex-col items-center px-2 relative">
          <div className="flex justify-between items-center mb-2">
            <h3 className="flex-1 font-semibold text-center w-full">Transformations</h3>
            <div className="flex-1">
              <Button
                toggle={false}
                primary={false}
                viewLoc="field-mapping-add-transformation"
                buttonClass="ml-2"
                onClass="flex items-center gap-1 rounded-md px-3 py-1.5 text-xs font-medium bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900 shadow"
                showIcon={true}
                label="Add"
                icon={<AiOutlinePlus className="w-4 h-4" />}
                onClick={() => {
                  const newFn: PositionedFunction = {
                    id: `temp-${Date.now()}`,
                    name: 'New Function',
                    type: 'custom',
                    inputs: [],
                    outputs: [],
                  };
                  onAddTransformation?.(newFn);
                }}
              />
            </div>
          </div>
          <div 
            className="relative w-full max-w-md" 
            style={{ height: '100%', minHeight: '500px' }}
          >
            {functions.map((fn) => {
              logger.debug('Rendering function:', fn);
              const pos = positions[fn.id] || { x: FIXED_X, y: 15 };
              return (
                <motion.div
                  key={fn.id}
                  ref={(el) => setCardRef(el, fn.id)}
                  drag="y"
                  dragMomentum={false}
                  dragElastic={0}
                  dragSnapToOrigin={false}
                  dragConstraints={{ top: 15 }}
                  className="absolute border rounded p-2 bg-gray-100 w-full shadow"
                  style={{ left: pos.x, y: Math.max(15, pos.y), cursor: 'grab' }}
                  onDrag={(_, info) => {
                    setPositions((prev) => ({
                      ...prev,
                      [fn.id]: { ...prev[fn.id], y: info.delta.y },
                    }));
                  }}
                  onDragEnd={() => {
                    const baseId = stripYFromId(fn.id);
                    const card = cardRefs.current[fn.id];
                    if (card) {
                      const containerTop = card.parentElement?.getBoundingClientRect().top ?? 0;
                      const cardTop = card.getBoundingClientRect().top;
                      const relativeY = Math.round(cardTop - containerTop);
                      const clampedY = Math.max(15, relativeY);
                      const newId = embedYInId(baseId, clampedY);

                      const updatedFunctions = functions.map((f) =>
                        f.id === fn.id && f.id !== newId
                          ? { ...f, newId, x: f.x ?? FIXED_X, y: clampedY }
                          : f
                      );
                      onTransformationUpdate?.(updatedFunctions);    
                      requestAnimationFrame(() => drawLines());  
                    }
                  }}
                  onClick={() => {
                    setSelectedFunction(fn.id);
                    setSelectedSource(null);
                    setSelectedTarget(null);
                  }}
                >
                  <div className="flex justify-between items-center py-1 font-semibold text-indigo-700">
                    <div>Transformation</div>
                    <TranformationActions
                      onEditTransformation={() => onEditTransformation?.(fn)}
                      onDeleteTransformation={() => handleDeleteTransformation(fn)}
                    />
                  </div>
                  <div className="text-xs text-left font-normal text-gray-500">{fn.type}</div>
                  <div className="flex justify-between mt-4">
                    <div className="flex flex-col gap-1">
                      {fn.inputs.map((input) => {
                        const inputKey = `${fn.id}.in.${input.key}`;
                        const isMapped = mappings.some(
                          (m) => m.toFunction === fn.id && m.toXPath === `${input.key}`
                        );
                        const mapping = mappings.find(
                          (m) => m.toFunction === fn.id && m.toXPath === `${input.key}`
                        );

                        return (
                          <div key={input.key} className="relative z-50">
                            <div className="text-xs pl-2 pb-2">{input.name}</div>
                            <div
                              ref={setRef(funcInputRefs.current, inputKey)}
                              className={`
                                absolute left-[-14px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full
                                ${selectedSource && !isMapped ? 'bg-white border-blue-400 border-2 cursor-pointer animate-pulse' : 'bg-yellow-500'} 
                              `}
                              onClick={(e) => {
                                e.stopPropagation();
                                if (selectedSource && !isMapped) {
                                  addMapping(selectedSource, input.key.toString(), fn.id);
                                  setSelectedSource(null);
                                }
                              }}
                            >
                              {isMapped && mapping && (
                                <div
                                  className="absolute -top-1 bg-red-600 text-white w-4 h-4 rounded-full flex items-center justify-center cursor-pointer"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    removeMapping(mapping.fromXPath ?? '', mapping.toXPath ?? '');
                                  }}
                                >
                                  ×
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex flex-col gap-1 items-end">
                      {fn.outputs.map((output) => {
                        const outputKey = `${fn.id}.out.${output.key}`;
                        const mapped = mappings.find(
                          (m) => m.fromFunction === fn.id && m.fromXPath === `${output.key}`
                        );

                        return (
                          <div key={output.key} className="relative">
                            <div className="text-xs pr-2 pb-2">{output.name}</div>
                            <div
                              ref={setRef(funcOutputRefs.current, outputKey)}
                              className={`
                                absolute right-[-16px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full cursor-pointer
                                ${selectedOutput?.fnId === fn.id && selectedOutput.outputKey === output.key ? 'bg-white border-green-400 border-2' : 'bg-purple-500'}
                              `}
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedOutput({ fnId: fn.id, outputKey: output.key });
                                setSelectedFunction(fn.id); 
                                setSelectedSource(null); 
                                setSelectedTarget(null);
                              }}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Targets */}
        <div className="w-1/5 flex-0 z-10 flex flex-col gap-4 pl-2">
          <h3 className="font-semibold mb-2">Targets</h3>
          {targetFields.map((f) => {
            const isMapped = mappings.some((m) => m.toXPath === f.xpath);
            const mapping = mappings.find((m) => m.toXPath === f.xpath);
            return (
              <div
                key={f.xpath}
                className={`relative p-2 border rounded cursor-pointer ${
                  isMapped ? 'bg-green-100 border-green-500' : 'hover:bg-gray-50'
                }`}
                onClick={() => {
                  if (selectedSource) {
                    addMapping(selectedSource, f.xpath!, undefined, undefined);
                    setSelectedOutput(null); 
                    setSelectedTarget(null);
                  } else if (selectedOutput) {
                    addMapping(
                      selectedOutput.outputKey.toString(),
                      f.xpath!,
                      undefined,
                      selectedOutput.fnId
                    );
                  }
                  setSelectedSource(null); 
                  setSelectedTarget(f.xpath!);
                }}

              >
                <div className="flex justify-start items-center">
                  <div className="flex-0">
                    <span className="text-xs truncate pl-2">{f.name}</span>
                  </div>
                </div>
                <div className="flex justify-start items-center">
                  <div className="flex-0">
                    <div className="text-xs font-thin text-gray-500 truncate pl-2">{f.xpath}</div>
                  </div>
                </div>
                <div
                  ref={setRef(targetRefs.current, sanitize(f.xpath!))}
                  className={`absolute left-[-10px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full flex items-center justify-center transition-colors duration-150
                    ${isMapped ? 'bg-red-500 cursor-pointer hover:bg-red-600' : 'bg-green-500'}
                  `}
                  onClick={(e) => {
                    if (isMapped && mapping) {
                      e.stopPropagation();
                      removeMapping(mapping.fromXPath ?? '', mapping.toXPath ?? '');
                    }
                  }}
                >
                  {isMapped && (
                    <span className="text-white select-none">×</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
});

export default FieldMappingCanvas;