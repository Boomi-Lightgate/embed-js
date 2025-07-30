import { useState, useCallback } from 'react';
import { usePlugin } from '../../context/pluginContext';
import { EnvironmentMapExtension } from  '../../service';;
import logger from '../../logger.service';

// XML parsing helper
const parseXmlToJson = (xmlStr: string): any => {
  const parser = new DOMParser();
  const xml = parser.parseFromString(xmlStr, 'application/xml');
  const obj: any = {};

  const traverse = (node: Element, target: any) => {
    for (const child of Array.from(node.children)) {
      const tag = child.tagName;
      const value = child.children.length ? {} : child.textContent;
      if (target[tag]) {
        // Handle multiple children with same tag name
        if (!Array.isArray(target[tag])) {
          target[tag] = [target[tag]];
        }
        target[tag].push(value);
      } else {
        target[tag] = value;
      }
      if (child.children.length) {
        traverse(child, target[tag]);
      }
    }
  };

  traverse(xml.documentElement, obj);
  return obj;
};

export const useUpdateMapExtensions = () => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateError, setUpdateError] = useState<string | null>(null);
  const [updatedExtensions, setUpdatedExtensions] = useState<EnvironmentMapExtension[]>([]);
  const { httpPost, apiAuthUser } = usePlugin();

  const updateMapExtensions = useCallback(
    async (envMapExtension: EnvironmentMapExtension): Promise<EnvironmentMapExtension> => {
      const id = envMapExtension.id;
      if (!id) {
        const msg = 'Code [4002] - EnvironmentMapExtension must have an ID.';
        logger.error(msg);
        setUpdateError(msg);
        throw new Error(msg);
      }

      try {
        setIsUpdating(true);
        setUpdateError(null);
        setUpdatedExtensions([]);

        logger.debug('Executing MapExtension update via httpPost:', envMapExtension);

        const responseText = await httpPost({
          body: JSON.stringify(envMapExtension),
          object: 'EnvironmentMapExtension',
          id,
          overrideAccount: apiAuthUser,
          contentType: 'application/json',
        });

        let updated: EnvironmentMapExtension;
        if (responseText.trim().startsWith('<')) {
          logger.debug('Parsing XML response from Boomi...');
          const json = parseXmlToJson(responseText);
          logger.debug('Parsed XML as JSON:', json);
          updated = envMapExtension;
        } else {
          updated = JSON.parse(responseText);
        }

        setUpdatedExtensions([updated]);
        logger.debug('MapExtension updated successfully:', updated);

        return updated;
      } catch (err: any) {
        const message = err?.message || 'Unknown error';
        logger.error('Failed to update MapExtension:', message);
        setUpdateError(message);
        throw new Error(message);
      } finally {
        setIsUpdating(false);
      }
    },
    [httpPost, apiAuthUser]
  );

  return {
    updateMapExtensions,
    isUpdating,
    updateError,
    updatedExtensions,
  };
};
