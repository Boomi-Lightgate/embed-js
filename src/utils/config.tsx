/**
 * Safely retrieves a nested value from an object given a dot-notated string path.
 * @param obj - The object to search.
 * @param path - Dot-notated path (e.g. 'form.selectEnvironmentForm.table').
 * @returns The nested value or undefined.
 */
import logger from '../logger.service';

export const getNestedConfig = (obj: any, path: string): any => {
  const result = path.split('.').reduce((acc, key) => acc?.[key], obj);
  if (result === undefined) {
    //logger.debug(`getNestedConfig: Missing config path "${path}"`);
  }
  return result;
};